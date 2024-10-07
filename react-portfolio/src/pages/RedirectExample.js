import React from "react";
import { useNavigate } from "react-router";

const RedirectExample = () => {

    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <a>redirect to homepage: </a>
            <button onClick={handleClick}>Press Me</button>
        </>
    )
}

export default RedirectExample