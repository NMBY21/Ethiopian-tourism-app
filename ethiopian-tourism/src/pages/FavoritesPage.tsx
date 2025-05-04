// src/pages/Favorites.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { removeFavorite } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const handleRemoveFavorite = (name: string) => {
    dispatch(removeFavorite(name));
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Your Favorites</h1>
      {favorites.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map((dest) => (
            <div key={dest.name} className="relative">
              <DestinationCard
                name={dest.name}
                image={dest.image}
                description={dest.description}
                region={dest.region}
                category={dest.category}
              />
              <button
                onClick={() => handleRemoveFavorite(dest.name)}
                className="absolute top-2 right-2 bg-red-500 text-white py-1 px-3 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-gray-600 text-center">No favorites yet. Start exploring!</p>
      )}
    </div>
  );
}

export default Favorites;
