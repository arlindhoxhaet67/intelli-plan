/* 
   Filename: SophisticatedCode.js
   Description: This code exemplifies a complex and elaborate JavaScript implementation of a library management system. It includes data structures, classes, and functions to manage books, users, and transactions.
   Note: This is a simplified example for demonstration purposes.
*/

// Class representing a Book
class Book {
  constructor(id, title, author, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = true;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
      console.log(`Book "${this.title}" has been borrowed.`);
    } else {
      console.log(`Book "${this.title}" is not available.`);
    }
  }

  returnBook() {
    if (!this.available) {
      this.available = true;
      console.log(`Book "${this.title}" has been returned.`);
    } else {
      console.log(`Book "${this.title}" was already available.`);
    }
  }
}

// Class representing a User
class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(library, bookId) {
    const book = library.getBookById(bookId);
    if (book) {
      book.borrowBook();
      this.borrowedBooks.push(book);
      console.log(`User "${this.name}" borrowed book "${book.title}".`);
    } else {
      console.log(`Book with ID ${bookId} not found.`);
    }
  }

  returnBooks(library) {
    for (const book of this.borrowedBooks) {
      book.returnBook();
    }
    this.borrowedBooks = [];
    console.log(`All books returned by user "${this.name}".`);
  }
}

// Class representing a Library
class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" with ID ${book.id} added to the library.`);
  }

  addUser(user) {
    this.users.push(user);
    console.log(`User "${user.name}" with ID ${user.id} added to the library.`);
  }

  getBookById(id) {
    for (const book of this.books) {
      if (book.id === id) {
        return book;
      }
    }
    return null;
  }

  getUserById(id) {
    for (const user of this.users) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  }
}

// Create library instance
const library = new Library();

// Create books
const book1 = new Book(1, "Harry Potter and the Philosopher's Stone", "J.K. Rowling", "Fantasy");
const book2 = new Book(2, "The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
const book3 = new Book(3, "To Kill a Mockingbird", "Harper Lee", "Classics");

// Create users
const user1 = new User(1, "John");
const user2 = new User(2, "Emily");

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Add users to the library
library.addUser(user1);
library.addUser(user2);

// User borrows books
user1.borrowBook(library, 1);
user2.borrowBook(library, 2);

// User returns books
user1.returnBooks(library);
user2.returnBooks(library);

// Output book availability
console.log(`Book "${book1.title}" available: ${book1.available}`);
console.log(`Book "${book2.title}" available: ${book2.available}`);
console.log(`Book "${book3.title}" available: ${book3.available}`);

// Output all books in the library
console.log("All books in the library:");
for (const book of library.books) {
  console.log(`ID: ${book.id}, Title: ${book.title}, Genre: ${book.genre}`);
}