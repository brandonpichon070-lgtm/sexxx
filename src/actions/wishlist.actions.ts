"use server";

import { auth } from "@/auth/auth";
import { WishlistService }
from "@/services/wishlist.service";

export async function addToWishlist(
  productId: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error(
      "Usuario no autenticado"
    );
  }

  return WishlistService.add(
    session.user.id,
    productId
  );
}

export async function removeFromWishlist(
  productId: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error(
      "Usuario no autenticado"
    );
  }

  return WishlistService.remove(
    session.user.id,
    productId
  );
}

export async function getMyWishlist() {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error(
      "Usuario no autenticado"
    );
  }

  return WishlistService.getByUser(
    session.user.id
  );
}
