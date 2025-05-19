import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function OverlapChart({ allRecs }) {
  const total = allRecs.length;
  const overlaps = allRecs.filter((r) => r.overlap).length;
  const yours = Math.floor(total * 0.4); // fake data
  const friends = Math.floor(total * 0.6); // fake data

  const data = {
    labels: ["Your Recs", "Friends", "Overlap"],
    datasets: [
      {
        label: "Count",
        data: [yours, friends, overlaps],
        backgroundColor: ["#4F46E5", "#F59E0B", "#10B981"],
      },
    ],
  };

  return (
    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">📊 Overlap Metrics</h2>
      <Bar data={data} />
    </div>
  );
}
