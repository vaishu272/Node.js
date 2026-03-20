# 🚀 Express Learning App

This project is a **beginner-to-intermediate Express.js application** that demonstrates core backend concepts along with basic frontend integration.

---

## 📌 Features

- ✅ Routing (GET, POST)
- ✅ Middleware usage
- ✅ Form handling (POST requests)
- ✅ Route Parameters (`req.params`)
- ✅ Query Parameters (`req.query`)
- ✅ Static file serving (`express.static`)
- ✅ Custom 404 Page
- ✅ External API Fetch (using Fetch API)
- ✅ Responsive UI (HTML + CSS)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3

---

## 📁 Project Structure

```
project/
│
├── public/
│   ├── index.html
│   ├── about.html
│   ├── style.css
│   └── about.css
│
├── views/
│   └── 404.html
│
├── env.js
└── index.js
```

---

## ⚙️ Installation

1. Clone the repository

```
git clone <your-repo-link>
```

2. Navigate to the project folder

```
cd project
```

3. Install dependencies

```
npm install
```

4. Run the server

```
node --watch index.js
```

---

## 🌐 Usage

Open your browser and visit:

```
http://localhost:3000
```

---

## 🔗 Available Routes

| Route                              | Description               |
| ---------------------------------- | ------------------------- |
| `/`                                | Home page with form       |
| `/about`                           | Concepts explanation page |
| `/profile/:username`               | Route parameters demo     |
| `/profile/:username/article/:slug` | Nested route params       |
| `/product?search=value`            | Query parameters demo     |
| `*`                                | Custom 404 page           |

---

## 🧠 Concepts Covered

### 🔹 Middleware

Used for handling requests before sending responses.

### 🔹 Routing

Defines how the server responds to different endpoints.

### 🔹 Route Parameters

Dynamic values passed through URL.

### 🔹 Query Parameters

Used for filtering/searching data.

### 🔹 Form Handling

Using POST method and `req.body`.

### 🔹 Static Files

Serving HTML & CSS using Express.

### 🔹 Error Handling

Custom 404 page for unknown routes.

---

## 🎯 Purpose

This project is built for:

- Learning Express.js fundamentals
- Understanding backend concepts
- Preparing for interviews
- Building a base for full-stack applications

---

## ⭐ Conclusion

This project is a **complete beginner-friendly Express.js application** that covers essential backend concepts with a clean UI.

---
