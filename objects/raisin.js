// Check if received arrays of cookies contain 🍇
// return "Raisin alert!" if 🍇 is detected. if not, return "All good!".


const raisinAlarm = function (cookie) {
// lists all arrays (for...of or for (i))
// check for raisin (if statement)

  for (const item of cookie) {
    if (item === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


// STRETCH ASSIGNMENT 
// Loop through the three arrays
//Set variables, Alert is the array of responses, and responses is the set message for when no raisins are found
// Loop through the individual arrays and change the response each time raisins are found
// After the inside loop, push the response to the alert
// Return the array of responses

const raisinAlarmArray = function (cookies) {
  let alert = [];
  for (let i = 0; i < cookies.length; i++) {
    let responses = "All good!";
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") { 
        responses = "Raisin Alert!";
      }
    }
    alert.push(responses);
  } 
  return alert;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);