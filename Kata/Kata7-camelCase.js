const camelCase = input => {
  inputArr = input.split('');
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === ' ') {
      inputArr[i] = '';
      inputArr[i + 1] = inputArr[i + 1].toUpperCase();
    }
  }
  let ans = inputArr.join('').trim(' ');
  return ans;
}
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));