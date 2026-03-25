import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import multer from "multer";
import path from "path";
import crypto from "crypto";

const router = express.Router();

// SIGNUP
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SIGNIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get user data
router.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(2, function (err, bytes) {
      const filepath = file.originalname;
      const parsedPath = path.parse(filepath);
      const fn =
        parsedPath.name + bytes.toString("hex") + path.extname(filepath);
      cb(null, fn);
    });
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;

    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error("Only images are allowed!"));
    }
  },
});

// Upload image to the profile
router.post("/upload/:id", upload.single("image"), async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndUpdate(
      userId,
      { profileImage: req.file.filename },
      { returnDocument: "after" },
    );

    res.json({ message: "Image uploaded", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
