const titleCase = (sentence) => {
  sentence = sentence.toLowerCase().split(' ');
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
}
console.log(titleCase("hello out there"));
