import React from "react";
import { Link } from "react-router-dom";

const Index = () => {

    return (
        <>
            <a>ALL BOOKS</a>
            <Link to={'/books/1'}>Book1</Link>
            <Link to={'/books/2'}>Book2</Link>
            <Link to={'/books/3'}>Book3</Link>
        </>

    )
}

export default Index