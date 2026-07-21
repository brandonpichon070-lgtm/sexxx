"use server";

import { redirect } from "next/navigation";
import { ProductService } from "@/services/product.service";
import cloudinary from "@/lib/cloudinary";

export async function deleteProduct(
  id: string
) {
  await ProductService.deleteProduct(id);
}

export async function getFeaturedProducts() {
  return ProductService.getFeaturedProducts();
}

export async function getProductBySlug(
  slug: string
) {
  return ProductService.getProductBySlug(slug);
}

export async function getProductById(
  id: string
) {
  return ProductService.getProductById(
    id
  );
}

export async function updateProduct(
  id: string,
  formData: FormData
) {
  await ProductService.updateProduct(
    id,
    {
      name:
        formData
          .get("name")
          ?.toString() ?? "",

      description:
        formData
          .get("description")
          ?.toString() ?? "",

      price: Number(
        formData.get("price")
      ),

      categoryId:
        formData
          .get("categoryId")
          ?.toString() ?? "",

      brandId:
        formData
          .get("brandId")
          ?.toString() ?? "",
    }
  );

  redirect("/admin/products");
}
export async function createProduct(
  formData: FormData
) {
  const name =
    formData.get("name")?.toString() ?? "";

  const description =
    formData.get("description")?.toString() ?? "";

  const price = Number(
    formData.get("price")
  );

  const categoryId =
    formData.get("categoryId")?.toString() ?? "";

  const brandId =
    formData.get("brandId")?.toString() ?? "";

  const slug = name
    .toLowerCase()
    .replaceAll(" ", "-");

  let imageUrl = "";

  const image =
    formData.get("image") as File;

  if (
    image &&
    image.size > 0
  ) {
    const bytes =
      await image.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    const result =
      await new Promise<any>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder:
                  "velvet-omosis",
              },
              (
                error,
                result
              ) => {
                if (error)
                  reject(error);

                else
                  resolve(result);
              }
            )
            .end(buffer);
        }
      );

    imageUrl =
      result.secure_url;
  }
console.log("IMAGE:", image);
console.log("IMAGE SIZE:", image?.size);
console.log("IMAGE URL:", imageUrl);
  await ProductService.createProduct({
    name,
    slug,
    description,
    price,
    categoryId,
    brandId,
    imageUrl,
  });

  redirect("/admin/products");
}

