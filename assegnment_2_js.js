const event1Attendees = ["zalice", "bob", "charlie"];
const event2Attendees = ["bob", "dave", "eve"];
const event3Attendees = ["charlie", "frank", "eve"];

const getUnique = (event1Attendees, event2Attendees, event3Attendees) => {
  var merge = [...event1Attendees, ...event2Attendees, ...event3Attendees];
  // var names = [];
  // var ans = merge.filter((item) => {
  //   if (!names.includes(item)) {
  //     names.push(item);
  //   }
  // });
  // return names.toSorted();
  var uniqueGuest = new Set(merge);
  // for (var person of merge) {
  //   uniqueGuest.add(person);
  // }
  return [...uniqueGuest].toSorted();
};
console.log(getUnique(event1Attendees, event2Attendees, event3Attendees));

const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];

getBooks = (books) => {
  return books
    .filter((book) => book.year > 2000)
    .map((item) => `${item.title} by ${item.author}`);
};
console.log(getBooks(books));

const surveyResponses = [
  { topics: ["Environment", "Economy"], rating: 4 },
  { topics: ["Economy", "Health"], rating: 3 },
  { topics: ["Environment", "Politics"], rating: 5 }, // more responses...
];

const products = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
];

// var str = products.map((item) => {
//   item.stores.map((store)=>{
//   for (var a of item) {
//     a.inventory > 0 ? "yes" : "no";
//   }
// });
// console.log(str);

// var str = products.map((item) => {
//   for (var ans of item.stores) {
//     console.log(ans.inventory > 0 ? item.name : "no");
//   }
// });

// console.log(str);

var str = products
  .filter((item) => item.stores.every((store) => store.inventory > 0))
  .map((item) => item.name);

console.log(str);
