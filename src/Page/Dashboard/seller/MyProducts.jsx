import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import ProductCard from "../../../Components/Productcard";
import useAuth from "../../../hooks/useAuth";

const fetchSellerProducts = async (email) => {
  const response = await axios.get("https://gadget-shop-server-three.vercel.app/seller-products");
  return response.data.filter((product) => product.sellerEmail === email);
};

const MyProducts = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["sellerProducts", user?.email],
    queryFn: () => fetchSellerProducts(user?.email),
    enabled: !!user?.email, // Only fetch if the user email exists
  });

  // Mutation for deleting a product
  const deleteMutation = useMutation({
    mutationFn: (productId) => axios.delete(`https://gadget-shop-server-three.vercel.app/product/${productId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["sellerProducts", user?.email]); // Refetch data after deletion
      Swal.fire("Deleted!", "Your product has been deleted.", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Failed to delete the product.", "error");
    },
  });

  // Mutation for updating a product
  const updateMutation = useMutation({
    mutationFn: ({ productId, updatedData }) =>
      axios.patch(`https://gadget-shop-server-three.vercel.app/products/${productId}`, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["sellerProducts", user?.email]); // Refetch data after update
      Swal.fire("Updated!", "Your product has been updated.", "success");
    },
    onError: () => {
      Swal.fire("Error!", "Failed to update the product.", "error");
    },
  });

  // Handle delete
  const handleDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(productId);
      }
    });
  };

  // Handle update
  const handleUpdate = (product) => {
    Swal.fire({
      title: "Update Product",
      html: `
        <input id="title" class="swal2-input" placeholder="Title" value="${product.title}">
        <input id="price" class="swal2-input" type="number" placeholder="Price" value="${product.price}">
        <textarea id="description" class="swal2-textarea" placeholder="Description">${product.description}</textarea>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => {
        const title = Swal.getPopup().querySelector("#title").value;
        const price = Swal.getPopup().querySelector("#price").value;
        const description = Swal.getPopup().querySelector("#description").value;

        if (!title || !price || !description) {
          Swal.showValidationMessage("Please fill out all fields");
        }
        return { title, price, description };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = result.value;
        updateMutation.mutate({ productId: product._id, updatedData });
      }
    });
  };

  if (isLoading) {
    return <div className="text-center">Loading your products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center">You have no products listed.</div>;
  }

  return (
    <div className="mb-20">
      <h1 className="text-center font-bold text-2xl my-20">My Products</h1>
      <div className="w-full mx-auto flex items-center justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {products.map((product) => (
            <div key={product._id} className="relative">
              <ProductCard product={product} />
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  onClick={() => handleUpdate(product)}
                  className="btn btn-sm btn-warning"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
