
import getAllCategories from "@/Api/category.Api";
import CategoryDetails from "@/app/_components/categoryCard/page";
import { Icategory } from "@/app/interface/category.interface";

async function Categories() {
  const  data  = await getAllCategories();

  return (
    <>
      <div className="container px-4 mx-auto my-10">
        <h2 className="h2-style">All Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 ">
          {data.map((dataList: Icategory) => (
            <CategoryDetails
              key={dataList._id}
              dataList={dataList}
            ></CategoryDetails>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
