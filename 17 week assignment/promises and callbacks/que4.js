// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

// main function
const showBookTitles = (booksObj, callback) => {
  let booksTitles = [];

  booksObj.map((book) => {
    booksTitles.push(book.title);
  });

  return callback(booksTitles);
};

// callback function
const logBooksTitle = (titlesArr) => {
  console.log(titlesArr.sort());
};

// test-case
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
  },
];

showBookTitles(books, logBooksTitle);
