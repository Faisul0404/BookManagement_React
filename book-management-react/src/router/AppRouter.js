import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import AddBook from '../components/AddBook';
import "bootstrap/dist/css/bootstrap.min.css";
import BookCard from '../components/BookCard';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
            <Header />
            
            <Routes>
            <Route Component={BooksList} path="/" exact={true} />
                <Route Component={BooksList} path="/books" exact={true} />
                <Route Component={AddBook} path="/add" />
                <Route Component={BookCard} path="books/:id" />
            </Routes>
                
            
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;