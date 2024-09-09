import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FilterSection from './components/Filtersection';
import HouseListing from './components/Houselisting';
import Footer from './components/Footer';
import Favorites from './components/favorites';  // Import  pages
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is always present */}
        <Navbar />

        {/* Routes for different paths */}
        <Routes>
          {/* Home Page with House Listing */}
          <Route path="/" element={
            <>
              <FilterSection />
              <HouseListing />
            </>
          } />

          {/* Favorites Page */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

        {/* Footer is always present */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
