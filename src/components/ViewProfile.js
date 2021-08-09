import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";

function ViewProfile() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.email);


    }, [])
    return (
        <div className="viewProfile">
            hi
        </div>
    )
}

export default ViewProfile
