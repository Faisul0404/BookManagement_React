import React, { useState, useEffect } from "react";
import bookServices from "../services/bookServices";
import { Link , useNavigate} from "react-router-dom";

function BooksList() {
  const [Books, setBooks] = useState([]);
  const [currentBook, setcurrentBook] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchBookname, setSearchBookname] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    retrieveBooks();
  }, []);

  const setActiveBook = (book, index) => {
    setcurrentBook(book);
    setCurrentIndex(index);
  };

  const onChangeSearchBook = e => {
    const searchBookname = e.target.value;
    setSearchBookname(searchBookname);
  };

  const retrieveBooks = () => {
    bookServices.getAll()
      .then(response => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // const refreshList = () => {
  //   retrieveBooks();
  //   setcurrentBook(null);
  // };

  const removeAllBooks = () => {
    const confirmed = window.confirm('Are you sure you want to remove all books?');

    if (confirmed) {
      bookServices
      .removeAll()
      .then((response) => {
        console.log(response.data);
       
      navigate("/add");
      })
      .catch((e) => {
        console.log(e);
      });

    }
    
  };

  const findByTitle = () => {
    bookServices.findByBookname(searchBookname)
      .then(response => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">  
     <div className="col-md-6">
     <div lassName="col-md-8">
      <div className="input-group mb-3">
    <input class="form-control mr-sm-2" 
      type="text" 
      placeholder="Search by book name " 
      aria-label="Search" 
      value={searchBookname}
      onChange={onChangeSearchBook}
    />
   <div style={{paddingLeft: '10px',}}>
   <button class="btn btn-outline-success my-2 my-sm-0" 
    type="submit"
    onClick={findByTitle}
    >Search</button>
   </div>
    </div>
      </div>
        <h4> Books List</h4>

          <ul className="list-group list-group-flush">
            {Books &&
              Books.map((book, index) => (
                <li className={ "list-group-item " + (index === currentIndex ? "list-group-item active" : "list-group-item ")} 
                onClick={() => setActiveBook(book, index)} 
                key={index}
                >
                  {book.bookname}
                </li>
              ))}
          </ul>

          <div className="removeall">
          <button type="button" class="btn btn-danger" style={{paddingRight: '40px', paddingLeft: '40px'}} 
          onClick={removeAllBooks}
          >Remove All</button>
          </div>
     </div>
     <div className="col-md-6">
      {currentBook ? (
        <div>
          <h4>Book</h4>
          <div>
          <label><strong>BookName : </strong></label>
          {currentBook.bookname}
        </div>
        <div>
          <label><strong>Author : </strong></label>
          {currentBook.author}
        </div>
        <div>
          <label><strong>Price : </strong></label>
          {currentBook.price}
        </div>
        <div style={{paddingBottom: '10px'}}>
          <label><strong>Quantity : </strong></label>
          {currentBook.quantity}
        </div>

        <Link
              to={"/books/" + currentBook.id}
              className=" link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              style={{color: '#db3770', borderRadius: '10px', borderColor: '#000', borderWidth: '2px', padding: '10px', paddingLeft: '20px', paddingRight: '20px', backgroundColor: '#61f279'}}
            >
              Edit
            </Link>
        </div>

      ) : (
        <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
      )}
     </div>
    </div>
  );
}

export default BooksList;
