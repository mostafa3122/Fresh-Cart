"use server";

import { IShippingAddress } from "@/app/interface/payment.interface";
import getMyToken from "@/utilities/getMyToken";

export async function onlinePayment(formValues: IShippingAddress , cardId: string) {

  const token: any = await getMyToken();
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${process.env.NEXT_URL}`,
    {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress: formValues }),

    }
  
    
  ); 
  const payload = await response.json();
  return payload;
}
