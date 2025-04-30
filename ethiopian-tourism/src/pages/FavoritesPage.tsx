import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import DestinationCard from '../components/DestinationCard';

function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite destinations yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map(dest => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
