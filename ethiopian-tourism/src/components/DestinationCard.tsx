import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';
import { RootState } from '../redux/store';

type DestinationProps = {
  name: string;
  image: string;
  description: string;
  region: string;
  category: string;
};

function DestinationCard({
  name,
  image,
  description,
  region,
  category,
}: DestinationProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorited = favorites.some(d => d.name === name);

  const handleFavorite = () => {
    dispatch(toggleFavorite({ name, image, description, region, category }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      <Link to={`/destination/${name}`}>
        <img src={image} alt={name} className="h-48 w-full object-cover" />
      </Link>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <Link to={`/destination/${name}`}>
            <h2 className="text-xl font-bold text-green-800 hover:underline">
              {name}
            </h2>
          </Link>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <div className="text-xs text-gray-500 mt-2">
            {region} | {category}
          </div>
        </div>

        <button
          onClick={handleFavorite}
          className={`mt-4 py-1 px-3 text-sm font-medium rounded ${
            isFavorited
              ? "bg-green-200 text-green-900"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {isFavorited ? "✅ Favorited" : "➕ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;
