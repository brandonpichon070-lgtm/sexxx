"use server";

import { auth } from "@/auth/auth";
import { AddressService } from "@/services/address.service";

export async function createAddress(
  data: {
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error(
      "Usuario no autenticado"
    );
  }

  return AddressService.createAddress({
    userId: session.user.id,
    ...data,
  });
}
