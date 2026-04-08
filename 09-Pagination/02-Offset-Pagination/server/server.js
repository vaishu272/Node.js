import express from "express";
import cors from "cors";
import User from "./user-model.js";
import { connectDB } from "./db.js";
import { users } from "./data.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

connectDB();

try {
  await User.deleteMany({});
  await User.insertMany(users);
  console.log("Sample users inserted");
} catch (error) {
  console.error("Error inserting sample users:", error);
}

// Logic for MongoDB pagination (using skip and limit)
app.get("/api/users", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;

  const skip = (page - 1) * limit;
  const totalUsers = await User.countDocuments();

  const users = await User.find().skip(skip).limit(limit);

  res.json({
    totalUsers,
    currentPage: page,
    totalPages: Math.ceil(totalUsers / limit),
    previous: page > 1 ? page - 1 : null,
    next: skip + limit < totalUsers ? page + 1 : null,
    users,
  });
});

// Logic for in-memory pagination (not using MongoDB)
app.get("/users", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < users.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  results.results = users.slice(startIndex, endIndex);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
