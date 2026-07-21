import bcrypt from "bcryptjs";

import { UserRepository } from "@/repositories/user.repository";

export class AuthService {
  static async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const existingUser =
      await UserRepository.findByEmail(
        data.email
      );

    if (existingUser) {
      throw new Error(
        "El correo ya está registrado"
      );
    }

    const passwordHash =
      await bcrypt.hash(
        data.password,
        10
      );

      await UserRepository.createUser({
      name: data.name,
      email: data.email,
      passwordHash,
    });
  }
}
