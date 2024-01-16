import { useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/features/productList/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { sortBy, category } = useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.product);

  const filteredProducts = useMemo(() => {
    const filtered = items.filter((product) => {
      const matchesCategory = category === "" || product.category === category;
      return matchesCategory;
    });
    switch (sortBy) {
      case "A-Z": {
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      }
      case "Z-A": {
        return filtered.sort((a, b) => b.title.localeCompare(a.title));
      }
      case "Highest Price": {
        return filtered.sort((a, b) => b.price - a.price);
      }
      case "Lowest Price": {
        return filtered.sort((a, b) => a.price - b.price);
      }
    }

    return filtered;
  }, [items, sortBy, category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <section>
      <div className="grid grid-cols-5 gap-x-4 gap-y-6 p-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
