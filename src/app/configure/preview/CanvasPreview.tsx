"use client";
import Canvas from "@/components/Canvas";
import { BASE_PRICE } from "@/config/products";
import { formatPrice } from "@/lib/utils";
import { MODELS } from "@/validators/optionValidator";
import { Button } from "@/components/ui/button";
import { Configuration } from "@prisma/client";
import { Check } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { useMutation } from "@tanstack/react-query";
import { createCheckoutSession } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import LoginModal from "@/components/LoginModal";

const CanvasPreview = ({ configuration }: { configuration: Configuration }) => {
  const { size, id } = configuration;
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useKindeBrowserClient();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  let total = BASE_PRICE;
  if (size === "medium") {
    total += MODELS.options[0].price;
  }
  if (size === "large") {
    total += MODELS.options[1].price;
  }

  if (size === "xl") {
    total += MODELS.options[2].price;
  }

  const { mutate: createSession } = useMutation({
    mutationKey: ["get-checkout-session"],
    mutationFn: createCheckoutSession,
    onSuccess: ({ url }) => {
      if (url) {
        router.push(url);
      } else {
        throw new Error("Payment was not successfull");
      }
    },
    onError: () => {
      toast({
        title: "There was an error form our end",
        description: "Something went wrong on our end. Please try again",
        variant: "destructive",
      });
    },
  });

  const handleCheckout = () => {
    if (user) {
      createSession({ configId: id });
    } else {
      localStorage.setItem("configurationId", id);
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center text-[#333231]"
      ></div>

      <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

      <div className="mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
        <div className="md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2">
          <img
            className="w-full rounded-md"
            alt="your-image"
            src={configuration.croppedImageUrl!}
          />
        </div>

        <div className="mt-6 sm:col-span-9  md:row-end-1  md:ml-20 lg:ml-13">
          <h3 className="text-3xl font-bold tracking-tight #333231">
            Your painting
          </h3>
          <div className="mt-3 flex items-center gap-1.5 text-base">
            <Check className="h-4 w-4 text-[#333231]" />
            Ready to ship
          </div>
        </div>

        <div className="sm:col-span-12 md:col-span-9 text-base sm:ml-16 md:pl-10 md:ml-15 lg:ml-11">
          <div className="grid grid-cols-1 gap-y-8 border-b border-stone-300 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
            <div>
              <p className=" font-semibold text-[#333231]">Highlights</p>
              <ol className="mt-3  list-disc list-inside">
                <li>Packaging made from recycled materials</li>
                <li>3 year paint warranty</li>
              </ol>
            </div>
            <div>
              <p className="font-semibold ">Material</p>
              <ol className="mt-3 text-stone-800 list-disc list-inside">
                <li>Canvas made of linen</li>
                <li>Acrylic paint</li>
              </ol>
            </div>
          </div>
          <div className="mt-7">
            <div className="bg-white p-6 sm:rounded-lg sm:p-8">
              <div className="flow-root text-sm">
                <div className="flex items-center justify-between py-1 mt-2">
                  <p className="text-[#333231]">Starting price</p>
                  <p className="font-m text-stone-900">
                    {formatPrice(BASE_PRICE / 100)}
                  </p>
                </div>

                {size === "medium" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-[#333231]">
                      Size {MODELS.options[0].label}
                    </p>
                    <p className="font-medium text-stone-900">
                      {formatPrice(MODELS.options[0].price / 100)}
                    </p>
                  </div>
                ) : null}
                {size === "large" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-[#333231]">
                      Size {MODELS.options[1].label}
                    </p>
                    <p className="font-medium text-stone-900">
                      {formatPrice(MODELS.options[1].price / 100)}
                    </p>
                  </div>
                ) : null}

                {size === "xl" ? (
                  <div className="flex items-center justify-between py-1 mt-2">
                    <p className="text-[#333231]">
                      Size {MODELS.options[2].label}
                    </p>
                    <p className="font-medium text-stone-900">
                      {formatPrice(MODELS.options[2].price / 100)}
                    </p>
                  </div>
                ) : null}

                <div className="my-2 h-px #FCFBF4 " />
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-stone-900">Order total</p>
                  <p className="font-semibold text-stone-900">
                    {formatPrice(total / 100)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end pb-12">
              <Button
                onClick={() => handleCheckout()}
                className="px-6 sm:px-8 lg:px-10 bg-[#333231] text-light rounded-lg"
              >
                Check out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanvasPreview;
