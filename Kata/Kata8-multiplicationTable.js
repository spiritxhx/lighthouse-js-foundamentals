const multiplicationTable = maxValue => {
  let i
    , j
    , ans=[];
  for ( i = 0; i< maxValue; i++){
    ans[i]=[];
    for ( j= 0; j< maxValue; j++){
      ans[i][j] = (i+1)*(j+1);
    }
  }
  return ans.join(', \n');
}


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));