import { useEffect, useState } from "react";
import ProductCard from "../Productcard";
import axios from "axios";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get(
          "https://gadget-shop-server-three.vercel.app/products" // Replace with your actual API endpoint
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading featured products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center">No featured products available.</div>;
  }

  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
