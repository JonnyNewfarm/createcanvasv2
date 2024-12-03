import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfig from "./DesignConfig";
interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;
  return (
    <DesignConfig
      imageUrl={imageUrl}
      configId={configuration.id}
      imageDimensions={{ width, height }}
    />
  );
};

export default Page;
