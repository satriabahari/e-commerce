import { useEffect } from "react";
import fetchProduct from "@/utils/api";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProductItems,
  setProducts,
} from "@/features/productList/productSlice";
import { selectedSortBy } from "@/features/productList/filterSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectedProductItems);
  const sortBy = useSelector(selectedSortBy);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProduct();
        dispatch(setProducts(productsData));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    switch (sortBy) {
      case "A-Z": {
        const sortProducts = [...products].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        dispatch(setProducts(sortProducts));
        break;
      }
      case "Z-A": {
        const sortProducts = [...products].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        dispatch(setProducts(sortProducts));
        break;
      }
      case "Highest Price": {
        const sortProducts = [...products].sort((a, b) => b.price - a.price);
        dispatch(setProducts(sortProducts));
        break;
      }
      case "Lowest Price": {
        const sortProducts = [...products].sort((a, b) => a.price - b.price);
        dispatch(setProducts(sortProducts));
        break;
      }
    }
  }, [sortBy]);

  return (
    <section>
      <div className="grid grid-cols-5 gap-x-4 gap-y-6 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
