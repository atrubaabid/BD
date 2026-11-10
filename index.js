// console.log("Atruba");
// console.log("12-2");
// console.log(12-222);





//  6. What is require()?

// DEFAULT-EXPORT
const add = require("./math.js");
console.log(add(10,20));

// NAME-EXPORT
const { myname, add2 } = require("./math");

console.log(add2(10,10));
console.log(myname);






