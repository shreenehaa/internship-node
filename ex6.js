const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// var ans = books.filter((book) => book.rating >= 4.7);
// console.log(ans.map((book) => book.title));

var ans = books.filter((book) => book.rating >= 5).map((book) => book.title);
// console.log(ans.map((book) => book.title));
console.log(ans);
