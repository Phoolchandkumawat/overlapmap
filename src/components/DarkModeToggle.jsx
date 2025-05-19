import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", enabled);
    localStorage.setItem("theme", enabled ? "dark" : "light");
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled((prev) => !prev)}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
    >
      {enabled ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
