import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  _id: string;
  name: string;
  email: string;
  profileImage?: string;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  const userId = storedUser?._id;

  const [user, setUser] = useState<User | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!userId) return;

    axios
      .get(`http://localhost:3000/api/auth/user/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [userId]);

  const handleUpload = async () => {
    if (!file || !userId) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `http://localhost:3000/api/auth/upload/${userId}`,
        formData,
      );
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          {user?.profileImage ? (
            <img
              src={`http://localhost:3000/uploads/${user.profileImage}`}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 shadow-md"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-bold text-white">
              {user?.name?.charAt(0)}
            </div>
          )}
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.name || "User"}
        </h2>
        <p className="text-gray-500 mb-6">{user?.email}</p>

        <h2 className="text-lg text-gray-800 mb-2">
          Upload your profile Image
        </h2>
        {/* Upload Section */}
        <div className="mb-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-gray-500 border-2 p-1 rounded-xl file:mr-4 file:py-2 file:px-4 
                       file:rounded-lg file:border-2 
                       file:text-sm file:font-semibold 
                       file:bg-blue-50 file:text-blue-600 
                       hover:file:bg-blue-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition shadow"
          >
            Upload
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition shadow"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
