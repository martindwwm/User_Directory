import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

export default function Users({ usersList, searchQuery }) {
  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-14">
      {filteredUsers.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}
