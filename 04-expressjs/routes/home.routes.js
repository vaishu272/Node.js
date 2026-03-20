import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Router } from "express";

const router = Router();

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
router.use(express.static(path.join(__dirname, "public")));

// ==============================
// ROUTES
// ==============================

// Home
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Form POST
router.post("/", (req, res) => {
  const { name, message } = req.body;

  res.send(`
    <div class="container" style="text-align: center;">
      <h1>Form Submitted ✅</h1>
      <p>Name: ${name}</p>
      <p>Message: ${message}</p>
      <p>👉 POST is used to send data to server.</p>
      <a href="/">Go Back</a>
    </div>
  `);
});

// Route Params
router.get("/profile/:username", (req, res) => {
  console.log("Route Params: ", req.params);

  res.send(`
    <div class="container" style="text-align: center;">
      <h1>Route Parameters</h1>
      <p><strong>Username:</strong> ${req.params.username}</p>
      <p>👉 Route params are used to send dynamic values in URL.</p>
      <a href="/">Go Back</a>
    </div>
  `);
});

// Nested Params
router.get("/profile/:username/article/:slug", (req, res) => {
  const { username, slug } = req.params;
  console.log("Nested Route Params: ", req.params);

  res.send(`
    <div class="container" style="text-align: center;">
      <h1>Nested Route Params</h1>
      <p>User: ${username}</p>
      <p>Article: ${slug}</p>
      <p>👉 Used for structured URLs like blog posts.</p>
      <a href="/">Go Back</a>
    </div>
  `);
});

// Query Params
router.get("/product", (req, res) => {
  const { search } = req.query;
  console.log("Query Params: ", req.query);

  res.send(`
    <div class="container" style="text-align: center;">
      <h1>Query Parameters</h1>
      <p>Search: ${search}</p>
      <p>👉 Query params are used for filtering/searching data.</p>
      <a href="/">Go Back</a>
    </div>
  `);
});

// About
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// ==============================
// 404 HANDLER
// ==============================
router.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

export default router;
