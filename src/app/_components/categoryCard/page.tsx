"use client";
import { Icategory } from "@/app/interface/category.interface";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

function CategoryDetails({ dataList }: { dataList: Icategory }) {
  return (
    <Dialog>
      {/* The clickable trigger */}
      <DialogTrigger asChild>
        <div className="h-[390px] border pb-8 rounded-xl  text-center shadow-[4px_4px_10px_rgba(0,0,0,0.2)] text-gray-500 hover:text-teal-500 transition-colors duration-400 cursor-pointer">
          <img
            className="h-[300px] w-full object-cover rounded-md"
            src={dataList.image}
            alt={dataList.name || "category Item Name"}
          />
          <h3 className="mt-8 text-xl capitalize font-semibold text-center">
            {dataList.name}
          </h3>
        </div>
      </DialogTrigger>

      {/* The dialog content */}
      <DialogContent className="h-[450px] w-full max-w-2xl sm:max-w-[600px]">
        <div className="flex flex-col md:flex-row mt-5 justify-between gap-8 md:gap-12 items-center">
          <DialogHeader className="w-full sm:w-[60%]">
            <DialogTitle className="text-2xl font-semibold">
              <p className="text-green-600 text-4xl">{dataList.name}</p>
              <p className="text-gray-500 text-lg font-medium mt-3">
                {dataList.slug || "No description available."}
              </p>
            </DialogTitle>
          </DialogHeader>

          <div className="w-full sm:w-[40%] mt-5 sm:mt-0">
            <Image
              src={dataList.image}
              alt={dataList.name || "Category Image"}
              width={200}
              height={200}
              className="h-[300px] w-full rounded-lg"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="bg-green-500 text-white hover:bg-green-800 border-none"
              variant="outline"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CategoryDetails;
