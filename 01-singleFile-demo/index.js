let nameee = "Vaishnavi";
const age = 22;

console.log(nameee + " is " + age + " years old.");
function greet() {
  console.log("Hello, " + nameee + "!");
}
greet();

const isStudent = true;
if (isStudent) {
  console.log(nameee + " is a student.");
} else {
  console.log(nameee + " is not a student.");
}

const hobbies = ["Reading", "Traveling", "Cooking"];
console.log("Hobbies: " + hobbies.join(", "));

const person = {
  name: "Vaishnavi",
  age: 22,
  isStudent: true,
  hobbies: hobbies,
};
console.log("Person Object: " + JSON.stringify(person));
console.log(person);

function add(a, b) {
  return a + b;
}
const a = 5;
const b = 3;
console.log(`Sum of ${a} and ${b} is: ` + add(a, b));

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers: " + squaredNumbers.join(", "));

const val = "Mango";
switch (val) {
  case "Mango":
    console.log("Switch Case: It's a Mango!");
    break;

  case "Apple":
    console.log("Switch Case: It's an Apple!");
    break;

  default:
    console.log("Switch Case: It's something else.");
    break;
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
