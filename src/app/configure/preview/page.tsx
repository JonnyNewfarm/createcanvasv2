import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import CanvasPreview from "./CanvasPreview";

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
  return <CanvasPreview configuration={configuration} />;
};

export default Page;
