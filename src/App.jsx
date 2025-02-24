import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/users";
import "./App.css";

export default function App() {
  const [usersList, setUsersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://randomuser.me/api/?page=${page}&results=6`)
      .then((response) => response.json())
      .then((data) => {
        const newUsers = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          image: user.picture.medium,
          phone: user.phone,
          nationality: user.nat,
          age: user.registered.age,
        }));
        setUsersList((prevUsers) =>
          page === 1 ? newUsers : [...prevUsers, ...newUsers]
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error when users being loaded", error);
        setIsLoading(false);
      });
  }, [page]);

  const resetUsers = () => {
    setUsersList([]);
    setPage(1);
    setSearchQuery("");
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900 pt-2">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Users usersList={usersList} searchQuery={searchQuery} />

      {isLoading && (
        <p className="text-orange-500 font-semibold text-center text-xl mt-4">
          Loading...
        </p>
      )}

      <div className="w-full flex gap-6 justify-center my-10">
        <button
          onClick={() => setPage(page + 1)}
          className="h-10 w-32 rounded-lg bg-orange-500 text-white cursor-pointer animate-pulse"
        >
          Load More
        </button>

        <button
          onClick={resetUsers}
          className="h-10 w-32 rounded-lg bg-red-500 text-white cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
