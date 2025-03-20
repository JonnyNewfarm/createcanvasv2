"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React, { useRef, useState } from "react";
import NextImage from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { Rnd } from "react-rnd";
import HandleComponent from "@/components/HandleComponent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@headlessui/react";
import { MODELS } from "@/validators/optionValidator";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Check, ChevronsUpDown } from "lucide-react";
import { BASE_PRICE } from "@/config/products";

import { useUploadThing } from "@/lib/uploadthing";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { SaveConfigArgs, saveConfig as _saveConfig } from "./actions";
import { useRouter } from "next/navigation";

interface DesignConfigProps {
  configId: string;
  imageUrl: string;
  imageDimensions: { width: number; height: number };
}

const DesignConfig = ({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfigProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: ["save-config"],
    mutationFn: async (args: SaveConfigArgs) => {
      await Promise.all([saveConfig(), _saveConfig(args)]);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "There was an error on our end. Please try again",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      router.push(`/configure/preview?id=${configId}`);
    },
  });

  const [options, setOptions] = useState<{
    model: (typeof MODELS.options)[number];
  }>({
    model: MODELS.options[0],
  });

  const [dimension, setDimension] = useState({
    width: imageDimensions.width / 4,
    height: imageDimensions.height / 4,
  });

  const [position, setPosition] = useState({
    x: 105,
    y: 205,
  });

  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { startUpload } = useUploadThing("imageUploader");

  async function saveConfig() {
    try {
      const {
        left: canvasLeft,
        top: canvasTop,
        width,
        height,
      } = canvasRef.current!.getBoundingClientRect();

      const { left: containerLeft, top: containerTop } =
        containerRef.current!.getBoundingClientRect();

      const leftOffset = canvasLeft - containerLeft;
      const topOffset = canvasTop - containerTop;

      const correctX = position.x - leftOffset;
      const correctY = position.y - topOffset;

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext("2d");

      const userImage = new Image();
      userImage.crossOrigin = "anonymous";
      userImage.src = imageUrl;
      await new Promise((resolve) => (userImage.onload = resolve));

      context?.drawImage(
        userImage,
        correctX,
        correctY,
        dimension.width,
        dimension.height
      );
      const base64 = canvas.toDataURL();
      const base64Data = base64.split(",")[1];
      const blob = base64ToBlob(base64Data, "image/png");
      const file = new File([blob], "filename.png", { type: "image/png" });

      await startUpload([file], { configId });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description:
          "There was a problem saving your canvas, please try again.",
        variant: "destructive",
      });
    }
  }

  function base64ToBlob(base64: string, mimeType: string) {
    const byteChars = atob(base64);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  }

  return (
    <div className="relative mt-20 grid grid-cols-1 lg:grid-cols-3  mb-20 pb-20 ">
      <div
        ref={containerRef}
        className="relative h-[37.5rem] w-full overflow-hidden col-span-2 flex max-w-4xl items-center justify-center rounded-lg border-2  border-stone-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        <div
          className={`relative w-80 bg-opacity-50 pointer-events-none aspect-[${options.model.label}]`}
        >
          <AspectRatio
            ratio={options.model.ratio}
            ref={canvasRef}
            className={`pointer-events-none relative z-50 aspect-[${options.model.label}] w-full h-full border-2 border-stone-800`}
          >
            <NextImage
              src={"/canvas.png"}
              alt=""
              fill
              className="pointer-events-none z-50 select-none opacity-20"
            />
          </AspectRatio>
          <div
            className="absolute z-40 inset-0 left-[3px] top-px 
          right-[3px] bottom-px  shadow-[0_0_0_99999px_rgba(226,231,235,0.6)]"
          />
        </div>
        <Rnd
          default={{
            x: 170,
            y: 100,
            height: imageDimensions.height / 5,
            width: imageDimensions.width / 5,
          }}
          className="absolute z-20 border-[3px] border-stone-800"
          lockAspectRatio
          onResizeStop={(_, __, ref, ___, { x, y }) => {
            setDimension({
              height: parseInt(ref.style.height),
              width: parseInt(ref.style.width),
            });
          }}
          onDragStop={(_, data) => {
            const { x, y } = data;
            setPosition({ x, y });
          }}
          resizeHandleComponent={{
            bottomLeft: <HandleComponent />,
            bottomRight: <HandleComponent />,
            topRight: <HandleComponent />,
            topLeft: <HandleComponent />,
          }}
        >
          <div className="relative w-full h-full">
            <NextImage
              alt="your image"
              fill
              src={imageUrl}
              className="pointer-events-none object-contain"
            />
          </div>
        </Rnd>
      </div>
      <div className="h-[30.5rem] w-full col-span-full lg:col-span-1 flex flex-col bg-white">
        <ScrollArea className="relative flex-1 overflow-auto">
          <div
            area-hidden="true"
            className="absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none"
          />

          <div className="px-8 pb-12 pt-8">
            <h1 className="tracking-tight font-bold text-3xl">
              Customize your canvas
            </h1>

            <div className="w-full h-px bg-stone-200 my-6" />
            <div className="realtive mt-4 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <div className="relative flex flex-col gap-3 w-full">
                  <Label className="font-semibold">Canvas size</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="w-full justify-between"
                        variant="outline"
                        role="combobox"
                      >
                        {options.model.label}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {MODELS.options.map((model) => (
                        <DropdownMenuItem
                          key={model.label}
                          className={cn(
                            "flex text-sm gap-1 items-center p-2 cursor-default hover:bg-stone-100",
                            {
                              "bg-stone-100":
                                model.label === options.model.label,
                            }
                          )}
                          onClick={() => {
                            setOptions((prev) => ({ ...prev, model }));
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              model.label === options.model.label
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {model.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div className="flex gap-1 mt-4 text-sm">
              {" "}
              <p className="">Canvas price:</p>
              <p className="">{options.model.price / 100} $</p>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full px-8 h-16 bg-white">
          <div className="h-px w-full bg-stone-200" />
          <div className="w-full h-full flex justify-end items-center">
            <div className="w-full flex gap-6 items-center">
              <p className="font-medium whitespace-nowrap">
                {formatPrice(BASE_PRICE / 100 + options.model.price / 100)}
              </p>
              <Button
                isLoading={isPending}
                disabled={isPending}
                loadingText="Creating"
                onClick={() =>
                  mutate({
                    configId,

                    size: options.model.value,
                  })
                }
                size="sm"
                className="w-full bg-stone-900 rounded-lg text-white hover:bg-stone-700 "
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-1.5 inline" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignConfig;
