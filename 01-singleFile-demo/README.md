# Node.js Single File Example

## Introduction to Node.js

Node.js is an **open-source, cross-platform JavaScript runtime environment** that allows developers to run JavaScript code **outside the browser**. It is mainly used for **server-side development**, such as building APIs, backend services, and scalable network applications.

Node.js is built on **Google Chrome’s V8 JavaScript engine**, which makes JavaScript execution fast and efficient. It uses an **event-driven, non-blocking I/O architecture**, allowing applications to handle multiple requests at the same time.

### Meaning of Node.js

- **Node** → A point in a network that can send and receive data
- **JS** → JavaScript

So, **Node.js is a runtime that allows JavaScript to act as a server-side technology**, processing requests and sending responses between clients and servers.

### Brief History

Node.js was created in **2009 by Ryan Dahl** to solve the problem of slow and blocking web servers.
Some important milestones:

- **2009** – Node.js was introduced
- **2010** – **npm (Node Package Manager)** was released
- **2015** – Node.js Foundation was formed
- Today Node.js is widely used by companies like **Netflix, PayPal, LinkedIn, and Uber**.

---

## Project Overview

This project demonstrates how **Node.js can execute JavaScript code from a single file using the terminal**.
The example includes basic JavaScript concepts such as **variables, functions, conditions, arrays, objects, loops, and switch statements**.

---

## 📂 Project Structure

```
node-single-file-demo
│
├── index.js
└── README.md
```

---

## ⚙️ Prerequisites

Make sure **Node.js** is installed.

Check installation:

```
node -v
npm -v
```

---

## ▶️ Running the Program

1. Open the terminal
2. Navigate to the project folder
3. Run:

```
node index.js
```

Node.js will execute the JavaScript file and display the output in the terminal.

---

## 💻 Code Overview

The `index.js` file demonstrates:

- **Variables** – storing data like name and age
- **Functions** – creating reusable logic (`greet`, `add`)
- **Conditional statements** – using `if-else`
- **Arrays & Objects** – storing structured data
- **Array methods** – using `map()`
- **Switch statement** – handling multiple conditions
- **Loops** – printing star patterns using nested loops

Example snippet:

```javascript
let nameee = "Vaishnavi";
const age = 22;

console.log(nameee + " is " + age + " years old.");

function greet() {
  console.log("Hello, " + nameee + "!");
}

greet();
```

---

## 📌 Key Learning

- Node.js allows JavaScript to run **outside the browser**.
- JavaScript files can be executed using the **terminal**.
- A single `.js` file can contain multiple JavaScript concepts.
- Node.js executes code **sequentially from top to bottom**.

---

## 🚀 Conclusion

This example demonstrates how **Node.js runs JavaScript in a single-file environment**, making it useful for learning core JavaScript concepts and understanding how backend applications execute code.
