"use server";

import { DashboardService }
from "@/services/dashboard.service";

export async function getDashboardStats() {
  return DashboardService.getStats();
}
