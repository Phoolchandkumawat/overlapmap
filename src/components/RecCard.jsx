import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function RecCard({ rec, wishlist, setWishlist }) {
  const isInWishlist = wishlist.find((r) => r.id === rec.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      setWishlist(wishlist.filter((r) => r.id !== rec.id));
    } else {
      setWishlist([...wishlist, rec]);
    }
  };

  return (
    <div
      className={`relative p-4 rounded-xl border ${
        rec.overlap ? "border-blue-500 shadow-lg animate-pulse" : "border-gray-300"
      } bg-white dark:bg-gray-800`}
    >
      <h2 className="text-xl font-semibold">{rec.title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{rec.reason}</p>

      <div className="text-sm mt-2">
        <span className="text-blue-500" title="Trust Score">
          🤝 {rec.trustScore} friends liked this
        </span>
      </div>

      <button
        onClick={toggleWishlist}
        className="absolute top-4 right-4 text-xl text-pink-500"
        title="Save to wishlist"
      >
        {isInWishlist ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}
