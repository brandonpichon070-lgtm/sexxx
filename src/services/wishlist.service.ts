import { WishlistRepository }
from "@/repositories/wishlist.repository";

export class WishlistService {

  static async add(
    userId: string,
    productId: string
  ) {
    return WishlistRepository.add(
      userId,
      productId
    );
  }

  static async remove(
    userId: string,
    productId: string
  ) {
    return WishlistRepository.remove(
      userId,
      productId
    );
  }

  static async getByUser(
    userId: string
  ) {
    return WishlistRepository.findByUser(
      userId
    );
  }

  static async exists(
    userId: string,
    productId: string
  ) {
    return WishlistRepository.exists(
      userId,
      productId
    );
  }
}
