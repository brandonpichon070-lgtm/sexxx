import { DashboardRepository }
from "@/repositories/dashboard.repository";

export class DashboardService {

  static async getStats() {
    return DashboardRepository.getStats();
  }

}
