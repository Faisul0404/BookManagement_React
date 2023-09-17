import React, { useState } from 'react';
import BookFrom from '../components/BookForm';
import bookServices from "../services/bookServices";

function AddBook() {

  const [successMessage, setSuccessMessage] = useState('');

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
    <React.Fragment>
      <BookFrom handleOnSubmit={handleOnSubmit} successMessage={successMessage} />
    </React.Fragment>
  )
};

export default AddBook;