const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Create and Save New Book
exports.create = (req, res) => {

    // Create a Book
    const book = {
        bookname: req.body.bookname,
        author: req.body.author,
        price: req.body.price,
        quantity: req.body.quantity
    };

    // Save Book in the database
    Book.create(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "some error occurred while creating the New Book."
            });
        });
    
};
