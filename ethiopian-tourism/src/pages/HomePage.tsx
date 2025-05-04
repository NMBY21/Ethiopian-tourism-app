import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  setSearchText,
  setRegion,
  setCategory,
} from "../redux/filtersSlice";
// import Breadcrumbs from "../components/Breadcrumbs";

function HomePage() {
  const dispatch = useDispatch();
  const { regionName, categoryName } = useParams();

  const { searchText, region, category } = useSelector(
    (state: RootState) => state.filters
  );

  // Optionally sync URL params to Redux store on mount
  useEffect(() => {
    if (regionName) dispatch(setRegion(regionName));
    if (categoryName) dispatch(setCategory(categoryName));
  }, [regionName, categoryName, dispatch]);

  const filteredDestinations = destinations.filter((dest) => {
    return (
      dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (region === "" || dest.region === region) &&
      (category === "" || dest.category === category)
    );
  });

  return (
    <div className="min-h-screen bg-amber-50">
      {/* 🧭 Breadcrumbs */}
      {/* <div className="bg-white shadow-md rounded-md mx-6 mt-6 mb-2 p-4"> */}
        {/* <Breadcrumbs /> */}
      {/* </div> */}

      {/* 🔍 Filters */}
      <Filters
        onSearch={(text) => dispatch(setSearchText(text))}
        onRegionChange={(region) => dispatch(setRegion(region))}
        onCategoryChange={(category) => dispatch(setCategory(category))}
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
