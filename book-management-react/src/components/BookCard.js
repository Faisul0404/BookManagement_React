import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bookServices from "../services/bookServices";

const BookCard = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [currentBook, setcurrentBook] = useState(null);
  const [message, setMessage] = useState("");

  const getTutorial = (id) => {
    bookServices
      .get(id)
      .then((response) => {
        setcurrentBook(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getTutorial(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setcurrentBook({ ...currentBook, [name]: value });
  };

  const deleteBook = () => {
    bookServices
      .remove(currentBook.id)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateBook = () => {
    bookServices
      .update(currentBook.id, currentBook)
      .then((response) => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBook ? (
        <div className="edit-form">
          <h4>Book Details</h4>
          <div className="formpadding">
            <form>
              <div className="form-group">
                <label htmlFor="bookname">Book Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="bookname"
                  name="bookname"
                  value={currentBook.bookname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={currentBook.author}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={currentBook.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={currentBook.quantity}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>

          <div>
            <button type="button" class="btn btn-danger" onClick={deleteBook}>
              Delete
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={updateBook}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default BookCard;
