const nums = [2, 4, 6];
const output = nums.map((n) => n * 2);
console.log(output);
console.log(nums);
//inline function
const avengers = ["hulk", "black widow", "thor", "Iron man"];
const ans = avengers.map((n) => n.length);
console.log(ans);

// to make resusable use function seperately
const getLength = (n) => n.length;
const avengers1 = ["hulk", "black widow", "thor"];
const ans1 = avengers.map(getLength);
console.log(ans);

// normal function
function getLength(name) {
  return name.length;
}

var getLength = function (name) {
  return name.length;
};

// reduce function is called as fold in other prog lang

[1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0);
// acc -->accumulator,cur-current value ,0->accu initial value
