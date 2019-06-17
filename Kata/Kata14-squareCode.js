const squareCode = message => {
  // remove all the spaces in the message
  message = message.replace(/ /g, '');
  let colNum = Math.ceil(Math.sqrt(message.length));
  let rowNum = Math.ceil(message.length / colNum);
  //initial message array
  let initArr = [];
  for (let i = 0; i < rowNum; i++) {
    initArr[i] = [];
    for (let j = 0; j < colNum; j++) {
      initArr[i][j] = message[i * colNum + j];
      if ((i * colNum + j) === (message.length - 1)) {
        break;
      }
    }
  }

  //transpose message array
  let ansArr = [];
  for (let i = 0; i < colNum; i++) {
    ansArr[i] = [];
    for (let j = 0; j < rowNum; j++) {
      // if (initArr[j][i]) {
      //   ansArr[i].push(initArr[j][i])
      // }

      if (initArr[j][i]) {
        ansArr[i][j] = initArr[j][i];
      }
    }
    ansArr[i]=ansArr[i].join('');
  }

  return ansArr.join(' ');
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));