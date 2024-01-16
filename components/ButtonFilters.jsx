const ButtonFilters = ({ handleOpenModalFilters }) => {
  return (
    <button
      className="bg-neutral-500 text-neutral-50 rounded-full w-10 h-10"
      onClick={handleOpenModalFilters}
    >
      !
    </button>
  );
};

export default ButtonFilters;
