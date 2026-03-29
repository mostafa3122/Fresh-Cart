"use server";
import getMyToken from "@/utilities/getMyToken";
async function RemoveProductCart(id: string) {
  const token = await getMyToken();
  const headers: any = {
    token,
    "Content-Type": "application/json",
  };
 
  if (token) {
    const response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        method: "DELETE",
        headers,
      
      }
    );
    let data = await response.json();
    return data; // return data to caller
  }
}

export default RemoveProductCart;
