"use client";

import { setSortBy } from "@/features/productList/filterSlice";
import { useDispatch } from "react-redux";

const ItemFilters = () => {
  const dispatch = useDispatch();

  const handleFilterSelect = (value) => {
    dispatch(setSortBy(value));
  };

  return (
    <div>
      <div>
        <label>A-Z</label>
        <input
          type="radio"
          name="filter"
          value="A-Z"
          onChange={() => handleFilterSelect("A-Z")}
        />
      </div>
      <div>
        <label>Z-A</label>
        <input
          type="radio"
          name="filter"
          value="Z-A"
          onChange={() => handleFilterSelect("Z-A")}
        />
      </div>
      <div>
        <label>Lowest Price</label>
        <input
          type="radio"
          name="filter"
          value="Lowest Price"
          onChange={() => handleFilterSelect("Lowest Price")}
        />
      </div>
      <div>
        <label>Highest Price</label>
        <input
          type="radio"
          name="filter"
          value="Highest Price"
          onChange={() => handleFilterSelect("Highest Price")}
        />
      </div>
    </div>
  );
};

export default ItemFilters;
