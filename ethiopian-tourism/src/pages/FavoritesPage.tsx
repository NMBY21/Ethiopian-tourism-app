// src/pages/FavoritesPage.tsx
import DestinationCard from "../components/DestinationCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-2xl font-bold text-green-900 mb-6">🌟 Your Favorite Destinations</h1>
      {favorites.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map((dest) => (
            <DestinationCard
              key={dest.name}
              name={dest.name}
              image={dest.image}
              description={dest.description}
              region={dest.region}
              category={dest.category}
            />
          ))}
        </section>
      ) : (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
