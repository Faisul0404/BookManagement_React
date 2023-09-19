import React, { useState } from 'react';
import bookServices from "../services/bookServices";
import BookForm from '../components/BookForm';

function AddBook() {

  const [successMessage, setSuccessMessage] = useState('');
  const [addedBook, setAddedBook] = useState(null);

  const handleOnSubmit = (book) => {
    
    bookServices.create(book)
        .then(response => {
          // setBook({
          //   id: response.book.id,
          //   bookname: response.book.bookname,
          //   author: response.book.author,
          //   price: response.book.price,
          //   quantity: response.book.quantity
          // });
          console.log(response.book);
          // window.location.href = '/books';
          setAddedBook(book);
          setSuccessMessage('Book was added successfully.');
        })
        // .catch(e => {
        //   console.log(e);
        // });
        .catch(error => {
          console.error(error);
        });
  }

  return (
    <React.Fragment><div>
    <BookForm handleOnSubmit={handleOnSubmit} successMessage={successMessage} />
    {addedBook && (
      <div className="added-book">
        <h3>Added Book Details:</h3>
        <p>Title: {addedBook.bookname}</p>
        <p>Author: {addedBook.author}</p>
        <p>Price: {addedBook.price}</p>
        <p>Quantity: {addedBook.quantity}</p>
      </div>
    )}
  </div>
    </React.Fragment>
  )
};

export default AddBook;