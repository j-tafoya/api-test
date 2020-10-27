console.log("hello World!");
var myArray = ['a', 'b', 'c', 'd'];

delete myArray[2];  // Noncompliant. myArray => ['a', 'b', undefined, 'd']
console.log(myArray[2]); // expected value was 'd' but output is undefined


var myArray = ['a', 'b', 'c', 'd'];

// removes 1 element from index 2
removed = myArray.splice(2, 1);  // myArray => ['a', 'b', 'd']
console.log(myArray[2]); // outputs 'd'

if (1 == '1') { console.log("noncompliant")} // Noncompliant


var a = NaN;

if (a === NaN) {  // Noncompliant; always false
  console.log("a is not a number");  // this is dead code
}
if (a !== NaN) { // Noncompliant; always true
  console.log("a is not NaN"); // this statement is not necessarily true
}
