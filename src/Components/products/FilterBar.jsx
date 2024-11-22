/* eslint-disable react/prop-types */
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({setBrand, setCategory, handleReset, uniqueBrand, uniqueCategory}) => {
  return (
    <div className="bg-gray-200 h-full min-h-screen p-4 rounded-t-md">
      <div className="flex items-center gap-1">
        <TbFilter size={24} />
        <h2 className="text-xl font-semibold">Filters</h2>
      </div>
      <div className="mt-8 flex flex-col gap-2 items-center ">
        <div className="w-full">
          <select className="p-[11px] max-w-md w-full border border-black rounded-md" onChange={(e)=>setBrand(e.target.value)}>
           
            <option value="">Brands</option>
            {uniqueBrand.map((brand)=><option key={brand} value={brand}>{brand}</option>)}
            
          </select>
        </div>

        <div className="w-full">
          <select className="p-[11px] max-w-md w-full border border-black rounded-md" onChange={(e)=>setCategory(e.target.value)}>
          <option value="">Categories</option>
          {uniqueCategory.map((category)=><option key={category} value={category}>{category}</option>)}
          </select>
        </div>
      </div>
      <button className="btn mt-4 w-full flex items-center" onClick={handleReset}>Reset <GrPowerReset/></button>
    </div>
  );
};

export default FilterBar;