import React from "react";

export default function UserCard({ user }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 text-gray-300">
      <img
        src={user.image}
        alt={user.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-500">Email: {user.email}</p>
        <p className="text-gray-500">Phone: {user.phone}</p>
        <p className="text-gray-500">Nationality: {user.nationality}</p>
        <p className="text-gray-500">Age: {user.age} years old</p>
      </div>
    </div>
  );
}
