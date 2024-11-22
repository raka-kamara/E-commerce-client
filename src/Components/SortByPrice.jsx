const SortByPrice = ({setSort}) => {
  return (
    <div>
      <select className=" p-[11px] max-w-md w-40 border border-black rounded-md"
       onChange={(e) => setSort(e.target.value)}>
        <option value='asc'>Low to high</option>
        <option value='desc'>High to low</option>
      </select>
    </div>
  );
};

export default SortByPrice;
