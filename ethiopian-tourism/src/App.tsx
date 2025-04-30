import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import Welcome from './components/Welcome';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<Welcome />} /> 
      <Route path="/destinations" element={<DestinationsPage />} />
    </Routes>
  );
}

export default App;
