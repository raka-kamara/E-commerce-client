import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddProducts = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {user} = useAuth();

  const onSubmit = (data) => {
  const title = data.title
  const brand = data.brand
  const ImgURL = data.ImgURL
  const price = parseFloat(data.price)
  const stock = parseFloat(data.stock)
  const category = data.category
  const description = data.description
  const sellerEmail = user.email
    
  const product = {
    title, brand, price, ImgURL, stock, category, description, sellerEmail
  };
  const token = localStorage.getItem("access-token")
  axios.post("http://localhost:4000/add-products", product, {
    headers:{
      Authorization: `Bearer ${token}`
    },
  }).then((res) => {
    if(res.data.insertedId){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added successfully",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })
  };
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center my-12">Add Products</h1>

      <div className="w-full">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-10">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Product Title"
              className="w-full p-2 border border-black rounded-md"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-light">
                Title is Required
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <input
              type="text"
              placeholder="Brand"
              className="w-full p-2 border border-black rounded-md"
              {...register("brand", { required: true })}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm font-light">
                Brand is Required
              </p>
            )}
          </div>
          </div>
          <div className="md:flex gap-10">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Product Price"
              className="w-full p-2 border border-black rounded-md"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-500 text-sm font-light">
                Price is Required
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              placeholder="Stock Quantity"
              className="w-full p-2 border border-black rounded-md"
              {...register("stock", { required: true })}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm font-light">
                Stock is Required
              </p>
            )}
          </div>

          
          </div>

          <div className="md:flex gap-10">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Product Category"
              className="w-full p-2 border border-black rounded-md"
              {...register("category", { required: true })}
            />
            {errors.category && (
              <p className="text-red-500 text-sm font-light">
                Category is Required
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="label">
              <span className="label-text">ImgURL</span>
            </label>
            <input
              type="text"
              placeholder="Product ImgURL"
              className="w-full p-2 border border-black rounded-md"
              {...register("ImgURL", { required: true })}
            />
            {errors.ImgURL && (
              <p className="text-red-500 text-sm font-light">
                ImgURL is Required
              </p>
            )}
          </div>
          </div>

          <div >
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Product Description"
              className="w-full p-2 border border-black rounded-md"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm font-light">
                Description is Required
              </p>
            )}
          </div>
          <div className="my-8 ">
            <button type="submit" className="btn btn-ghost btn-wide border-0 border-b-2 border-gray-500">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
