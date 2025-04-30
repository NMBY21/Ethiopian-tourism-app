import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';

function HomePage() {
  return (
    <section className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 bg-amber-50 min-h-screen">
      {destinations.map(dest => (
        <DestinationCard
          key={dest.id}
          name={dest.name}
          image={dest.image}
          description={dest.description}
          region={dest.region}
          category={dest.category}
        />
      ))}
    </section>
  );
}

export default HomePage;
