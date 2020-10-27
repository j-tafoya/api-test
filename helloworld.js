console.log("hello World!");
var myArray = ['a', 'b', 'c', 'd'];

delete myArray[2];  // Noncompliant. myArray => ['a', 'b', undefined, 'd']
console.log(myArray[2]); // expected value was 'd' but output is undefined
