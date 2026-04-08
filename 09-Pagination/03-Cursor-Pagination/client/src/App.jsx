import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const LIMIT = 6;

  const fetchUsers = async (newCursor = null) => {
    try {
      let url = `http://localhost:5000/api/users/cursor?limit=${LIMIT}`;

      if (newCursor) {
        url += `&cursor=${newCursor}`;
      }

      const response = await axios.get(url);

      // append new users instead of replacing
      setUsers((prev) => {
        const newUsers = [...prev, ...response.data.users];

        const uniqueUsers = Array.from(
          new Map(newUsers.map((user) => [user._id, user])).values(),
        );

        return uniqueUsers;
      });

      setCursor(response.data.nextCursor);

      if (response.data.users.length < LIMIT) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const loadInitialUsers = async () => {
      await fetchUsers();
    };
    loadInitialUsers();
  }, []);

  const handleNext = () => {
    if (cursor && hasMore) {
      fetchUsers(cursor);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Cursor Pagination
        </h1>

        <h3 className="text-xl text-center mb-5 max-w-4xl mx-auto leading-8 text-slate-300">
          Cursor-based pagination provides a more efficient way to navigate
          through large datasets by using a cursor (like an ID) instead of page
          numbers.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="px-6 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 disabled:opacity-50"
            onClick={handleNext}
            disabled={!hasMore}
          >
            {hasMore ? "Load More" : "No More Users"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
