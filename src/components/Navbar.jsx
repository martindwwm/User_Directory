import React from "react";

export default function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="w-screen h-16 flex justify-around items-center bg-gray-900 text-[#f3f4f6]">
      <div className="w-[80px]">
        <img className="w-full" src="./src/assets/Logo Martin.png" alt="logo" />
      </div>

      <input
        type="text"
        className="w-[500px] h-9 border border-orange-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 px-4"
        placeholder="Search an user..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex gap-6">
        <a href="#" className="text-lg">
          Home
        </a>
        <a href="#" className="text-lg">
          Users
        </a>
        <a href="#" className="text-lg">
          Contact
        </a>
      </div>
    </nav>
  );
}
