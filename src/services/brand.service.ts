import { BrandRepository } from "@/repositories/brand.repository";

export class BrandService {
  static async getAllBrands() {
    return BrandRepository.findAll();
  }
}
