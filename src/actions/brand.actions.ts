"use server";

import { BrandService } from "@/services/brand.service";

export async function getAllBrands() {
  return BrandService.getAllBrands();
}
