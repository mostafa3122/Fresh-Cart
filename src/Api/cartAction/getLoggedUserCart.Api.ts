"use server";
import getMyToken from "@/utilities/getMyToken";

async function getLoggedUserCart() {
  const token = await getMyToken();
  const headers: any = {
    token,
    "Content-Type": "application/json",
  };
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    method: "GET",
    headers,
  });
  const data = await response.json();
  return data; // return data to caller

}

export default getLoggedUserCart;
