import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/auth/login", {
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to={"/register"} className="text-green-500 cursor-pointer">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signin;
