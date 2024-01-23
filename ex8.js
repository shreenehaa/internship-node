const employes = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]
var arr2;
var status;
var ans = employes
  .filter((emp) => emp.grade > 80)
  .map((p) => ({ id: p.id, status: "promoted" }));
// console.log(ans);

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];
var temp = [1, 45, 23, 4];
var temp1 = temp.sort();

var order = students.toSorted((a, b) => b.score - a.score);
console.log(order);
var names = order
  .map((n) => n.name)
  .slice(0, 3)
  .join(", ");
console.log(names);
