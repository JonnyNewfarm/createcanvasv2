import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import CanvasPreview from "./CanvasPreview";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Page = async (props: { searchParams: SearchParams }) => {
  const { id } = await props.searchParams;

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
