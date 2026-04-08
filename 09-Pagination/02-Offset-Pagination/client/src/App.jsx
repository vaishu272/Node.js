import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const LIMIT = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users?page=${currentPage}&limit=${LIMIT}`,
        );

        setUsers(response.data.users);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Offset Pagination
        </h1>

        <h3 className="text-xl text-center mb-5">
          Offset pagination is a method of paginating data by specifying an
          offset and a limit. The offset indicates how many items to skip before
          starting to collect the result set, while the limit specifies the
          maximum number of items to return. This approach is commonly used in
          APIs and databases to efficiently retrieve subsets of data without
          loading the entire dataset into memory.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            className="px-4 py-2 rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-600 disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg cursor-pointer transition ${
                currentPage === index + 1
                  ? "bg-purple-500 text-white"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="px-4 py-2 rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-600 disabled:opacity-50"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
