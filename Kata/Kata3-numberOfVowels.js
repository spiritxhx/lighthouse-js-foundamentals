const numberOfVowels = data => {
  let chara=data.split('');
  let ans=0;
  for (let i = 0; i < chara.length; i++){
    if (chara[i] === 'a' || chara[i] === 'e' || chara[i] === 'i' || chara[i] === 'o' || chara[i] === 'u'){
      ans++;
    }
  }
  return ans;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));