import ProductDetails from "@/Api/productDetails.api";
import AddBtn from "@/app/_components/addBtn/page";
import Image from "next/image";

async function productDetails({ params }: { params: { id: string } }) {
  let { id } = await params;

  let data = await ProductDetails(id);

  return (
    // <div className="container my-10 w-[90%] mx-auto">
    //   <div className="flex flex-wrap items-center">
    //     <div className=" border border-gray-500  overflow-hidden rounded-md w-1/4">
    //       <Image
    //         width={500}
    //         height={500}
    //         src={data.imageCover}
    //         alt={data.title}
    //         className="w-full h-auto object-cover "
    //       />
    //     </div>
    //     <div className="w-3/4">
    //       <div className="px-5 flex h-full flex-col justify-between">
    //         <div>
    //           <h2 className="text-3xl font-semibold pb-4">{data.title}</h2>
    //           <p className=" text-gray-700">{data.description}</p>
    //         </div>
    //         <div className="flex  text-2xl py-3 flex-wrap items-center justify-between">
    //           <div>
    //             <h3 className=" text-green-700">{data.category.name}</h3>
    //             <span>{data.price} Egp</span>
    //           </div>

    //           <div className="flex items-center ">
    //             <p>{data.ratingsAverage}</p>
    //             <i className="ms-1 fas fa-star  text-amber-300"></i>
    //           </div>
    //           <div>
    //             <i className="fa-regular fa-heart text-red-600 font-bold"></i>
    //           </div>
    //         </div>
    //         <button className="btn">Add to Cart</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container my-10 w-[90%] mx-auto">
      <div className="flex flex-wrap items-center">
        {/* IMAGE */}
        <div
          className="border border-gray-500 overflow-hidden rounded-md 
                    w-full sm:w-1/2 lg:w-1/4"
        >
          <Image
            width={500}
            height={500}
            src={data.imageCover}
            alt={data.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full sm:w-1/2 lg:w-3/4">
          <div className="px-5 flex h-full flex-col justify-between">
            <div>
              <h2 className="text-3xl font-semibold pb-4">{data.title}</h2>
              <p className="text-gray-700">{data.description}</p>
            </div>

            <div className="flex text-2xl py-3 flex-wrap items-center justify-between">
              <div>
                <h3 className="text-green-700">{data.category.name}</h3>
                <span>{data.price} Egp</span>
              </div>

              <div className="flex items-center">
                <p>{data.ratingsAverage}</p>
                <i className="ms-1 fas fa-star text-amber-300"></i>
              </div>

              <div>
                <i className="fa-regular fa-heart text-red-600 font-bold"></i>
              </div>
            </div>

            <AddBtn id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetails;
