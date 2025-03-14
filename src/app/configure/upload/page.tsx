"use client";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import React, { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Progress } from "@/components/ui/progress";
import { __useUploadThingInternal } from "@uploadthing/react/native";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  const router = useRouter();

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;

      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setDragOver(false);

    toast({
      title: `${file.file.type} type is not supported.`,
      description: "Please choose a PNG, JPG, or JPEG",
      variant: "destructive",
    });
  };
  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined });

    setDragOver(false);
  };

  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={cn(
        "relative  h-[60vh] border-dotted border-black border-[1px] flex-1 my-16 w-full rounded-xl bg-stone-900/5 ring-1 grainy-light ring-inset ring-stone-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-black-900/25 bg-black-900/10": dragOver,
        }
      )}
    >
      <div className="relative bg-stone-50 flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setDragOver(true)}
          onDragLeave={() => setDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className=" w-full flex-1 flex flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {dragOver ? (
                <MousePointerSquareDashed
                  className="
              h-6 w-6 text-stone-500 mb-2"
                />
              ) : isUploading || isPending ? (
                <Loader2 className="animate-spin h-6 w-6 text-stone-500 mb-2" />
              ) : (
                <Image className="h-6 w-6 text-stone-500 mb-2 cursor-pointer" />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-stone-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading..</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 w-40 h-2 bg-stone-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting..</p>
                  </div>
                ) : dragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-sm text-stone-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
