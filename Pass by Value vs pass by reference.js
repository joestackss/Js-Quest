/**
 * Front End Interview Questions: Pass by Value vs Pass by Reference
 *
 * Q: What is pass by reference and how does it differ from pass by value?
 */

const prim = 5;

function add(value) {
  value++;

  return value;
}

console.log(add(prim), prim);

const ref = { count: 5 };

function add2(value) {
  value.count++;

  return value.count;
}

console.log(add2(ref), ref.count);
