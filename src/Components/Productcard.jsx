const ProductCard = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className="card glass w-96 h-96">
        <figure>
          <img
            src={product.ImgURL || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"} // Default image if none provided
            alt={product.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
