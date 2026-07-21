import { Preference } from "mercadopago";
import { mercadoPago } from "@/lib/mercadopago";

export class MercadoPagoService {
  static async createPreference(data: {
    orderId: string;
    items: {
      id: string;
      title: string;
      quantity: number;
      unit_price: number;
    }[];
  }) {
    try {
      console.log("========== MERCADO PAGO ==========");
      console.log(
        "Access Token:",
        process.env.MERCADOPAGO_ACCESS_TOKEN?.substring(
          0,
          20
        ) + "..."
      );

      const preference = new Preference(
        mercadoPago
      );

      const body = {
        items: data.items.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          currency_id: "MXN",
          unit_price: item.unit_price,
        })),

        external_reference: data.orderId,

        back_urls: {
          success:
            "http://localhost:3000/payment/success",

          failure:
            "http://localhost:3000/payment/failure",

          pending:
            "http://localhost:3000/payment/pending",
        },

        auto_return: "approved" as const,

        // Cuando publiques el proyecto cambia localhost
        // por tu dominio HTTPS.
        // notification_url:
        // process.env.MP_WEBHOOK_URL,
      };

      console.log("========== BODY ==========");
      console.log(
        JSON.stringify(body, null, 2)
      );

      const response =
        await preference.create({
          body,
        });

      console.log(
        "========== RESPONSE =========="
      );
      console.log(response);

      return response;

    } catch (error: any) {

      console.error(
        "========== ERROR MERCADO PAGO =========="
      );

      console.error(
        JSON.stringify(
          error,
          null,
          2
        )
      );

      throw error;
    }
  }
}
