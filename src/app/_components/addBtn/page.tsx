"use client";
import AddToCart from "@/Api/cartAction/addProductCart.Api";
import { cartItemContext } from "@/app/context/cartItemContext";
import React, { useContext } from "react";
import { toast } from "sonner";
function AddBtn({ id }: { id: string }) {

  const {setDataDetails} = useContext(cartItemContext)
  async function addProductToCart() {
    let res = await AddToCart(id);
    if (res.status == "success") {
      setDataDetails(res.numOfCartItems)
      toast.success("product add to cart successfully.......", {
        position: "top-center",
        duration: 3000,
      });
    }
  }
  return (
    <>
      <button className="btn" onClick={() => addProductToCart()}>
        Add To Cart
      </button>
    </>
  );
}

export default AddBtn;
