const urlEncode = text => {
  let urlarr = text.split('');
  let isFirst=0;
  for (let i = 0; i < urlarr.length; i++){
    if (urlarr[i]!==" "){
      isFirst = i;
      break;
    }
    
  }
  let j=0;
  let ansarr=[];
  do{
    if (urlarr[j+isFirst]!==" "){
      ansarr[j] = urlarr[j + isFirst];
    } else {
      ansarr[j] = "%20";
    }
    j++;
  }while (!((j+isFirst>urlarr.length-1)||(urlarr[j+isFirst]===" "&&urlarr[j+isFirst+1]===" ")));
  let ans =ansarr.join('');
  return ans;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("     Lighthouse Labs   "));
console.log(urlEncode("    blue is greener than purple for sure               "));