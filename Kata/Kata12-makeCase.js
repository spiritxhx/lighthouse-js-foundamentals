const makeCase = (input, condition) => {
  //make the input an array
  inputArr = input.split('');
  let ans = "";
  if (condition.indexOf("camel") !== -1) {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === ' ') {
        inputArr[i] = '';
        inputArr[i + 1] = inputArr[i + 1].toUpperCase();
      }
    }
    ans = inputArr.join('');
  }

  if (condition.indexOf("pascal") !== -1) {
    inputArr[0] = inputArr[0].toUpperCase();
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === ' ') {
        inputArr[i] = '';
        inputArr[i + 1] = inputArr[i + 1].toUpperCase();
      }
    }
    ans = inputArr.join('');
  }

  if (condition.indexOf("snake") !== -1) {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === ' ') {
        inputArr[i] = '_';
      }
    } "camel"
    ans = inputArr.join('');
  }

  if (condition.indexOf("kebab") !== -1) {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === ' ') {
        inputArr[i] = '-';
      }
    }
    ans = inputArr.join('');
  }

  if (condition.indexOf("title") !== -1) {
    inputArr[0] = inputArr[0].toUpperCase();
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === ' ') {
        inputArr[i + 1] = inputArr[i + 1].toUpperCase();
      }
    }
    ans = inputArr.join('');
  }

  if (condition.indexOf("vowel") !== -1) {
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === 'a' || inputArr[i] === 'e' || inputArr[i] === 'i' || inputArr[i] === 'o' || inputArr[i] === 'u') {
        inputArr[i] = inputArr[i].toUpperCase();
      }
    }
    ans = inputArr.join('');
  }

  if (condition.indexOf("consonant") !== -1) {
    for (let i = 0; i < inputArr.length; i++) {
      if (!(inputArr[i] === 'a' || inputArr[i] === 'e' || inputArr[i] === 'i' || inputArr[i] === 'o' || inputArr[i] === 'u')) {
        inputArr[i] = inputArr[i].toUpperCase();
      }
    }
    ans = inputArr.join('');
  }

  if (condition.indexOf("upper") !== -1) {
    for (let i = 0; i < inputArr.length; i++) {
      inputArr[i] = inputArr[i].toUpperCase();
    }
    ans = inputArr.join('');
  }

  return ans;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "kebab"]));