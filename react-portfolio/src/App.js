import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import RedirectExample from "./pages/RedirectExample";

import Navbar from "./components/Navbar";

import BooksIndex from "./pages/books/Index";
import BooksShow from  "./pages/books/Show";

const App = () => {

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* navbar routes */}
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/about'
                    element={<About />}
                />
                <Route
                    path='/contact'
                    element={<Contact />}
                />

                {/* non navbar routes */}
                <Route
                    path='/redirect-example'
                    element={<RedirectExample />}
                />

                {/* 404 route */}
                <Route
                    path='*'
                    element ={<PageNotFound/>}
                />

                {/* books */}
                <Route
                    path='/books'
                    element = {<BooksIndex/>}
                />
                <Route
                    path='/books/:id'
                    element = {<BooksShow/>}
                />
            </Routes>
        </Router>
    )

}

export default App;

