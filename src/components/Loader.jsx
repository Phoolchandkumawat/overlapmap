import React, { useEffect } from "react";

export default function Loader() {
  const fdsd = localStorage.getItem('theme')
  useEffect(()=>{
    document.documentElement.classList = fdsd
  },[fdsd])
  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-xl">
      🚀 Loading your Overlap Map...
    </div>
  );
}
