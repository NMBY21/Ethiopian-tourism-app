type DestinationProps = {
  name: string;
  image: string;
  description: string;
  region: string;
  category: string;
};

function DestinationCard({ name, image, description, region, category }: DestinationProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-800">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-xs text-gray-500 mt-2">
          {region} | {category}
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
