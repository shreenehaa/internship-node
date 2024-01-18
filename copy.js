// spread operator
// it copies only the values so t1 != t3
let t1 = [100, 200];
let t2 = [50, ...t1, 60];
let t3 = [...t1];
console.log(t1 == t3);
console.log(t2);
// concat
let t4 = t1.concat([40]);

console.log(t4);
let t5 = t1.concat([]);
console.log(t5);
var y = console.log("hi");
console.log(y);
let t6 = [10, 20, 30, 40];
var x = t6.indexOf(50);
const fun = (t6, x) => {
  var ans = x != -1 ? true : false;
  return ans;
};
var a = fun(t6, x);
if (a == true) {
  console.log(x);
} else {
  console.log("not present");
}

function sayHello() {
  return function () {
    console.log("hello");
  };
}
