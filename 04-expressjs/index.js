import express from "express";
import { PORT } from "./env.js";
import router from "./routes/home.routes.js";

const app = express();

// ==============================
// MIDDLEWARE
// ==============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express Router
app.use(router);

// ==============================
// FETCH (Top-level await)
// ==============================
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log("Fetched Data:", data);
} catch (error) {
  console.error("Fetch Error:", error.message);
}

// ==============================
// SERVER
// ==============================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
