"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAuthStatus } from "./actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const page = () => {
  const [configId, setConfigId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");

    if (configurationId) setConfigId(configurationId);
  }, []);

  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  });

  if (data?.success) {
    if (configId) {
      localStorage.removeItem("configurationId");
      router.push(`/configure/preview?id=${configId}`);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-7 w-7 animate-spin text-stone-500" />
        <h1 className="font-semibold text-xl">Logging in..</h1>
      </div>
    </div>
  );
};

export default page;
