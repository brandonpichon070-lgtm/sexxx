import { AddressRepository } from "@/repositories/address.repository";

export class AddressService {
  static async createAddress(data: {
    userId: string;
    fullName: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }) {
    return AddressRepository.create(
      data
    );
  }

  static async getAddressesByUser(
    userId: string
  ) {
    return AddressRepository.findByUser(
      userId
    );
  }
}
