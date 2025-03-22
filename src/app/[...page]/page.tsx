import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";

// Khởi tạo Builder.io với API key từ biến môi trường
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// Định nghĩa kiểu PageProps với params luôn là một Promise
export interface PageProps {
  params: Promise<{ page: string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] }>;
}

export default async function Page(props: PageProps) {
  // Luôn lấy giá trị của params thông qua await
  const params = await props.params;
  const builderModelName = "page";

  // Lấy nội dung trang từ Builder.io dựa trên urlPath được tạo từ params
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/" + (params.page.join("/") || ""),
      },
    })
    .toPromise();

  return (
    <>
      {/* Render nội dung trang được lấy từ Builder.io */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
