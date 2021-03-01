// BEFORE REFACTOR



// const Book = function (author, title, genre) {
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };

// module.exports = Book;






// AFTER REFACTOR

class Book {
  constructor(author, title, genre)
    {this.author = author;
    this.title = title;
    this.genre = genre;}
};

export default Book;
