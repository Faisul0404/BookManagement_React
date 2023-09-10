module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    // Create new book
    router.post("/", books.create);
};