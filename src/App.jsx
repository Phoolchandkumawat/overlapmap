import React, { useState, useEffect } from "react";
import RecCard from "./components/RecCard";
import WishlistPanel from "./components/WishlistPanel";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";
import Loader from "./components/Loader";
import { friendRecommendations, yourFavorites } from "./data/mockData";
import OverlapChart from "./components/OverlapChart";
import WishlistToggle from "./components/WishlistToggle";
import GenreFilter from "./components/GenreFilter";

export default function App() {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });
  const [display, setDisplay] = useState("hidden");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Easter egg: Ctrl + Shift + D => toggle dev mode
  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "D") setDevMode((d) => !d);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filteredRecs = friendRecommendations.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = genre === "All" || item.genre === genre;
    return matchesSearch && matchesGenre;
  });

  const allGenres = ["All", ...new Set(friendRecommendations.map((r) => r.genre))];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <SearchBar setSearch={setSearch} />
        <GenreFilter genres={allGenres} selected={genre} setGenre={setGenre} />
        <div className="flex gap-2 md:gap-10">
          <WishlistToggle setDisplay={setDisplay}/>
          <DarkModeToggle />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {filteredRecs.map((rec) => (
          <RecCard
            key={rec.id}
            rec={rec}
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
        ))}
      </div>

      <WishlistPanel display={display} setDisplay={setDisplay} wishlist={wishlist} setWishlist={setWishlist} />

      {devMode && <div className="fixed bottom-2 right-2 text-xs">Dev Mode 🔓</div>}
      <OverlapChart allRecs={friendRecommendations} yourRecs={yourFavorites} />
    </div>
  );
}
