/*
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(names.indexOf(name));   // execute callback
    }
  }
}
*/

// Refactored to use forEach
const findWaldo = function(names, found) {
  names.forEach((name) => {
    if (name === "Waldo") {
      found(names.indexOf(name));   // execute callback
    }
  })
}
const actionWhenFound = function(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);