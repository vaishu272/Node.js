import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./user-model.js";
import { connectDB } from "./db.js";
import { users } from "./data.js";

const app = express();
const PORT = 5000;

app.use(cors());

const startServer = async () => {
  try {
    await connectDB();

    await User.deleteMany({});
    await User.insertMany(users);

    console.log("Sample users inserted");

    app.get("/api/users/cursor", async (req, res) => {
      const limit = Number(req.query.limit) || 6;
      const cursor = req.query.cursor;

      let query = {};

      if (cursor) {
        query._id = {
          $gt: new mongoose.Types.ObjectId(cursor),
        };
      }

      const users = await User.find(query).sort({ _id: 1 }).limit(limit);

      const nextCursor = users.length > 0 ? users[users.length - 1]._id : null;

      res.json({
        users,
        nextCursor,
      });
    });

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
  }
};

startServer();
