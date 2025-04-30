import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationDetail from './pages/DestinationDetail';
import FavoritesPage from './pages/FavoritesPage';


function App() {
  return (
    <main className="min-h-screen bg-amber-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </main>
  );
}

export default App;
