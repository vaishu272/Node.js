# 🚀 EJS Learning App

This project is a **beginner-to-intermediate Node.js + Express application** that demonstrates how to use **EJS (Embedded JavaScript)** for dynamic server-side rendering.

---

## 📌 Features

- ✅ Dynamic page rendering using EJS
- ✅ Reusable components using partials (header & footer)
- ✅ Displaying data using loops (`forEach`)
- ✅ Conditional rendering
- ✅ Clean UI with responsive card layout
- ✅ Organized folder structure
- ✅ Static file serving (`express.static`)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- EJS
- HTML5
- CSS3

---

## 📁 Project Structure

```
project/
│
├── public/
│   └── style.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── home.ejs
│   └── users.ejs
│
├── index.js
└── package.json
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
npm run dev
```

---

## 🌐 Usage

Open your browser and visit:

```
http://localhost:3000
```

---

## 🔗 Available Routes

| Route    | Description                          |
| -------- | ------------------------------------ |
| `/`      | EJS concepts explanation page        |
| `/users` | Users list displayed using EJS cards |

---

## 🧠 Concepts Covered

### 🔹 EJS (Embedded JavaScript)

EJS is a templating engine that allows you to embed JavaScript inside HTML to generate dynamic content on the server.

---

### 🔹 EJS Syntax

- `<%= %>` → Output data (escaped, safe)
- `<%- %>` → Output raw HTML (unescaped)
- `<% %>` → JavaScript logic (loops, conditions)

---

### 🔹 Partials

Reusable components like header and footer:

```
<%- include("partials/header") %>
<%- include("partials/footer") %>
```

---

### 🔹 Loop Rendering

Used to display multiple items dynamically:

```
<% users.forEach((user) => { %>
  <p><%= user.name %></p>
<% }) %>
```

---

### 🔹 Conditional Rendering

```
<% if (user.age > 18) { %>
  <p>Adult</p>
<% } else { %>
  <p>Minor</p>
<% } %>
```

---

## 🔄 Alternatives to EJS

### 🔹 Pug

Pug is a templating engine with a **clean, indentation-based syntax** (no closing HTML tags required).
It makes code shorter and more readable but requires learning a new syntax.

👉 Example:

```pug
h1 Hello World
p This is Pug template
```

👉 Best for:

- Developers who prefer clean and minimal syntax
- Projects where readability and compact code matter

---

### 🔹 Marko

Marko is a **high-performance templating engine** designed for fast rendering and scalability.
It supports both **server-side rendering (SSR)** and **client-side updates**.

👉 Key features:

- Very fast performance ⚡
- Supports components (like React)
- Great for large-scale applications

👉 Best for:

- High-performance apps
- Real-time or dynamic UI applications
- Enterprise-level projects

---

## 🎨 UI Highlights

- Responsive card layout
- Clean navbar and footer using partials
- Centered and readable content
- Hover effects for better user experience

---

## 🎯 Purpose

This project is built for:

- Learning EJS with Express.js
- Understanding server-side rendering (SSR)
- Practicing dynamic UI rendering
- Preparing for backend/full-stack interviews

---

## ⭐ Conclusion

This project is a **complete beginner-friendly EJS application** that demonstrates how to build dynamic web pages using Express and templating concepts.

---
