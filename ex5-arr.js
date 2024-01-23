const avengers = [
  "Hulk",
  "Iron man",
  "Black widow",
  "Captain america",
  "Spider man",
  "Thor",
  //   "" empty string nothing will be printed
  //  null-cannot read the properties of null
  //
];

const ans = avengers.filter((n) => n.length > 10);
console.log(ans);
