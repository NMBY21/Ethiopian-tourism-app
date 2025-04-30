import { useState } from "react";

type ReviewFormProps = {
  onAddReview: (review: { name: string; text: string; rating: number }) => void;
};

function ReviewForm({ onAddReview }: ReviewFormProps) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      onAddReview({ name, text, rating });
      setName("");
      setText("");
      setRating(5);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <h3 className="text-xl font-bold text-green-700">Leave a Review</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        placeholder="Your review"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border p-2 rounded"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>{r} Star{r > 1 ? "s" : ""}</option>
        ))}
      </select>
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
        Submit Review
      </button>
    </form>
  );
}

export default ReviewForm;
