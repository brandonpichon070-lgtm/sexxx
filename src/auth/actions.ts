"use server";

import { AuthService } from "@/services/auth.service";

export async function registerUser(
  formData: FormData
) {
  const name =
    formData.get("name")?.toString() ?? "";

  const email =
    formData.get("email")?.toString() ?? "";

  const password =
    formData.get("password")?.toString() ?? "";

  await AuthService.register({
    name,
    email,
    password,
  });
}
