const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Create and Save New Book
exports.create = (req, res) => {

    const { bookname, author, price, quantity } = req.body;

    // Validate request
    if (!bookname || !author || !price || !quantity) {
        res.status(400).send({
          message: "All fields must be filled out."
        });
        return;
      }

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

// Retrieve all books from the database.
exports.findAll = (req, res) => {
    const bookname = req.query.bookname;
    var condition = bookname ? { bookname: { [Op.like]: `%${bookname}%` } } : null;
  
    Book.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Books."
        });
      });
  };

  // Find a author books
  exports.findAuthor = (req, res) => {
    Book.findAll({ where: { author: "xyz2" } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Books."
        });
      });
  };


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Book.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Book with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Book with id=" + id
        });
      });
  };


  // Update a Book by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Book.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
        //   res.send({
        //     message: "Book was updated successfully.",
        //     updatedBook: req.body
            
        //   });
          return Book.findByPk(id);
        
        } else {
          res.send({
            message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`
          });
        }
      })
      .then(updatedBook => {
        res.send({
          message: "Book was updated successfully.",
          updatedBoo: updatedBook // Send the updated book data
        });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Book with id=" + id
        });
      });
  };

  // Delete a Book with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Book.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Book was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Book with id=" + id
        });
      });
  };

  // Delete all Tutorials from the database.
  exports.deleteAll = (req, res) => {
    Book.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Books were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Books."
        });
      });
  };
