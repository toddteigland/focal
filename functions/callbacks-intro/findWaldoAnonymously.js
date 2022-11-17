const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  })
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => console.log("Found Waldo at index " + index + "!"))