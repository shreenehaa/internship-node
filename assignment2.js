const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
];
const getTransaction = (transactions) => {
  var ans = transactions
    .filter(
      (trans) =>
        trans.amount > 5000 &&
        trans.category == "Business" &&
        trans.date.slice(0, 4) == "2023"
    )
    .map(
      (trans) => `Trnasaction ${trans.id} : $${trans.amount} on ${trans.date}`
    );
  return ans;
};
// console.log(transactions.date.slice(0, 4));
console.log(getTransaction(transactions));

const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
];
// const getSalary = (departments) => {
//   var sal = 0;
//   return departments.map((dept) =>
//     dept.employees.map((salar) => (sal += salar.salary))
//   );
// };

const getSalary = departments.map((dept) => {
  var ans = dept.employees.reduce((acc, curr) => acc + curr.salary, 0);
  return `{${dept.name}, ${ans}}`;
});

console.log(getSalary);

const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
];
const temperatureSort = (weatherData) => {
  //   var temp = weatherData
  //     .toSorted((a, b) => b.temperature - a.temperature)
  //     .map((t) => `"${t.date}":${t.temperature}`);
  //   return Object.assign({}, temp);
  //   return temp;

  var temp1 = weatherData.toSorted((a, b) => b.temperature - a.temperature);

  var obj = {};
  for (var item of temp1) {
    obj[item.date] = item.temperature;
  }
  return obj;
  //   console.log();
};
console.log(temperatureSort(weatherData));

const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
];
const getAverage = (products) => {
  var prod = products.filter(
    (item) =>
      item.category == "Electronics" && item.reviews > 50 && item.rating >= 4.0
  );
  var len = prod.length;
  var a = 0;
  console.log(prod.map((item) => (a += item.price)) / len);
};

console.log(getAverage(products));

const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];
const getUser = (users, orders) => {
  var user_det = users
    .map((item) => ({
      ...orders.find((i) => i.userId === item.userId),
      ...item,
    }))
    .map((s) => ({ name: s.name, orderDetails: s.orderDetails }));
  return user_det;
  //   console.log(Object.assign(users, orders));
};

console.log(getUser(users, orders));
