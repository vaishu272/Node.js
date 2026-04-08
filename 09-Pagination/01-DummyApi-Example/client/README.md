# 🚀 React Frontend Pagination Example

A simple **frontend-only pagination project** built using:

- React.js
- DummyJSON API
- JavaScript `slice()`
- Tailwind CSS

This project demonstrates how **offset pagination works completely on frontend** using page buttons.

---

# 📌 What is Frontend Pagination?

Frontend pagination means:

> Fetch all data once and divide it into pages on frontend using `slice()`.

Instead of backend pagination, frontend controls:

- page number
- start index
- end index
- visible products

---

# 🛠️ Tech Stack

- React.js
- Tailwind CSS
- DummyJSON API
- JavaScript Array `slice()`

---

# 📂 Project Structure

```bash
src/
│
├── App.jsx
├── ProductCard.jsx
└── index.css
```

---

# 🌐 API Used

```bash
https://dummyjson.com/products?limit=150
```

This fetches **150 products**.

---

# 🧠 Pagination Logic

```js
const PAGE_SIZE = 15;
const start = currentPage * PAGE_SIZE;
const end = start + PAGE_SIZE;
const currentProducts = products.slice(start, end);
```

---

# 🔍 How It Works

## ✅ Total Products

Suppose API returns:

```js
150 products
```

---

## ✅ Page Size

Each page shows:

```js
15 products
```

---

## ✅ Total Pages

```js
Math.ceil(150 / 15);
```

Result:

```js
10 pages
```

---

# 📖 Page Example

## Page 1

```js
start = 0;
end = 15;
```

Products shown:

```bash
1 to 15
```

---

## Page 2

```js
start = 15;
end = 30;
```

Products shown:

```bash
16 to 30
```

---

## Page 3

```js
start = 30;
end = 45;
```

Products shown:

```bash
31 to 45
```

---

# 🎯 Formula Used

```js
start = currentPage * PAGE_SIZE;
end = start + PAGE_SIZE;
```

This is the core **offset pagination formula**.

---

# 🔥 Why It Is Called Offset Pagination

Because:

```js
start = offset;
```

The frontend calculates how many products to skip.

Example:

```js
Page 3 → offset = 30
```

So first 30 products are skipped.

---

# 🎨 UI Features

- Tailwind responsive grid
- Previous / Next buttons
- Dynamic page buttons
- Active page highlight
- Responsive product cards
- Hover animations

---

# 🚀 Run Project

```bash
npm install
npm run dev
```

---

# 🌟 Learning Outcome

By building this project, you learn:

- frontend pagination
- `slice()` logic
- page buttons
- offset formula
- current page state
- dynamic UI rendering
- Tailwind responsive design

---

Built for learning **React Frontend Offset Pagination**
