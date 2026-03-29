"use server";
import { Iproduct } from "@/app/interface/productInterface";
import Image from "next/image";
import Link from "next/link";
import AddBtn from "../addBtn/page";
async function ProdctDetails({ product }: { product: Iproduct }) {
  return (
    <>
      <div className="">
        <div className="border overflow-hidden group shadow-[4px_4px_10px_rgba(0,0,0,0.2)] rounded-md p-4 h-full flex flex-col">
          <Link
            href={`/products/${product._id}`}
            className="flex flex-col flex-grow"
          >
            <Image
              width={500}
              height={500}
              src={product.imageCover}
              alt={product.title || "Product Item Name"}
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-lg sm:text-xl mt-2 text-green-700 font-medium">
              {product.category.name}
            </h3>
            <h4 className="line-clamp-1 text-sm sm:text-base font-semibold">
              {product.title}
            </h4>

            <div className="flex py-3 flex-wrap items-center justify-between mt-auto">
              <div>
                <span className="text-sm sm:text-base">
                  {product.price} EGP
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-sm sm:text-base">{product.ratingsAverage}</p>
                <i className="ms-1 fas fa-star text-amber-300"></i>
              </div>
            </div>
          </Link>

          <AddBtn id={product._id} />
        </div>
      </div>
    </>
  );
}

export default ProdctDetails;
