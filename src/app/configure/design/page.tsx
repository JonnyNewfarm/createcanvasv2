import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfig from "./DesignConfig";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

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
