import getAllBrands from "@/Api/brands.Api";
import BrandCard from "@/app/_components/BrandCard/BrandCard";
import { IBrand } from "@/app/interface/brand.interface";

async function Brands() {
  const data = await getAllBrands();

  return (
    <>
      <div className="container px-4  mx-auto my-10">
        <h2 className="  h2-style">All Brands</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 ">
          {data.map((dataList: IBrand) => (
            <BrandCard key={dataList._id} dataList={dataList}></BrandCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Brands;
