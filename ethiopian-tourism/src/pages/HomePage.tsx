import { useState } from "react";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import Filters from "../components/Filters";

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
  const [category, setCategory] = useState("");

  const filteredDestinations = destinations.filter((dest) => {
    return (
      dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (region === "" || dest.region === region) &&
      (category === "" || dest.category === category)
    );
  });

  return (
    <div className="min-h-screen bg-amber-50">
      {/* 🔍 Filters Section */}
      <Filters
        onSearch={setSearchText}
        onRegionChange={setRegion}
        onCategoryChange={setCategory}
      />

      {/* 📍 Destination Cards */}
      <section className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard
              key={dest.name}
              name={dest.name}
              image={dest.image}
              description={dest.description}
              region={dest.region}
              category={dest.category}
            />
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No destinations found.
          </p>
        )}
      </section>
    </div>
  );
}

export default HomePage;
