import ItemFilters from "./SortList";

export default function SortModal() {
  return (
    <div className="w-[500px] flex flex-col gap-4">
      <button onClick={handleCloseModalFilters}>X</button>
      <ItemFilters />
    </div>
  );
}
