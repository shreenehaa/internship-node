const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];

const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];
cart.concat(newItems);
console.log(cart);

// cart.push(newItems);
const car = cart.concat(newItems);
function calc(car) {
  var sum = 0;
  for (var { price, quantity } of car) {
    sum += price * quantity;
  }
  return sum;
}
var ans = calc(car);
console.log(ans);

// array functions
a = [1, 2, 3, 4, 5];
a.reverse();
console.log(cart);
a.includes("hi");
//  return boolean
console.log(cart);

a.join("-");
console.log(cart);
a.join();
// default seperator is comma
a.log(cart);

a.slice(1, 3);
// it gives 1 and 2

// everey is higher order function
