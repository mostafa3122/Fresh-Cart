import axios from "axios";

export async function getUserOrders(userId: string) {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

