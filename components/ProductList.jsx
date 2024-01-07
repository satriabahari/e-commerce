import fetchProduct from "@/utils/api";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await fetchProduct();
  return (
    <section>
      <div className="grid grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...product}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
