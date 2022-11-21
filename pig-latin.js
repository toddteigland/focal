const inputs = process.argv;

// let latinIt = function(inputs) {
//   let newArr = [];
//   newArr = inputs.slice(2);
//   for (let i = 0; i < newArr.length; i++) {

//     for (let j = 0; j < newArr[j].length; j++) {
//       let firstWord = [];
//       firstWord = newArr[j];
//       let firstChar = [];
//       firstChar = firstWord[0];
//       let unshiftedWord = [];
//       //unshiftedWord = firstWord.unshift([0]);
//       let newWord = unshiftedWord.push(firstChar) + "ay";
//       console.log(firstWord[0]);

//     } 

//   }
// };
// latinIt([0,1,"hello","world"]);

let piggy = function(words) {
  let latinWords = [];
  let array = words.split(' ');
  for (let word of array) {
    latinwords = word[0].slice().pop;
    
  }
  return latinWords.slice();
}

console.log(piggy("Hello"));