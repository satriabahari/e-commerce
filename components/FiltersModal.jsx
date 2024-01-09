import ItemFilters from "./Filters";

const FiltersModal = ({ handleCloseModalFilters }) => {
  return (
    <div className="w-[500px] flex flex-col gap-4">
      <button onClick={handleCloseModalFilters}>X</button>
      <ItemFilters />
    </div>
  );
};

export default FiltersModal;
