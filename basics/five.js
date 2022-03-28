/*const fun1 = require("./four.js");
console.log(fun1(10,20));
const obj1 = require("./four.js");
console.log(obj1.add(10,20));
console.log(obj1["mul"](10,20));*/
const {mul} = require("./four.js");     // {} this helps in destructuring the object.
console.log(mul(10,20));