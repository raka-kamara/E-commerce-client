import axios from "axios";
import useUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const userData = useUserData();
  const userEmail = userData.email;
  console.log( userEmail)

  const handleWishlist = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:4000/wishlist/add",
        {
          userEmail: userEmail,
          productId: product._id,
        }
      );
  
      if (response.data.modifiedCount) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product added to wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Product is already in your wishlist",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding product to wishlist:", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to add product to wishlist",
        text: error.response?.data?.message || "An unexpected error occurred.",
        showConfirmButton: true,
      });
    }
  };
  
  return (
    <div className="max-w-lg w-64 mx-auto border rounded-lg shadow-md overflow-hidden bg-white">
      <figure className="relative">
        <img
          className="w-full h-56 object-cover"
          // eslint-disable-next-line react/prop-types
          src={product.ImgURL}
          alt={product.title}
        />
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Out of Stock</span>
          </div>
        )}
      </figure>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 mb-3">
          {product.description.length > 50
            ? `${product.description.slice(0, 50)}...`
            : product.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-700 mb-3">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
            {product.category}
          </span>
          <span className="font-medium">Brand: {product.brand}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">Stock: {product.stock}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Seller: {product.sellerEmail}
        </p>
        <button className="btn w-full btn-sm" onClick={handleWishlist}>
      Add to wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
