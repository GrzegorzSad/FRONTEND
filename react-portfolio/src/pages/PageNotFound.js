import React from "react";
import { useLocation } from 'react-router-dom';

const PageNotFound = () => {
    let location = useLocation()

    return (
        <a> 404 - Page "{location.pathname}" was not found.</a>
    )
}

export default PageNotFound