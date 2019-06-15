const urlDecode = text => {
  let ele = text.split('&');
  let obj = {};
  for (let i= 0; i< ele.length; i++){
    let eleAttr = ele[i].split('=');
    //replace the '%20' to " "
    eleAttr[1] = eleAttr[1].replace(/%20/g, " ");
    obj[eleAttr[0]]=eleAttr[1];
  }

  return obj;
  
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);