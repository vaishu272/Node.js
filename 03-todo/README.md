# 📝 Todo CLI Application (Node.js)

A simple and interactive **Command Line Todo Application** built using Node.js.
This project demonstrates core concepts like **file handling, CLI interaction, and CRUD operations**.

---

## 🚀 Features

- ➕ Add new tasks
- 📋 View all tasks
- 🗑️ Delete tasks
- 💾 Persistent storage using `todos.json`
- 🖥️ Interactive CLI using `readline`

---

## 📂 Project Structure

```
project-folder/
│
├── index.js       # Main application file
├── todos.json     # Stores tasks (auto-created)
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/todo-cli-app.git
cd todo-cli-app
```

### 2️⃣ Run the application

```
npm start
```

---

## 📌 Usage

When you run the app, you will see:

```
📝 Todo List Application

1. Add Task
2. View Tasks
3. Delete Task
4. Exit
```

---

### ➕ Add Task

- Select option `1`
- Enter your task
- Task will be saved in `todos.json`

---

### 📋 View Tasks

- Select option `2`
- Displays all saved tasks

---

### 🗑️ Delete Task

- Select option `3`
- Enter task number to delete

---

### 🚪 Exit

- Select option `4`
- Closes the application

---

## 💾 Data Storage

All tasks are stored in:

```
todos.json
```

Example:

```
[
  {
    "text": "Learn Node.js"
  },
  {
    "text": "Build a project"
  }
]
```

---

## 🧠 Concepts Used

- Node.js Core Modules:
  - `fs` (File System)
  - `readline` (CLI interaction)

- JSON data handling
- Synchronous file operations
- User input handling

---

## 🎯 Learning Outcomes

After completing this project, you will understand:

- How to build CLI applications in Node.js
- How to store and manage data locally
- Basic CRUD operations
- Handling user input in terminal

---
