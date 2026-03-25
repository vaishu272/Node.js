# 🚀 MERN Authentication & Dashboard Project

A full-stack web application built using the MERN stack that allows users to **register, login, view dashboard, and upload a profile image**.

---

## 📌 Features

- 🔐 User Signup & Login
- 🔒 Password hashing using bcrypt
- 👤 User Dashboard
- 🖼️ Profile Image Upload (Multer)
- 📦 MongoDB Database Integration
- ⚡ REST API with Express.js
- 🎨 Modern UI with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend (Client)

- React.js (TypeScript)
- Tailwind CSS
- Axios
- React Router

### Backend (Server)

- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for image upload)
- bcrypt.js

---

## 📂 Project Structure

```
project/
├── client/        # React frontend
├── server/        # Express backend
├── README.md      # Project documentation
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Backend Setup

```
cd server
npm install
```

Create a `.env` file in `server/`:

```
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

Run the backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | /api/auth/register   | Register user        |
| POST   | /api/auth/login      | Login user           |
| GET    | /api/auth/user/:id   | Get user data        |
| POST   | /api/auth/upload/:id | Upload profile image |

---

## 🧠 How It Works

1. User registers using Signup form
2. User logs in → data stored in localStorage
3. Dashboard fetches user data from MongoDB
4. User uploads profile image → stored in server
5. Image path saved in database and displayed

---

## ⚠️ Important Notes

- Backend runs on: `http://localhost:3000`
- Frontend runs on: `http://localhost:5173`
- Make sure MongoDB is running locally or use Atlas

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
