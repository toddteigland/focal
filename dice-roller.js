const inputs = Number(process.argv.slice(2));

console.log(inputs);
const diceRoller = function(inputs) {
  let result = "";
  
  for (let i = 0; i < inputs; i++) {
    result += Math.floor(Math.random() * (7 - 1) + 1) + ", ";  
  } 
  result = `Rolled ${inputs} dice: ${result}`;
  result = result.replace(/,\s*$/, "");
  return result;
};

console.log(diceRoller(inputs));

