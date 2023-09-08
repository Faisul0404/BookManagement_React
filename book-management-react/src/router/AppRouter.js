import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import AddBook from '../components/AddBook';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
            <Header />
            
            <Routes>
                <Route Component={BooksList} path="/" exact={true} />
                <Route Component={AddBook} path="/add" />
            </Routes>
                
            
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;