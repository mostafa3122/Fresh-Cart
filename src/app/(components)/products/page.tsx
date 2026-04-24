import getAllProducts from "@/Api/product.Api";
import ProdctDetails from "@/app/_components/productCard/page";
import { Iproduct } from "@/app/interface/productInterface";

async function Products() {
  const { data } = await getAllProducts();
 
  return (
    <div className="container px-4 mx-auto my-10">
      <h2 className="h2-style">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
        {data.map((product: Iproduct) => (
          <ProdctDetails key={product._id} product={product}></ProdctDetails>
        ))}
      </div>
    </div>
  );
}

export default Products;
