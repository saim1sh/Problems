interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(books: Book): Book {
  console.log(
    `Title: ${books.title}, Author: ${books.author}, Published: ${
      books.publishedYear
    }, Available: ${books.isAvailable ? "Yes" : "No"}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
