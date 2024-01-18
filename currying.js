// with out curring

var add = (a, b, c) => a + b + c;

console.log(add(1, 2, 3));

// with curring
function addcurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addcurry(1)(2)(3));

var addcurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// console.log(addcurry(1)(2)(3));

var a1 = addcurry(1);
var a2 = a1(2);
var a3 = a2(3);

console.log(a3);
