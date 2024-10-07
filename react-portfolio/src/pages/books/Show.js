import React from "react";
import { useParams } from "react-router-dom";

const Show = () => {
    let { id } = useParams()

    return (
        <a>showing BOOK with id: {id}</a>
    )
}

export default Show