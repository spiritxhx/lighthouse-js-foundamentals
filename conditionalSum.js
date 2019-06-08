const conditionalSum = (values, condition) => {
  sum=0;
  if (condition === 'odd') {
    for (let i = 0; i < values.length; i++){
      if (values[i]%2===1){
        sum=sum+values[i];
      }
    }
  }
  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sum = sum + values[i];
      }
    }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));