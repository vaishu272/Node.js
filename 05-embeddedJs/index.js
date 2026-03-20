import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// HOME Page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/users", (req, res) => {
  const users = [
    { name: "Vaishnavi", age: 22, role: "Developer" },
    { name: "Rahul", age: 24, role: "Designer" },
    { name: "Priya", age: 21, role: "Tester" },
    { name: "Amit", age: 25, role: "Manager" },
    { name: "Sneha", age: 23, role: "HR" },
    { name: "Karan", age: 26, role: "Backend Developer" },
    { name: "Neha", age: 22, role: "Frontend Developer" },
    { name: "Rohit", age: 27, role: "DevOps Engineer" },
    { name: "Anjali", age: 24, role: "UI/UX Designer" },
    { name: "Vikas", age: 28, role: "Team Lead" },
    { name: "Pooja", age: 23, role: "QA Engineer" },
    { name: "Arjun", age: 26, role: "Full Stack Developer" },
    { name: "Meera", age: 22, role: "Intern" },
  ];
  res.render("users", { users });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
