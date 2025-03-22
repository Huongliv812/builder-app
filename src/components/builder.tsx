"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing, builder } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import "../builder-registry";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Khởi tạo Builder.io với API key từ biến môi trường
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Sử dụng hook để kiểm tra xem có đang preview trong Builder hay không
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }
  return <DefaultErrorPage statusCode={404} />;
}
