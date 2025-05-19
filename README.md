# 🔁 Visual Overlap Map – Friend Recs vs Your Recs

A sleek frontend project that visualizes the overlap between your favorite items and your friends’ recommendations — built for the CodeCircuit Hackathon.

![App Screenshot](https://your-screenshot-url-here) <!-- Replace with real screenshot -->

## 🚀 Features

- 🔍 **Trust Score Tooltip** — Hover on a friend’s rec to see how many trusted friends also liked it.
- 🌈 **Animated Overlap Glow** — Overlapping items are highlighted with a subtle glow animation.
- 📎 **Save-to-Wishlist** — One-click save to a horizontally scrollable wishlist panel.
- 🧠 **"Why This Rec?" Hint** — Fake AI reasoning, e.g., “You liked Interstellar, so this was suggested.”
- 📊 **Overlap Chart** — Compare your picks, friend recs, and overlaps visually with a bar chart.
- 🌙 **Dark Mode** — Toggle between light/dark theme.
- 🎮 **Easter Egg Dev Mode** — Type a secret key combo to unlock “developer mode.”
- 🧵 **Persistent Local Storage** — Wishlist state is saved across sessions.
- 🔗 **Keyboard Shortcuts** — Ctrl+K opens the command/search bar.
- 🎥 **Intro Animation** — Smooth loading animation on startup.

## 🎯 Prompt

This project was built using the [CodeCircuit Hackathon Prompt](https://www.codecircuit.ai/idealist):

> 🧩 **Visual “Overlap Map” of Friend Recs vs Your Recs**  
> Core Idea: Compare your favorites vs friend recommendations using intuitive UI and metrics.

## 🛠 Tech Stack

- **React** + Vite
- **Tailwind CSS**
- **dnd-kit** – for drag-and-drop wishlist sorting
- **Chart.js** – for visualizing rec overlap
- **React Hotkeys** – for keyboard shortcuts
- **Framer Motion** – for animations

## 📦 Live Demo

🔗 [https://your-project-url.vercel.app](https://your-project-url.vercel.app)  
📁 [GitHub Repo](https://github.com/yourusername/rec-overlap-map)

## 📝 How to Run Locally

```bash
git clone https://github.com/yourusername/rec-overlap-map.git
cd rec-overlap-map
npm install
npm run dev
