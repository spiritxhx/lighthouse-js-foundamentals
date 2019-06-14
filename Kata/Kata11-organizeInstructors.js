const organizeInstructors = instructors => {
  let instructorByCourse = {};
  for (let i = 0; i < instructors.length; i++) {
    let courseKey = instructors[i].course;
    if (!instructorByCourse[courseKey]) {
      instructorByCourse[courseKey] = [];
    }
    instructorByCourse[courseKey].push(instructors[i].name);
  }
  return instructorByCourse;
}

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));