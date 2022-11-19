function sumToOne (n) {
  if (n === 1) {
    return 1;
  }

}


function sumToOne(n) {
  if (n === 1) {
    return 1;
  }
// this function gets the number (n) add itself to (itself -1), and then changes the parameter to be 1 less 
//  than the original and do it again. basically counting down until the base case (1) is met.
  return n + sumToOne(n - 1); 
}
//The same as 4+3+2+1
console.log(sumToOne(4));
//Equals 10