"use server";

import { CategoryService } from "@/services/category.service";

export async function getAllCategories() {
  return CategoryService.getAllCategories();
}
