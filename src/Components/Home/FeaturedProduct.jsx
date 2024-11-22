import ProductCard from "../Productcard";

const FeaturedProduct = () => {
    return (
        <div className="w-full mx-auto flex items-center justify-center">
            <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};

export default FeaturedProduct;