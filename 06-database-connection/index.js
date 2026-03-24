import express from "express";
import connectMongo from "./config/mongodb.js";
import { connectMySQL, mysqlDB } from "./config/mysql.js";
import MongoUser from "./models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

/* =========================
   ROUTES
========================= */

app.post("/", async (req, res) => {
  try {
    console.log("POST HIT ✅");

    const users = [
      { name: "Vaishnavi", email: "vaishu1@gmail.com" },
      { name: "Riya", email: "riya@gmail.com" },
    ];

    console.log("Mongo inserting...");
    const mongoUsers = await MongoUser.insertMany(users);
    console.log("Mongo inserted:", mongoUsers);

    if (!mysqlDB) {
      console.log("MySQL not connected ❌");
      return res.status(500).json({ error: "MySQL not connected" });
    }

    console.log("MySQL inserting...");
    const values = users.map((u) => [u.name, u.email]);

    const [mysqlResult] = await mysqlDB.query(
      "INSERT INTO users (name, email) VALUES ?",
      [values],
    );

    console.log("MySQL inserted:", mysqlResult);

    res.json({
      message: "Inserted ✅",
      mongoUsers,
      mysqlResult,
    });
  } catch (err) {
    console.error("ERROR ❌", err);
    res.status(500).json({ error: err.message });
  }
});

// 👉 Get data from BOTH DBs
app.get("/", async (req, res) => {
  try {
    const mongoUsers = await MongoUser.find();

    const [mysqlUsers] = await mysqlDB.execute("SELECT * FROM users");

    res.json({
      mongoUsers,
      mysqlUsers,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   START SERVER
========================= */
const startServer = async () => {
  await connectMongo();
  await connectMySQL();

  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000 🚀");
  });
};

startServer();
