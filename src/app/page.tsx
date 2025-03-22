"use client";
import { builder, BuilderComponent } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function HomePage() {
  return (
    <BuilderComponent
      model="page"
      contentLoaded={(content) => console.log("Loaded content:", content)}
    />
  );
}
