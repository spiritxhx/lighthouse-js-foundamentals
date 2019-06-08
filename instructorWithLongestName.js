const instructorWithLongestName = instructors => {
  let ans=0;
  for (let i=0; i<instructors.length; i++){
    if (instructors[i].name.length>instructors[ans].name.length){
      ans=i;
    }
  }
return instructors[ans];
}

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));