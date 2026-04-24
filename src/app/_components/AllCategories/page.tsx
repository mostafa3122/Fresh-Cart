import getAllCategories from "@/Api/category.Api";
import CategorySlider from "../CategorySlider/CategorySlider";

async function AllCategories() {
  const data = await getAllCategories();

  return (
    <>
      <CategorySlider dataList={data} />
    </>
  );
}

export default AllCategories;
