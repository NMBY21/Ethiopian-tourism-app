import { useParams } from 'react-router-dom';
import { destinations } from '../data/destinations';

function DestinationDetail() {
  const { id } = useParams();
  const destination = destinations.find(d => d.name === id);

  if (!destination) {
    return <div className="p-6 text-red-600">Destination not found</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover rounded-xl" />
      <h1 className="text-3xl font-bold mt-4 text-green-900">{destination.name}</h1>
      <p className="text-gray-700 mt-2">{destination.description}</p>
      <div className="mt-4 text-sm text-gray-500">
        <strong>Region:</strong> {destination.region} <br />
        <strong>Category:</strong> {destination.category}
      </div>
    </div>
  );
}

export default DestinationDetail;
