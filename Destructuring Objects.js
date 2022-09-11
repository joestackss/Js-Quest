/**
 * Front End Interview Questions: Destructing Objects and Arrays
 *
 * Q: What is and why might you destructure an object or array?
 */

const dob = [10, 25, 1987];
const [day, month, year] = dob;

const user = {
  f: "Dylan",
  l: "Israel",
};

const { f: firstName, l: lastName } = user;
