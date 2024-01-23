const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];
// var temp = requiredSkills.every((skill) => skill);
// console.log(temp);

var ans = players
  .filter((person) =>
    requiredSkills.every((skill) => person.skills.includes(skill))
  )
  .map((p) => p.name)
  .join(" ,");
console.log(ans);
