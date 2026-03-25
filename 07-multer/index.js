import express from "express";
import multer from "multer";
import crypto from "crypto";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
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

// HOME Page
app.get("/", (req, res) => {
  res.render("home", { imagePath: null });
});

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.send("No file uploaded");
  }

  console.log(req.file);

  const imagePath = "/images/" + req.file.filename;

  res.render("home", { imagePath });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
