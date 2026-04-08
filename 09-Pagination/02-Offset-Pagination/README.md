# 🚀 MERN Offset Pagination Example

A simple **MERN Stack Offset Pagination project** built using:

- **MongoDB + Mongoose**
- **Express.js**
- **React + Vite**
- **Axios**
- **REST Client (.rest file)**

This project demonstrates how **offset pagination works in backend and frontend** using page numbers.

---

# 📌 What is Offset Pagination?

Offset pagination means:

> Skip some records and fetch the next limited set of records.

It works using this formula:

```js
skip = (page - 1) * limit;
```

### ✅ Example

If:

```js
page = 3;
limit = 5;
```

Then:

```js
skip = (3 - 1) * 5 = 10
```

MongoDB skips first **10 users** and returns next **5 users**.

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Frontend

- React.js
- Vite
- Axios
- CSS

---

# 📂 Project Structure

```bash
project/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── user-model.js
│   ├── users.js
│   └── api.rest
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── UserCard.jsx
│   │   └── index.css
│   └── vite.config.js
```

---

# ⚙️ Backend API Route

```js
app.get("/api/users", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  const skip = (page - 1) * limit;
  const totalUsers = await User.countDocuments();

  const users = await User.find().skip(skip).limit(limit);

  res.json({
    totalUsers,
    currentPage: page,
    totalPages: Math.ceil(totalUsers / limit),
    previous: page > 1 ? page - 1 : null,
    next: skip + limit < totalUsers ? page + 1 : null,
    users,
  });
});
```

---

# 🔍 API Meaning

## Query Parameters

### `page`

Current page number requested by frontend.

Example:

```bash
?page=2
```

means fetch **second page data**.

---

### `limit`

Number of records per page.

Example:

```bash
?limit=5
```

means fetch **5 users per page**.

---

# 🧠 Pagination Logic

```js
const skip = (page - 1) * limit;
```

## Example

For:

```bash
page=2&limit=5
```

```js
skip = 5;
```

MongoDB query:

```js
User.find().skip(5).limit(5);
```

This returns:

```bash
User 6 to User 10
```

---

# 🌐 Frontend Flow

Frontend stores current page in state:

```js
const [currentPage, setCurrentPage] = useState(1);
```

When user clicks page **2**, frontend sends:

```bash
/api/users?page=2&limit=5
```

Backend converts it into offset.

---

# 📄 .rest File Example

Create a file:

```bash
api.rest
```

Add this:

```http
### Get page 1 users
GET http://localhost:5000/api/users?page=1&limit=5

### Get page 2 users
GET http://localhost:5000/api/users?page=2&limit=5

### Get page 3 users
GET http://localhost:5000/api/users?page=3&limit=5

### Get page 4 users
GET http://localhost:5000/api/users?page=4&limit=5

### Get page 5 users
GET http://localhost:5000/api/users?page=5&limit=5

### Get page 6 users
GET http://localhost:5000/api/users?page=6&limit=5
```

---

# 📌 Meaning of `.rest` File

`.rest` file is used in **VS Code REST Client extension**.

It allows testing APIs directly inside VS Code without Postman.

## ✅ Install Extension

Install:

```bash
REST Client
```

by **Huachao Mao**

---

# ▶️ How to Use `.rest`

1. Open `api.rest`
2. Click **Send Request**
3. See response directly in VS Code

---

# 📤 Sample Response

```json
{
  "totalUsers": 30,
  "currentPage": 2,
  "totalPages": 6,
  "previous": 1,
  "next": 3,
  "users": [
    {
      "name": "Neha Joshi",
      "email": "neha@example.com",
      "age": 27,
      "role": "QA Engineer",
      "city": "Bangalore"
    }
  ]
}
```

---

# 🧮 Example with 30 Users

If total users = **30**

and

```js
limit = 5;
```

Then:

```js
totalPages = 6;
```

Frontend buttons:

```bash
1 2 3 4 5 6
```

---

# 🔥 Why It Is Called Offset Pagination

Because backend internally calculates:

```js
skip = offset;
```

So page number is converted into **offset value**.

---

# 🎯 Learning Outcome

By building this project, you learn:

- Offset pagination
- Mongoose `.skip()`
- Mongoose `.limit()`
- `.countDocuments()`
- Frontend page state
- Dynamic page buttons
- REST API testing
- MERN data flow

---

# 🚀 Run Project

## Backend

```bash
npm start
```

## Frontend

```bash
npm run dev
```

---

# 🌟 Future Improvements

- Search + pagination
- Filter + pagination
- Cursor pagination
- Infinite scrolling
- Debounced search
- Server-side sorting

---

# 👩‍💻 Author

Built for learning **MERN Offset Pagination**
