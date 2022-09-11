/**
 * Front End Interview Questions: const vs let vs var
 *
 * Q: What are the differences between const, let, and var?
 */

//  var firstNameVar;

if (false) {
  let firstNameLet = "Dylan";
  var firstNameVar = "Dylan";
}

// console.log(firstNameVar);
// console.log(firstNameLet);

const PI = 3.14;
const user = {
  firstName: "D-Money",
};
// PI = 3.145;
console.log(PI);
user.firstName = "Dylan";
