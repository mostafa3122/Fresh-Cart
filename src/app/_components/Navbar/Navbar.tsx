"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "iconsax-reactjs";
import { signOut, useSession } from "next-auth/react";
import { cartItemContext } from "@/app/context/cartItemContext";

export default function Navbar() {
  let { data: session } = useSession();

  const { dataDetails } = useContext(cartItemContext);

  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // gets current URL path

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-gray-200 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto w-full lg:w-[80%] p-4 flex flex-wrap items-center justify-between">
        {/* Logo + Links */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <Link
              href="/home"
              className="flex items-center font-bold text-2xl text-gray-800 hover:text-green-700 transition-colors duration-200"
            >
              {/* <ShoppingCart size="35" color="#37d67a" variant="Broken" /> */}
              <i className="fa-solid fa-cart-shopping text-green-500 "></i>

              <span className="ms-2">FreshCart</span>
            </Link>

            <ul className="hidden lg:flex items-center gap-6 ms-6">
              {[
                { name: "Home", path: "/home" },
                { name: "Products", path: "/products" },
                { name: "Categories", path: "/categories" },

                { name: "Brands", path: "/brands" },
              ].map((link) => (
                <li
                  key={link.path}
                  className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                    isActive(link.path)
                      ? "bg-green-500 text-white"
                      : "hover:bg-green-200"
                  }`}
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
              {session && (
                <li>
                  <Link
                    href="/cart"
                    className={`relative flex w-11 h-11  items-center justify-center rounded-full transition-all duration-200 ${
                      isActive("/cart")
                        ? "bg-green-500 text-white"
                        : " text-green-500 hover:bg-green-100"
                    }`}
                  >
                    <i className="fa-solid fa-cart-shopping text-xl"></i>

                    {/* Badge */}
                    <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white shadow">
                      {dataDetails}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 hover:text-green-700 transition"
            onClick={() => setOpen(!open)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Right section */}
        <div
          className={`w-full lg:w-auto ${
            open ? "block" : "hidden"
          } lg:flex lg:items-center lg:justify-between`}
        >
          {/* Mobile Links */}
          <ul className="flex flex-col items-center lg:hidden gap-4 mt-4 text-center">
            {[
              { name: "Home", path: "/home" },
              { name: "Products", path: "/products" },
              { name: "Categories", path: "/categories" },
              { name: "Brands", path: "/brands" },
            ].map((link) => (
              <li
                key={link.path}
                className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                  isActive(link.path)
                    ? "bg-green-500 text-white"
                    : "hover:bg-green-200"
                }`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
            {session && (
              <li>
                <Link
                  href="/cart"
                  className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200 ${
                    isActive("/cart")
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700 hover:bg-green-100"
                  }`}
                >
                  <i className="fa-solid fa-cart-shopping text-xl"></i>

                  {/* Badge */}
                  <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold text-white shadow">
                   {dataDetails}
                  </span>
                </Link>
              </li>
            )}
          </ul>

          {/* Social + Auth */}
          <ul className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0">
            {session ? (
              <>
                <li className="bg-green-500 text-white p-1 rounded-full transition">
                  <Link href="/home"  className=" px-2 text-xl capitalize">
                     {session?.user?.name?.charAt(0)}
                  </Link>
                </li>
                <li className="">
                  <button
                    onClick={() => signOut({ callbackUrl: "/signin" })}
                    className="hover:text-red-700 cursor-pointer transition"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              // dropdwon
              // <>
              //   <li className="relative">
              //     <button
              //       onClick={() => setUserMenu((prev) => !prev)}
              //       className="capitalize text-green-700 hover:text-green-900 transition"
              //     >
              //       Hi {session?.user?.name}
              //     </button>

              //     {/* Dropdown */}
              //     {userMenu && (
              //       <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden border z-50">
              //         <li>
              //           <button
              //             onClick={() => signOut({ callbackUrl: "/signin" })}
              //             className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition"
              //           >
              //             Sign Out
              //           </button>
              //         </li>
              //       </ul>
              //     )}
              //   </li>
              // </>
              <>
                <li className="flex justify-center gap-3 text-xl">
                  <i className="cursor-pointer hover:text-blue-700 fa-brands fa-facebook"></i>
                  <i className="cursor-pointer hover:text-blue-400 fa-brands fa-twitter"></i>
                  <i className="cursor-pointer hover:text-red-700 fa-brands fa-instagram"></i>
                  <i className="cursor-pointer hover:text-blue-500 fa-brands fa-linkedin"></i>
                </li>

                <li className="hover:text-green-700 transition">
                  <Link href="/signup">Register</Link>
                </li>
                <li className="hover:text-green-700 transition">
                  <Link href="/signin">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
