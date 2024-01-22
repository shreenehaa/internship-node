const marks = [80, 68, 90, 40, 30, 50];

var ans = marks.every((p) => p >= 40);
// ans ? console.log("All pass") : console.log("fail");

const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

// Task 1: Determine if all books in the library have been borrowed.

console.log(library.every((p) => p.borrowed));

// Task 2: Determine if there are books in the library written by multiple authors

console.log(library.some((p) => p.authors.length > 1));
