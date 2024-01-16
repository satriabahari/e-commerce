import { setCategory } from "@/features/productList/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.product);
  const { category: selectedCategory } = useSelector((state) => state.filter);

  const handleFilterSelect = (value) => {
    dispatch(setCategory(value));
  };

  return (
    <div className="flex gap-x-4">
      <button
        className={`py-2 px-4 rounded-full bg-neutral-700 text-gray-50 ${
          "" === selectedCategory ? "border-2 border-neutral-500" : null
        }`}
        onClick={() => handleFilterSelect("")}
      >
        All Products
      </button>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`py-2 px-4 rounded-full bg-neutral-700 text-gray-50 ${
              category === selectedCategory
                ? "border-2 border-neutral-500"
                : null
            }`}
            onClick={() => handleFilterSelect(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
