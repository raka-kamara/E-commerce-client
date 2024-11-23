import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import axios from "axios";
import Swal from "sweetalert2";

const MyWishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        if (!userData?._id || !token) return;

        const response = await axios.get(
          `https://gadget-shop-server-three.vercel.app/wishlist/${userData._id}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        setWishlist(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching wishlist:", err);
        setError(err.response?.data?.message || "Failed to load wishlist.");
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [token, userData._id]);

  const handleDelete = async (productId) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to remove this item from your wishlist?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, remove it!",
      });

      if (result.isConfirmed) {
        const response = await axios.patch(
          `https://gadget-shop-server-three.vercel.app/wishlist/remove`,
          {
            userId: userData._id,
            productId: productId,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.modifiedCount) {
          setWishlist((prev) => prev.filter((item) => item._id !== productId));

          // Show success message
          Swal.fire({
            title: "Removed!",
            text: "The item has been removed from your wishlist.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }
    } catch (err) {
      console.error("Error deleting item from wishlist:", err);

      // Show error message
      Swal.fire({
        title: "Error",
        text: "Failed to remove the item. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return <div>Loading your wishlist...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (wishlist.length === 0) {
    return (
      <div className="text-center my-32 text-lg font-semibold">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-center mt-20">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5">
        {wishlist.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 shadow-md bg-white max-w-60"
          >
            <img
              src={product.ImgURL}
              alt={product.title}
              className="w-48 h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <span className="text-sm font-medium text-green-600">
              ${product.price}
            </span>
            <button
              onClick={() => handleDelete(product._id)}
              className="mt-2 ml-3 bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWishList;
