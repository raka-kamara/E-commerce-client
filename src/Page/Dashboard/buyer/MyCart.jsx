import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import axios from "axios";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        if (!userData?._id || !token) return;

        const response = await axios.get(
          `https://gadget-shop-server-three.vercel.app/cart/${userData._id}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        setCart(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Cart:", err);
        setError(err.response?.data?.message || "Failed to load Cart.");
        setLoading(false);
      }
    };

    fetchCart();
  }, [token, userData._id]);

  const handleDelete = async (productId) => {
    try {
      // Show confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to remove this item from your cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, remove it!",
      });

      if (result.isConfirmed) {
        const response = await axios.patch(
          `https://gadget-shop-server-three.vercel.app/cart/remove`,
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
          setCart((prev) => prev.filter((item) => item._id !== productId));

          // Show success message
          Swal.fire({
            title: "Removed!",
            text: "The item has been removed from your cart.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }
    } catch (err) {
      console.error("Error deleting item from cart:", err);

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
    return <div>Loading your cart...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cart.length === 0) {
    return (
      <div className="text-center my-32 text-lg font-semibold">
        Your cart is empty.
      </div>
    );
  }

    return (
        <div>
        <h1 className="text-xl font-bold mb-4 text-center mt-20">My Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5">
          {cart.map((product) => (
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

export default MyCart;