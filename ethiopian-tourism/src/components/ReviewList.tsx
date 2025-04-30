type Review = {
  name: string;
  text: string;
  rating: number;
};

type ReviewListProps = {
  reviews: Review[];
};

function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return <p className="text-gray-500 mt-4">No reviews yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-bold text-green-700">User Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border p-4 rounded bg-gray-50">
          <div className="text-sm text-gray-600">
            <strong>{review.name}</strong> - {review.rating} ⭐
          </div>
          <p className="mt-1 text-gray-700">{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
