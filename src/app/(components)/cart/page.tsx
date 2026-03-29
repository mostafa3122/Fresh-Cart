"use client";
import ClearCart from "@/Api/cartAction/clearProductCart.Api";
import getLoggedUserCart from "@/Api/cartAction/getLoggedUserCart.Api";
import RemoveProductCart from "@/Api/cartAction/removeProductCart.Api";
import UpdateProductCart from "@/Api/cartAction/updateProductCart.Api";
import { cartItemContext } from "@/app/context/cartItemContext";
import { ICartProduct } from "@/app/interface/cart.interface";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

function Cart() {
  const [cartList, setCartList] = useState<ICartProduct[]>([]);
  const [cartId, setCartId] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const { setDataDetails } = useContext(cartItemContext);

  // clear cart
  async function clearAllCart() {
    const res = await ClearCart();
    console.log(res);

    if (res.message == "success") {
      getCartData();
      toast.success("Your cart cleared successfully.......", {
        position: "top-right",
        duration: 3000,
      });
    }
  }

  // update cart
  async function updateCart(id: string, count: number) {
    const res = await UpdateProductCart(id, count);
    if (res.status == "success") {
      getCartData();
      toast.success("product updated successfully.......", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#22c55e",
          color: "#fff",
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "14px",
          fontWeight: "600",
        },
      });
    }
  }

  // remover Spacific Product
  async function removerSpacificProduct(id: string) {
    try {
      const res = await RemoveProductCart(id);
      getCartData();
      toast.success("product deleted successfully.......", {
        position: "top-center",
        duration: 3000,
      });
    } catch (error) {
      toast.error("product deleted failed.......", {
        position: "top-center",
        duration: 3000,
      });
    }
  }

  // cart data
  async function getCartData() {
    try {
      let response = await getLoggedUserCart();
      setCartId(response.cartId);
      console.log(response);
      
      setCartList(response.data.products);
      setDataDetails(response.numOfCartItems);
      setTotalPrice(response.data.totalCartPrice);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load cart data", {
        position: "top-center",
        duration: 3000,
      });
    }
    setLoading(false);
  }
  useEffect(() => {
    getCartData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <>
      {cartList.length > 0 ? (
        <div className="sm:w-[85%] mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-500">
                Shopping Cart
              </h2>
            </div>
            <div>
              <button
                onClick={() => clearAllCart()}
                className="hover:bg-red-700 focus:ring-red-300 whitespace-nowrap w-fit px-4 py-2 mx-auto font-semibold text-center text-white transition-all duration-500 bg-red-500 rounded-lg cursor-pointer"
              >
                Clear All
              </button>
            </div>
          </div>

          <div className="sm:flex-row border-b-gray-300 sm:border-none flex flex-col items-center justify-between gap-8 pb-4 mb-4 text-2xl text-gray-500 border-b">
            <h3>
              Total Price:{" "}
              <span className="font-bold text-green-500"> {totalPrice}</span>
            </h3>
            <h4>
              Total Number:{" "}
              <span className="font-bold text-green-500">
                {cartList.length}
              </span>
            </h4>
          </div>
          <div className="rounded-xl  p-4 my-4">
            {cartList.map((item: ICartProduct) => {
              return (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center justify-between gap-8 shadow-lg my-3 rounded-2xl overflow-hidden p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.imageCover}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                    <div className=" ">
                      <h3 className="font-medium text-lg text-gray-500 dark:text-white">
                        {item.product.title}
                      </h3>
                      <h4 className="py-4 font-bold text-green-500 dark:text-white">
                        {item.price} EGP
                      </h4>
                      <div className=" cursor-pointer flex items-center gap-0.5 text-red-600 dark:text-red-500">
                        <i className=" fa-solid fa-trash"></i>
                        <button
                          onClick={() =>
                            removerSpacificProduct(item.product._id)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => {
                        if (item.count > 1) {
                          updateCart(item.product._id, item.count - 1);
                        }
                      }}
                      className=" cursor-pointer inline-flex items-center justify-center p-5  text-2xl font-medium h-6 w-6 text-gray-500 bg-white border-2 border-green-700 rounded-md focus:outline-none hover:bg-green-600 hover:text-white  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
                      type="button"
                    >
                      -
                    </button>
                    <div>
                      <span
                        id="first_product"
                        className=" text-center w-14  text-gray-900 text-sm font-semibold  block px-2.5 py-1  dark:text-white "
                      >
                        {item.count}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        updateCart(item.product._id, item.count + 1);
                      }}
                      className="cursor-pointer inline-flex items-center justify-center h-6 w-6 p-5  text-2xl font-medium text-gray-500 bg-white border-2 border-green-700 rounded-md focus:outline-none hover:bg-green-600 hover:text-white  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 "
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href={`/checkout/${cartId}`}
            className="text-white mx-auto flex items-center justify-center mt-2 bg-green-700
                              hover:bg-green-800 focus:ring-4 focus:outline-none
                                focus:ring-green-300 font-medium rounded-lg text-sm px-5 
                                py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Check Out
          </Link>
        </div>
      ) : (
        <div className="mx-auto  flex max-w-xl flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center shadow-sm">
          <div className="mb-5 flex h-20 w-20 text-green-500 items-center justify-center rounded-full bg-gray-100 text-4xl">
            <i className="fa-solid fa-cart-shopping "></i>
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>
          <p className="mt-3 max-w-md text-sm text-gray-500">
            Start shopping and fill your cart with amazing products.
          </p>

          <Link
            href={"/home"}
            className="mt-6 rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
