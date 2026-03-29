"use server";
import getMyToken from "@/utilities/getMyToken";
async function UpdateProductCart(id: string, countNumber: number) {
  const token = await getMyToken();
  const headers: any = {
    token,
    "Content-Type": "application/json",
  };
  const payload = { count: countNumber };

  if (token) {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify(payload),
      }
    );
    let data = await response.json();
    return data; // return data to caller
  }
}

export default UpdateProductCart;
