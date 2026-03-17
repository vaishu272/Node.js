import readline from "readline";
import fs from "fs";

const FILE = "./todos.json";

// Load existing todos
let todos = [];
if (fs.existsSync(FILE)) {
  todos = JSON.parse(fs.readFileSync(FILE));
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Save todos to file
const saveTodos = () => {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
};

// Show menu
const showMenu = () => {
  console.log("\n=======================");
  console.log("📝 Todo List Application");
  console.log("=======================");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Delete Task");
  console.log("4. Exit");
  rl.question("\nChoose an option: ", handleInput);
};

// Handle user input
const handleInput = (option) => {
  switch (option) {
    case "1":
      rl.question("Enter new task: ", (task) => {
        if (!task.trim()) {
          console.log("❌ Task cannot be empty");
          return showMenu();
        }

        todos.push({ text: task });
        saveTodos();
        console.log("✅ Task added!");
        showMenu();
      });
      break;

    case "2":
      console.log("\n📋 Your Tasks:");
      if (todos.length === 0) {
        console.log("No tasks found.");
      } else {
        todos.forEach((task, index) => {
          console.log(`${index + 1}. ${task.text}`);
        });
      }
      showMenu();
      break;

    case "3":
      rl.question("Enter task number to delete: ", (num) => {
        const index = num - 1;

        if (!todos[index]) {
          console.log("❌ Invalid task number");
        } else {
          const removed = todos.splice(index, 1);
          saveTodos();
          console.log(`🗑️ Deleted: ${removed[0].text}`);
        }
        showMenu();
      });
      break;

    case "4":
      console.log("👋 Exiting... Goodbye!");
      rl.close();
      break;

    default:
      console.log("❌ Invalid option");
      showMenu();
  }
};

showMenu();
