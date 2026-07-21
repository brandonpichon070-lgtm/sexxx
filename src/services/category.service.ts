import { CategoryRepository } from "@/repositories/category.repository";

export class CategoryService {
  static async getAllCategories() {
    return CategoryRepository.findAll();
  }
}
