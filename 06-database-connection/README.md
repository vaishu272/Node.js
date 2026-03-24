# 🚀 Multi-Database Integration (MongoDB + MySQL)

This project demonstrates how to integrate **MongoDB (NoSQL)** and **MySQL (SQL)** in a single **Node.js + Express** server.

It allows inserting and fetching user data from **both databases simultaneously**.

---

## 📌 Features

- ✅ Connect MongoDB using Mongoose
- ✅ Connect MySQL using mysql2
- ✅ Insert data into both databases in one API
- ✅ Fetch data from both databases
- ✅ Modular folder structure (config, models)
- ✅ Environment variables for security
- ✅ API testing using Thunder Client

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- MySQL (mysql2)
- Thunder Client

---

## 📁 Project Structure

```id="c1oht0"
project/
│
├── config/
│   ├── mongodb.js
│   └── mysql.js
│
├── models/
│   └── userModel.js
│
├── .env ❌ (not pushed to GitHub)
├── .env.example ✅
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

git clone <your-repo-link>
cd project

```

### 2️⃣ Install dependencies

npm install
```

---

## 🔐 Environment Variables (IMPORTANT)

Create a `.env` file in the root folder:

PORT=3000

MONGO_URI=mongodb://127.0.0.1:27017/mongooseDB

MYSQL_PASSWORD=your_password

```

---

### ⚠️ Why use `.env`?

* MongoDB URL may change (local / cloud)
* MySQL password is sensitive
* Avoid exposing credentials on GitHub

---

### 📄 `.env.example` (for GitHub)

PORT=3000

MONGO_URL=your_mongodb_connection_string

MYSQL_PASSWORD=your_password

```

---

### 🚫 Add to `.gitignore`

.env

```

👉 This ensures your secrets are not uploaded to GitHub

---

## 🗄️ Database Setup

### ▶️ Start MongoDB

mongod
```

### ▶️ Start MySQL

Use XAMPP / MySQL Workbench

---

## ▶️ Run the Server

npm run dev

```

Server runs at:

http://localhost:3000
```

---

## 📡 API Endpoints

### 🔹 Insert Users into BOTH DBs

**POST** `/`

👉 Inserts 2 users into MongoDB and MySQL

---

### 🔹 Get Users from BOTH DBs

**GET** `/`

👉 Fetches all users from both databases

---

## ⚡ Testing with Thunder Client

### 🔧 Step 1: Install Thunder Client

- Open VS Code
- Go to Extensions
- Search **Thunder Client**
- Install

---

### 🔧 Step 2: Insert Data (POST)

POST http://localhost:3000/

```

Click **Send**

---

### 🔧 Step 3: Fetch Data (GET)

GET http://localhost:3000/
```

Click **Send**

---

## 🔁 Flow Summary

1️⃣ POST request → inserts data into both DBs
2️⃣ GET request → displays stored data

---

## ⚠️ Important Notes

- Email field is **unique**
- Duplicate entries will throw errors
- Always run POST before GET
- Browser only supports GET (use Thunder Client for POST)

---

## 🎯 Learning Outcomes

- Multi-database architecture
- SQL vs NoSQL understanding
- Secure credential management using `.env`
- Backend structuring (config + models)
