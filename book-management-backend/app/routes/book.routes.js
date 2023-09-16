module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    // Create new book
    router.post("/create", books.create);

     // Retrieve all books
     router.get("/getAll", books.findAll);
  
     // Retrieve all author
     router.get("/author", books.findAuthor);
   
     // Retrieve a single book with id
     router.get("/book/:id", books.findOne);
   
     // Update a book with id
     router.put("/update/:id", books.update);
   
     // Delete a book with id
     router.delete("/delete/:id", books.delete);
   
     // Delete all books
     router.delete("/deleteAll", books.deleteAll);

    app.use('/api/books', router);
};