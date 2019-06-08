const sumLargestNumbers = data => {
  let len = data.length;
  data.sort((a,b)=>{return a-b});
  if (len<2){
    return "invalid data";
  } else {
    let ans1 = data[len-2];
    let ans2 = data[len-1];
    return ans1+ans2;
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));