// import DestinationCard from "../components/DestinationCard";
// import { destinations } from "../data/destinations";
// import Filters from "../components/Filters";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import {
//   setSearchText,
//   setRegion,
//   setCategory,
// } from "../redux/filtersSlice";

// function HomePage() {
//   const dispatch = useDispatch();

//   // ✅ Get filters from Redux store
//   const { searchText, region, category } = useSelector(
//     (state: RootState) => state.filters
//   );

//   // ✅ Filter the destinations
//   const filteredDestinations = destinations.filter((dest) => {
//     return (
//       dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
//       (region === "" || dest.region === region) &&
//       (category === "" || dest.category === category)
//     );
//   });

//   return (
//     <div className="min-h-screen bg-amber-50">
//       {/* 🔍 Filters Section */}
//       <Filters
//         onSearch={(text) => dispatch(setSearchText(text))}
//         onRegionChange={(region) => dispatch(setRegion(region))}
//         onCategoryChange={(category) => dispatch(setCategory(category))}
//       />

//       {/* 📍 Destination Cards */}
//       <section className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
//         {filteredDestinations.length > 0 ? (
//           filteredDestinations.map((dest) => (
//             <DestinationCard
//               key={dest.name}
//               name={dest.name}
//               image={dest.image}
//               description={dest.description}
//               region={dest.region}
//               category={dest.category}
//             />
//           ))
//         ) : (
//           <p className="text-gray-600 col-span-full text-center">
//             No destinations found.
//           </p>
//         )}
//       </section>
//     </div>
//   );
// }

// export default HomePage;
// src/pages/HomePage.tsx
import { useParams } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSearchText, setRegion, setCategory } from "../redux/filtersSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { regionName, categoryName } = useParams();
  const { searchText, region, category } = useSelector((state: RootState) => state.filters);

  // Override Redux filters with URL-based filters if present
  const activeRegion = regionName || region;
  const activeCategory = categoryName || category;

  const filteredDestinations = destinations.filter((dest) => {
    return (
      dest.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (activeRegion === "" || dest.region === activeRegion) &&
      (activeCategory === "" || dest.category === activeCategory)
    );
  });

  return (
    <div className="min-h-screen bg-amber-50">
      <Filters
        onSearch={(text) => dispatch(setSearchText(text))}
        onRegionChange={(region) => dispatch(setRegion(region))}
        onCategoryChange={(category) => dispatch(setCategory(category))}
      />

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
          <p className="text-gray-600 col-span-full text-center">No destinations found.</p>
        )}
      </section>
    </div>
  );
}

export default HomePage;
