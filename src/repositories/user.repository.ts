import { prisma } from "@/lib/prisma";

export class UserRepository {
  static async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  static async createUser(data: {
    name: string;
    email: string;
    passwordHash: string;
  }) {
    return prisma.user.create({
      data,
    });
  }
}
