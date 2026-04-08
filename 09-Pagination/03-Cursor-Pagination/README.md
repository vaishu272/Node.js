# 🚀 MERN Cursor-Based Pagination Example

A simple **MERN Stack Cursor Pagination project** built using:

- **MongoDB + Mongoose**
- **Express.js**
- **React + Vite**
- **Axios**
- **Tailwind CSS**

This project demonstrates how **cursor-based pagination works in backend and frontend** using MongoDB `_id` as the cursor.

---

# 📌 What is Cursor Pagination?

Cursor pagination means:

> Fetch the next set of records using the **last fetched item’s unique id**.

Instead of page numbers:

```bash
?page=2
```

we use:

```bash
?cursor=lastFetchedId
```

This makes pagination **faster and scalable** for large datasets.

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
- Axios
- Tailwind CSS
- Vite

---

# 📂 Project Structure

```bash
project/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── user-model.js
│   └── data.js
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
app.get("/api/users/cursor", async (req, res) => {
  const limit = Number(req.query.limit) || 6;
  const cursor = req.query.cursor;

  let query = {};

  if (cursor) {
    query._id = {
      $gt: new mongoose.Types.ObjectId(cursor),
    };
  }

  const users = await User.find(query).sort({ _id: 1 }).limit(limit);

  const nextCursor = users.length > 0 ? users[users.length - 1]._id : null;

  res.json({
    users,
    nextCursor,
  });
});
```

---

# 🧠 Backend Logic Explained

## 1️⃣ First Request

Frontend sends:

```bash
/api/users/cursor?limit=6
```

No cursor is sent.

So backend query becomes:

```js
{
}
```

This fetches **first 6 users**.

---

## 2️⃣ Next Cursor Calculation

After fetching users, backend gets:

```js
const nextCursor = users[users.length - 1]._id;
```

This means:

> take the `_id` of the last user in current batch

Example:

```bash
1 2 3 4 5 6
```

Next cursor:

```bash
6
```

---

## 3️⃣ Next Request

Frontend sends:

```bash
/api/users/cursor?cursor=6&limit=6
```

Backend query becomes:

```js
{
  _id: {
    $gt: ObjectId("6");
  }
}
```

This fetches:

```bash
7 8 9 10 11 12
```

---

# 🔍 Why `_id > cursor` Works

MongoDB `_id` values are indexed and ordered.

This query:

```js
_id > cursor;
```

means:

> fetch all records after the last fetched document

This avoids scanning skipped records.

---

# 🚀 Why Cursor Pagination is Faster

## ❌ Offset Pagination

```js
.skip(10000)
```

MongoDB still scans 10,000 records.

---

## ✅ Cursor Pagination

```js
_id > cursor;
```

MongoDB directly jumps using index.

This makes it perfect for:

- social media feeds
- notifications
- chat messages
- activity logs
- infinite scrolling

---

# 🌐 Frontend Flow

Frontend stores:

```js
const [cursor, setCursor] = useState(null);
```

and sends:

```js
/api/users/cursor?cursor=${cursor}
```

When response comes:

```js
setCursor(response.data.nextCursor);
```

Then clicking **Load More** fetches the next batch.

---

# 🔄 Load More Flow

## First Load

```bash
1 2 3 4 5 6
```

---

## Load More

```bash
7 8 9 10 11 12
```

---

## UI After Append

```bash
1 2 3 4 5 6 7 8 9 10 11 12
```

This is done using:

```js
setUsers((prev) => [...prev, ...response.data.users]);
```

---

# 🎨 UI Features

- Tailwind responsive cards
- Dark modern dashboard UI
- Load More button
- Cursor-based loading
- Smooth hover effects
- Duplicate-safe append logic

---

# 🧪 Example API Calls

## First Batch

```bash
GET http://localhost:5000/api/users/cursor?limit=6
```

---

## Second Batch

```bash
GET http://localhost:5000/api/users/cursor?cursor=LAST_ID&limit=6
```

---

# 📤 Sample Response

```json
{
  "users": [
    {
      "_id": "69d64c766acbb64316ab14db",
      "name": "Aarav Sharma",
      "email": "aarav@example.com"
    }
  ],
  "nextCursor": "69d64c766acbb64316ab14db"
}
```

---

# 🎯 Learning Outcome

By building this project, you learn:

- Cursor-based pagination
- MongoDB `_id` indexing
- Mongoose `ObjectId`
- Efficient backend querying
- Infinite loading UI
- React state append logic
- Tailwind UI design
- Real-world feed pagination

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

- Infinite scroll
- Search + cursor pagination
- Sorting
- Real-time feed updates
- GraphQL cursor pagination
- Bidirectional cursor (prev + next)

---

# 👩‍💻 Author

Built for learning **MERN Cursor-Based Pagination**
