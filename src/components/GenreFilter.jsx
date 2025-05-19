import React from "react";

export default function GenreFilter({ genres, selected, setGenre }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
        Filter by Genre
      </label>
      <select
        value={selected}
        onChange={(e) => setGenre(e.target.value)}
        className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-gray-800 dark:text-white"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
