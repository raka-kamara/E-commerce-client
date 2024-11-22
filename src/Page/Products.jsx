import { useEffect, useState } from "react";
import FilterBar from "../Components/products/FilterBar";
import SearchBar from "../Components/SearchBar";
import SortByPrice from "../Components/SortByPrice";
import Loading from "../Page/Loading";
import axios from "axios";
import ProductCard from "../Components/Home/ProductCard";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState([]);
  const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`
        );
        setProducts(res.data.products);
        setUniqueBrand(res.data.brands);
        setUniqueCategory(res.data.categories);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, sort, brand, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    setProducts([]);
    window.location.reload();
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="text-center font-semibold my-8 md:my-12 text-xl md:text-2xl lg:text-3xl">
        All Products
      </h1>
      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-6 gap-4">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Filter */}
        <div className="lg:col-span-2 hidden lg:block">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>
        {/* Products */}
        <div className="lg:col-span-10 col-span-12">
          {loading ? (
            <Loading />
          ) : products.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                No product found
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 my-6 md:my-8">
            <button
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
              disabled={page === 1}
            >
              <IoIosArrowDropleft size={24} />
            </button>
            <p className="font-medium text-sm md:text-base">
              Page {page} of {totalPages}
            </p>
            <button
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full disabled:opacity-50"
              disabled={page === totalPages}
            >
              <IoIosArrowDropright size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
