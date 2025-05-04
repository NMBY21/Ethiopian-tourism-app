import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationDetail from './pages/DestinationDetail';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from "./components/Navbar";


function App() {
  return (
    <main className="min-h-screen bg-amber-50">
       <Navbar />
       <Routes>
         <Route path="/" element={<HomePage />} />
        {/* <Route path="/destination/:id" element={<DestinationDetail />} /> */}
        <Route path="/favorites" element={<FavoritesPage />} />
         <Route path="/destination/:name" element={<DestinationDetail />} />
          <Route path="/region/:regionName" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<HomePage />} />
          <Route path="/region/:regionName/category/:categoryName" element={<HomePage />} />
       </Routes>
    </main>
  );
 }

 export default App;
