import { setSortBy } from "@/features/productList/filterSlice";
import { useDispatch } from "react-redux";

export default function SortList() {
  const dispatch = useDispatch();

  const handleSortBySelect = (value) => {
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
          onChange={() => handleSortBySelect("A-Z")}
        />
      </div>
      <div>
        <label>Z-A</label>
        <input
          type="radio"
          name="filter"
          value="Z-A"
          onChange={() => handleSortBySelect("Z-A")}
        />
      </div>
      <div>
        <label>Lowest Price</label>
        <input
          type="radio"
          name="filter"
          value="Lowest Price"
          onChange={() => handleSortBySelect("Lowest Price")}
        />
      </div>
      <div>
        <label>Highest Price</label>
        <input
          type="radio"
          name="filter"
          value="Highest Price"
          onChange={() => handleSortBySelect("Highest Price")}
        />
      </div>
    </div>
  );
}
