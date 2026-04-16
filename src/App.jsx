import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Quiz from "./pages/Quiz"; // ✅ NEW

// Navbar
import Navbar from "./components/Navbar";

// ROUTE ANIMATION
function AnimatedRoutes({ favorites, toggleFavorite }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/topics"
          element={
            <Topics
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route path="/topics/:id" element={<Detail />} />

        <Route path="/quiz" element={<Quiz />} /> {/* ✅ NEW */}

        <Route path="/about" element={<About />} />

      </Routes>
    </AnimatePresence>
  );
}

// MAIN APP
function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((f) => f !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>

      {/* NAVBAR FIXED */}
      <Navbar />

      {/* PAGE ANIMATION */}
      <AnimatedRoutes
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

    </BrowserRouter>
  );
}

export default App;