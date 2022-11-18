const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// item is the variable name as it iterates through the object
//   it iterates through each object, taking the value at either the x 
//   position or the y and then doing some math stuff
const result = input.map(item => {
  return Math.sqrt(item.x * item.x + item.y * item.y);
});

assertEqual((result[0] === 5), true);
assertEqual((result[1] === 13), true);
assertEqual((result[2] === 17), true);
