let prompt = require("prompt-sync")();
let randomNum = Math.floor(Math.random() * 100);

// code below (replace this example)
let i = 0;
let ansArr = [];
let answer = -1;
do {
  answer = prompt("Guess a number: ");
  if (isNaN(answer)) {
    i++;
    console.log('Not a number!');
  } else
    if (ansArr.includes(answer)) {
      i++;
      console.log('Already Guessed');
      // console.log(ansArr);
    } else {
      if (answer > randomNum) {
        i++;
        console.log('Too High!');
        ansArr.push(answer);
      }
      if (answer < randomNum) {
        i++;
        console.log('Too Low!');
        ansArr.push(answer);
      }
    }
  if (answer == randomNum) {
    i++;
    console.log(`You got it! You took ${i} attempts!`);
  }
} while (answer != randomNum)

// console.log(`You got it! You took ${i} attempts!`);


