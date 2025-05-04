// src/components/Breadcrumbs.tsx
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  resetFilters,
  setRegion,
  setCategory,
  setSearchText,
} from "../redux/filtersSlice";
import { Link, useParams } from "react-router-dom";


function Breadcrumbs() {
  const dispatch = useDispatch();
  const { searchText, region, category } = useSelector(
    (state: RootState) => state.filters
  );

  const handleClear = () => dispatch(resetFilters());
const { regionName, categoryName } = useParams();

  return (
    <div className="px-6 pt-4 pb-2 bg-white shadow-sm flex flex-wrap gap-2 text-sm text-gray-800">
        <nav className="text-sm text-gray-600 px-6 py-3">
      <Link to="/" className="hover:underline text-green-700">Home</Link>
      {regionName && (
        <>
          {" / "}
          <Link to={`/region/${regionName}`} className="hover:underline text-green-700">{regionName}</Link>
        </>
      )}
      {categoryName && (
        <>
          {" / "}
          <Link
            to={`/region/${regionName}/category/${categoryName}`}
            className="hover:underline text-green-700"
          >
            {categoryName}
          </Link>
        </>
      )}
    </nav>
      <span className="font-semibold">Home</span>
      {region && (
        <>
          <span>/</span>
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => dispatch(setRegion(""))}
          >
            Region: {region}
          </span>
        </>
      )}
      {category && (
        <>
          <span>/</span>
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => dispatch(setCategory(""))}
          >
            Category: {category}
          </span>
        </>
      )}
      {searchText && (
        <>
          <span>/</span>
          <span
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => dispatch(setSearchText(""))}
          >
            Search: {searchText}
          </span>
        </>
      )}
      {(region || category || searchText) && (
        <>
          <span>/</span>
          <span
            className="cursor-pointer text-red-500 hover:underline"
            onClick={handleClear}
          >
            Clear all
          </span>
        </>
      )}
    </div>
  );
}

export default Breadcrumbs;
