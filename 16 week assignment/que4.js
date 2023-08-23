// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Write a program that takes a list of books, including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

const createBook = (bookName, bookAuthor, bookPubYear) => {
  return {
    title: bookName,
    author: bookAuthor,
    publicationYear: bookPubYear,
  };
};

const bookList = [
  createBook('To Kill a Mockingbird', 'Harper lee', 1960),
  createBook('The Great Gatsby', 'F. Scott Fitzgerald', 2015),
  createBook('Pride and Prejudice', 'Jane Austen', 1813),
  createBook('The Hunger Games', 'Suzanne Collins', 2012),
  createBook('The Lord of the Rings', 'J.R.R. Tolkien', 1954),
];

// main operation function
const bookAfterYear = (list, year) => {
  const filteredBooks = list.filter((book) => {
    return book.publicationYear >= year;
  });

  filteredBooks.map((book) => {
    book.author = book.author.toUpperCase();
  });

  return filteredBooks;
};

// test-case
console.log(bookAfterYear(bookList, 2010));
