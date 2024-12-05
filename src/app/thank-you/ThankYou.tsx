"use client";

import { useQuery } from "@tanstack/react-query";
import { getPaymentStatus } from "./actions";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const ThankYou = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "";
  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  console.log(orderId);

  if (data === undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-stone-50" />
          <h3 className="font-semibold text-xl">Loading..</h3>
        </div>
      </div>
    );
  }

  if (data === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-stone-50" />
          <h3 className="font-semibold text-xl">Verifying your payment..</h3>
          <p>Please wait</p>
        </div>
      </div>
    );
  }
  const { configuration, billingAddress, shippingAddress, amount } = data;
  const { size } = configuration;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1>Thank you for your order!</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Your canvas is on the way
          </p>
        </div>
        <div className="mt-12 text-md ">
          <p className="text-stone-900 font-medium">Order id</p>
          <p>{orderId}</p>
        </div>

        <div className="flex space-x-6 overflow-hidden mt-4 rounded-xl bg-stone-900/5 ring-1 ring-inset ring-stone-900/10 lg:rounded-2xl"></div>
      </div>
    </div>
  );
};

export default ThankYou;
