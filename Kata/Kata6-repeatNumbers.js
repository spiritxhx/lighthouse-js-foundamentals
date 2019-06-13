const repeatNumbers = data => {
  let ans=[];
  for (let i = 0; i< data.length; i++){
    let tempNumber = "";
    for (let j = 0; j< data[i][1]; j++){
      tempNumber = `${tempNumber}${data[i][0]}`
    }
    ans[i] = tempNumber;
  }
  return ans.join(', ');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));