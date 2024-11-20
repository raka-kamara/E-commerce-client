import ReviewCard from "./ReviewCard";

const UserReview = () => {
    return (
      <div className="w-full mx-auto flex items-center justify-center">
          <div className="grid lg:grid-cols-3 items-center justify-center gap-5">
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
    </div>
      </div>
    );
};

export default UserReview;