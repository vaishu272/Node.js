# 📸 Image Upload App (Node.js + Express + Multer)

A simple and clean image upload application built using **Node.js**, **Express**, **Multer**, and **EJS**.
Users can upload images, which are stored on the server and displayed instantly on the UI.

---

## 🚀 Features

- 📂 Upload images from local system
- 🖼 Preview uploaded image after upload
- 🔒 Restricts file types to images only (JPG, PNG, GIF)
- 🎨 Clean and modern UI
- 📁 Stores uploaded images in `public/images` folder
- ⚡ Fast and lightweight Express server

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **Multer** (for file uploads)
- **EJS** (templating engine)
- **CSS** (for styling)

---

## 📁 Project Structure

```
project/
│
├── public/
│   └── images/        # Uploaded images stored here
│
├── views/
│   └── home.ejs       # UI template
│
├── index.js          # Main server file
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/image-upload-app.git
cd image-upload-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
node index.js
```

or (if using nodemon)

```bash
nodemon index.js
```

---

## 🌐 Usage

1. Open browser and go to:

```
http://localhost:3000
```

2. Click **Choose File**
3. Select an image (JPG, PNG, GIF)
4. Click **Upload**
5. Uploaded image will be displayed on the page

---

## 🔐 Validation

- Only image files are allowed:
  - `.jpg`
  - `.jpeg`
  - `.png`
  - `.gif`

- Both frontend (`accept="image/*"`) and backend (Multer `fileFilter`) validation applied

---

## ⚠️ Important Notes

- Make sure the folder exists:

```
public/images
```

- If not, create it manually before running the app

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
