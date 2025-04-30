import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function DestinationDetail() {
  const { name } = useParams<{ name: string }>();
  const destination = destinations.find(
    (d) => d.name.toLowerCase() === decodeURIComponent(name || "").toLowerCase()
  );

  const [reviews, setReviews] = useState<
    { name: string; text: string; rating: number }[]
  >([]);

  const handleAddReview = (review: { name: string; text: string; rating: number }) => {
    setReviews([...reviews, review]);
  };

  if (!destination) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">
          Destination not found
        </h2>
        <Link to="/" className="text-blue-600 underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={destination.image} alt={destination.name} className="w-full h-72 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            {destination.name}
          </h1>
          <div className="text-sm text-gray-500 mb-4">
            <strong>Region:</strong> {destination.region} | <strong>Category:</strong> {destination.category}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {destination.description}
          </p>

          {/* Review Section */}
          <ReviewForm onAddReview={handleAddReview} />
          <ReviewList reviews={reviews} />

          <Link to="/" className="inline-block mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            ← Back to All Destinations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
