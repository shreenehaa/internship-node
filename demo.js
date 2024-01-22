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

// IIFE

(function (n) {
  console.log("helo");
  console.log(n * 10);
})(10);

((n) => {
  console.log("arrow");
  console.log(n * 10);
})(2);

// for

var salary = {
  john: 200,
  pete: 250,
  dev: 300,
};

for (var key in salary) {
  // console.log(key);
}

// for (var key in salary) {
//   console.log(Object.values(salary));
//   console.log(Object.keys(salary));
// }

// Array methods

// cart.reverse();

const person = {
  name: {
    fist: "shree",
    last: "nehaa",
  },
  age: 28,
  place: {
    city: "salem",
  },
};
// console.log(person.place.city); cannot read the prop of undefined
// defensive code
if (person.place && person.place.city) {
  console.log(person.place.city);
}

//optional chaining
console.log(person?.place?.city);
