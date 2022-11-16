const input = process.argv.splice(2);

console.log(input);

const obfuscate = function(input) {
  newPassword = '';
  newPassword = input.toString().replace(/a/g, '4').replace(/e/g,'3').replace(/o/g,'0').replace(/l/g,'1')
  return newPassword;
}
console.log(obfuscate(input))
