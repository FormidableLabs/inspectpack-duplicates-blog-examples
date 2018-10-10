const { get } = require("lodash"); // lodash@4.0.0
const { getOne } = require("one");
const { getTwo } = require("two");

const OBJ = { one: { two: "hi" } };

console.log("Get from lodash", get("one.two", OBJ)); // => `"hi"`
console.log("Get from one", getOne(OBJ)); // => `{ two: "hi" }`
console.log("Get from two", getTwo(OBJ)); // => `undefined`
