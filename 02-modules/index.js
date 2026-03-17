const fs = require("fs");
const path = require("path");
const os = require("os");
const http = require("http");
const EventEmitter = require("events");
const { URL } = require("url");
const { Readable } = require("stream");
const crypto = require("crypto");
const dns = require("dns");
const assert = require("assert");
const util = require("util");
const readline = require("readline");

/*
========================================
PROCESS OBJECT
Real Example: Node.js Runtime Information
========================================
*/

console.log("");
console.log("*** PROCESS OBJECT ***");

// Command line arguments
console.log("Command-line Arguments:", process.argv);

// Node.js version
console.log("Node Version:", process.version);

// OS platform
console.log("Platform:", process.platform);

// CPU architecture
console.log("Architecture:", process.arch);

// Current working directory
console.log("Current Working Directory:", process.cwd());

// Process ID
console.log("Process ID:", process.pid);

// Environment variables
console.log("Environment Variables:", process.env.NODE_ENV || "development");

// Memory usage
console.log("Memory Usage:", process.memoryUsage());

// System uptime
console.log("Process Uptime (seconds):", process.uptime());

// Node release information
console.log("Node Release Info:", process.release);

// Node versions for dependencies
// console.log("Node Versions:", process.versions);

// Standard input/output streams
console.log("STDIN readable:", process.stdin.readable);
console.log("STDOUT writable:", process.stdout.writable);

// Next tick example (event loop)
process.nextTick(() => {
  console.log("This runs in the next event loop tick");
});

// Exit event example
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});

/*
========================================
1. FILE SYSTEM (fs) MODULE
Real Example: Creating and updating log file
========================================
*/

console.log("\n*** FILE SYSTEM (fs) MODULE ***");

const logFile = "./app-log.txt";

fs.writeFileSync(logFile, "Application started\t");
console.log("Log file created");

fs.appendFileSync(logFile, `User logged in at ${new Date()}\n`);
console.log("Log entry added");

console.log("Reading log file (Blocking)");
const data = fs.readFileSync(logFile, "utf-8");
console.log("Log Content:\n", data);

console.log("Reading log file (Non-Blocking)");
fs.readFile(logFile, "utf-8", (err, data) => {
  if (err) return console.error(err);
  console.log("Async Log Content:\n", data);
});

fs.promises
  .readFile(logFile, "utf-8") // (filePath, encoding, callback) => Promise
  .then((data) => {
    console.log("Promise Log Content:\n", data);
  })
  .catch((err) => console.error(err));

/*
========================================
2. PATH MODULE
Real Example: Managing file uploads
========================================
*/

console.log("\n*** PATH MODULE ***");

const uploadPath = path.join("uploads", "users", "profile.png");

console.log("Filename: ", __filename);
console.log("Directory Name: ", __dirname);
console.log("Upload Path:", uploadPath);
console.log("Parse: ", path.parse(uploadPath));
console.log("File Name:", path.basename(uploadPath));
console.log("Folder:", path.dirname(uploadPath));
console.log("File Extension:", path.extname(uploadPath));
console.log("Absolute Path:", path.resolve(uploadPath));

/*
========================================
3. OS MODULE
Real Example: Monitoring system information
========================================
*/

console.log("\n*** OS MODULE ***");

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("User Information:", os.userInfo());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("User Home Directory:", os.homedir());

/*
========================================
4. URL MODULE
Real Example: Parsing API request URL
========================================
*/

console.log("\n*** URL MODULE ***");

const myUrl = new URL("https://example.com/products?id=101&category=mobile");

console.log("URL: https://example.com/products?id=101&category=mobile");
console.log("Host:", myUrl.host);
console.log("Path:", myUrl.pathname);
console.log("Product ID:", myUrl.searchParams.get("id"));
console.log("Category:", myUrl.searchParams.get("category"));

/*
========================================
5. EVENTS MODULE
Real Example: Order notification system
========================================
*/

console.log("\n*** EVENTS MODULE ***");

const emitter = new EventEmitter();

emitter.on("orderPlaced", (orderId) => {
  console.log(`Order ${orderId} has been placed successfully`);
});

emitter.emit("orderPlaced", 3456);

/*
========================================
6. STREAM MODULE
Real Example: Reading large file chunks
========================================
*/

console.log("\n*** STREAM MODULE ***");

const stream = Readable.from(["Processing ", "large ", "data ", "stream"]);

stream.on("data", (chunk) => {
  console.log("Chunk:", chunk.toString());
});

/*
========================================
7. BUFFER MODULE
Real Example: Handling binary data
========================================
*/

console.log("\n*** BUFFER MODULE ***");

const buffer = Buffer.from("UserToken123");

console.log("Buffer:", buffer);
console.log("Decoded:", buffer.toString());

/*
========================================
8. CRYPTO MODULE
Real Example: Password hashing
========================================
*/

console.log("\n*** CRYPTO MODULE ***");

const password = "user123";
const hashedPassword = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log("Original Password:", password);
console.log("Hashed Password:", hashedPassword);

/*
========================================
9. TIMERS MODULE
Real Example: Background job
========================================
*/

console.log("\n*** TIMERS MODULE ***");

setTimeout(() => {
  console.log("Reminder: Backup completed after 2 seconds");
}, 2000);

let jobCount = 0;

const job = setInterval(() => {
  console.log("Running background cleanup job..." + jobCount);
  jobCount++;

  if (jobCount === 3) {
    clearInterval(job);
    console.log("Cleanup job stopped at " + jobCount);
  }
}, 1000);

/*
========================================
10. DNS MODULE
Real Example: Checking website IP
========================================
*/

console.log("\n*** DNS MODULE ***");

dns.lookup("google.com", (err, address, family) => {
  if (err) return console.error(err);
  console.log("Google IP Address:", address);
  console.log("IP Version:", family);
});

/*
========================================
11. ASSERT MODULE
Real Example: Unit testing validation
========================================
*/

console.log("\n*** ASSERT MODULE ***");

try {
  const total = 200 + 300;
  assert.strictEqual(total, 500);
  console.log("Calculation Test Passed");
} catch (err) {
  console.log("Test Failed");
}

/*
========================================
12. UTIL MODULE
Real Example: Debugging objects
========================================
*/

console.log("\n*** UTIL MODULE ***");

const user = { name: "Vaishnavi", role: "Developer", age: 22 };

console.log(util.format("User %s is a %s", user.name, user.role));
console.log("User Object:", util.inspect(user));

/*
========================================
13. READLINE MODULE
Real Example: CLI interaction
========================================
*/

console.log("\n*** READLINE MODULE ***");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your city: ", (city) => {
  console.log(`Hello! You are from ${city}`);
  rl.close();
});

/*
========================================
14. HTTP MODULE
Real Example: Simple API server
========================================
*/

console.log("\n*** HTTP MODULE ***");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to Node.js Server");
  } else if (req.url === "/about") {
    res.write("This is About Page");
  } else {
    res.write("404 Page Not Found");
  }

  res.end();
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
