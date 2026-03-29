"use server";
import getMyToken from "@/utilities/getMyToken";
export default async function ClearCart() {
  const token = await getMyToken();
  const headers: any = {
    token,
    "Content-Type": "application/json",
  };

  if (token) {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        method: "DELETE",
        headers,
      }
    );
    const data = await response.json();
    return data; // return data to caller
  }
}
