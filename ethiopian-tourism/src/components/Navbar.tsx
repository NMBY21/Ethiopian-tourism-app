import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-green-700 font-semibold"
      : "text-gray-700 hover:text-green-600";

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-800">
        🌍 Ethiopia Explorer
      </Link>

      <div className="flex gap-4">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/favorites" className={linkClass("/favorites")}>
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
