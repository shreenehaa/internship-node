const movieURL = (domain, genre, year) => {
  return "http://" + domain + "?genere=" + genre + "&year=" + year;
};
console.log(movieURL("imdb.com", "thiller", 2020));

const movieURL1 = (domain, genre, year) => {
  return `http://${domain}?genere=${genre}&year=${year}`;
};
console.log(movieURL1("imdb.com", "thiller", 2020));

const movieURL2 = (domain, genre, year) =>
  `http://${domain}?genere=${genre}&year=${year}`;
console.log(movieURL2("imdb.com", "thiller", 2020));
// spread operator
let t1 = [100, 200];
let t2 = [50, ...t1, 60];
let t3 = [...t1];
// it copies only the values
console.log(t1 == t3);
console.log(t2);

// rest operator
nums = [100, 200, 300];
const [z1, ...z2] = nums;
console.log(z1, z2);

// object destructuring

// const
const student = {
  name1: "Shree",
  dept: "IT",
  branch: "B.tech",
};
const { name1, dept, branch } = student;
console.log(name1, branch);
// const { name, power } = {
//   name: "tony",
//   power: 100,
// };
// console.log(power);
