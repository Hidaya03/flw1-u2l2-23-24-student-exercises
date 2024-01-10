// 1. Covert to an arrow function.
function sayHello() {
    console.log("Hello, world!");
  }
const sayHello = () => {
  console.log("hello, world");
}
sayHello();


// 2. Convert to an arrow function.
function square(num) {
    return num * num;
  }
  const square = (num) => {
    return num*num
  }
const numParameter = 4;
const returnSquare(numParameter);


// 3. Convert to an arrow function.
function addNums(a, b) {
    return a + b;
  }
  const addNums = (a,b) => {
    return a+b;
  }
const num1 = 2;
const num2 = 4;
addNums (num1,num2)

console.log(sayHello())  // should print "Hello, world!"
console.log(square(2)) // should print 4
console.log(addNums(6, 4)) // should print 10
  
  