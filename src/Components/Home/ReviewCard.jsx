const ReviewCard = ({ reviewer, rating, reviewText, date }) => {
  return (
    <div className="flex justify-center">
      <div className="card bg-white shadow-lg rounded-lg w-96 border">
        <div className="card-body p-6">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-lg font-bold text-gray-800">
              {reviewer || "Anonymous"}
            </h2>
            <p className="text-sm text-gray-500">{date || "Unknown date"}</p>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-lg">
              {"⭐".repeat(rating || 0)}
              {"☆".repeat(5 - (rating || 0))}
            </span>
            <span className="text-sm text-gray-600 ml-2">
              {rating || "N/A"} / 5
            </span>
          </div>
          <p className="mt-4 text-gray-700">{reviewText || "No review provided."}</p>
          <div className="card-actions mt-6 justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

