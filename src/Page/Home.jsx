import Banner from '../Components/Home/Banner';
import FeaturedProduct from '../Components/Home/FeaturedProduct';
import Accordion from '../Components/Home/Accordion';
import UserReview from '../Components/Home/UserReview';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='container mx-auto'>
            <div className="my-24">
                <h1 className="my-16 text-2xl font-semibold text-center">Featured Product</h1>
                <FeaturedProduct/>
            </div>
            <div className="my-24">
                <h1 className="my-16 text-2xl font-semibold text-center">User Review</h1>
                <UserReview/>
                
            </div>
            <div className="my-24">
                <h1 className="my-16 text-2xl font-semibold text-center">Frequently Asked Question</h1>
                <Accordion/>
            </div>
            </div>
        </div>
    );
};

export default Home;