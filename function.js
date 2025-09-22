//function
// code reausability
function add() {
  let a = 5;
  let b = 6;
  document.write((a + b).toString());
  console.log(a + b);
}
// call it
// ES6
add();

//ES7
// If using TypeScript, add type annotations:
// If using TypeScript, add type annotations:
// @ts-ignore
const addNumbers = (a, b) => console.log(a + b);
addNumbers(78, 90);

//console.log(b);
b = 45;

//hosting to declare the variable to the top
/*console.log(b);
b = 45;*/

let currentUserName = "sahith";
function demo() {
  let name = "sahith";
  document.write(`Hello, My name is  ${name}`);
}
document.write(`Hello, My name is  ${currentUserName}`);
demo();
