"use server";
import getMyToken from "@/utilities/getMyToken";
export default async function AddToCart(id: string) {
  const token = await getMyToken();
  const headers: any = {
    token,
    "Content-Type": "application/json",
  };
  const payload = { productId: id };

  if (token) {
    const response = await fetch(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    return data; // return data to caller
  }
}
