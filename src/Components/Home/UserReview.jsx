import ReviewCard from "./ReviewCard";

const UserReview = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
        <ReviewCard
          reviewer="John Doe"
          rating={4}
          reviewText="The product quality is excellent, and the service was outstanding!"
          date="Nov 23, 2024"
        />

        <ReviewCard
          reviewer="Park Son"
          rating={4}
          reviewText="The product quality is excellent, and the service was outstanding!"
          date="Nov 23, 2024"
        />

        <ReviewCard />
        <ReviewCard
          reviewer="John Doe"
          rating={4}
          reviewText="The product quality is excellent, and the service was outstanding!"
          date="Nov 23, 2024"
        />
      </div>
    </div>
  );
};

export default UserReview;
