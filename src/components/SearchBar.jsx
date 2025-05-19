import React, { useRef, useEffect } from "react";

export default function SearchBar({ setSearch }) {
  const inputRef = useRef();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <input
      ref={inputRef}
      className="w-40 md:w-1/3 px-4 py-2 rounded border dark:bg-gray-700 dark:border-gray-600"
      placeholder="Search recs... (Ctrl+K)"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
