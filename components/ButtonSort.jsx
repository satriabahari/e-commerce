import { MdSort } from "react-icons/md";

export default function ButtonSort({ handleOpenModalFilters }) {
  return (
    <button
      className="bg-neutral-500 flex items-center justify-center text-neutral-50 rounded-full w-10 h-10"
      onClick={handleOpenModalFilters}
    >
      <MdSort size={25}/>
    </button>
  );
}
