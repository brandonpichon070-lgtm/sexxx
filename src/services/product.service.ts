import { ProductRepository } from "@/repositories/product.repository";

export class ProductService {
  static async getFeaturedProducts() {
    return ProductRepository.findFeatured();
  }

  static async deleteProduct(id: string) {
    return ProductRepository.delete(id);
  }

  static async getProductBySlug(slug: string) {
    return ProductRepository.findBySlug(slug);
  }

  static async getAllProducts() {
    return ProductRepository.findAll();
  }

  static async createProduct(data: {
    name: string;
    slug: string;
    description?: string;
    imageUrl?: string;
    price: number;
    categoryId: string;
    brandId: string;
    status: "ACTIVE" | "DRAFT" | "OUT_OF_STOCK" | "ARCHIVED";
  }) {
    return ProductRepository.create(data);
  }

  static async getProductById(id: string) {
    return ProductRepository.findById(id);
  }

  static async updateProduct(
    id: string,
    data: {
      name: string;
      description?: string;
      price: number;
      categoryId: string;
      brandId: string;
      status?: "ACTIVE" | "DRAFT" | "OUT_OF_STOCK" | "ARCHIVED";
    },
  ) {
    return ProductRepository.update(id, data);
  }
}
