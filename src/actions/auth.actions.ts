"use server";

import { AuthService } from "@/services/auth.service";

export async function registerUser(
  formData: FormData
) {
  const name =
    formData.get("name") as string;

  const email =
    formData.get("email") as string;

  const password =
    formData.get("password") as string;

  return AuthService.register({
    name,
    email,
    password,
  });
}
