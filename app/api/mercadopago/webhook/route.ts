import { NextRequest, NextResponse } from "next/server";

import { Payment } from "mercadopago";
import { mercadoPago } from "@/lib/mercadopago";

import { updatePayment } from "@/actions/payment.actions";
import { updateOrderStatus } from "@/actions/order.actions";

export async function POST(
  request: NextRequest
) {
  try {

    const body = await request.json();

    if (body.type !== "payment") {
      return NextResponse.json({
        ok: true,
      });
    }

    const payment = new Payment(
      mercadoPago
    );

    const paymentInfo =
      await payment.get({
        id: body.data.id,
      });

    const orderId =
      paymentInfo.external_reference!;

    await updatePayment(
  orderId,
  paymentInfo.id!.toString(),
  paymentInfo.status === "approved"
    ? "PAID"
    : "PENDING"
);

    if (
      paymentInfo.status ===
      "approved"
    ) {
      await updateOrderStatus(
        orderId,
        "PAID"
      );
    }

    return NextResponse.json({
      ok: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        ok: false,
      },
      {
        status: 500,
      }
    );

  }
}
