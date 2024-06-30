import React from 'react'
import {  Navigate } from 'react-router-dom';



const PrivateRoute = (props) => {
    

    let isLoggedIn=props.isLoggedIn;



    if(isLoggedIn){

        return props.children;
    }

    else{
            return <Navigate to="/login"/>
    }
}

export default PrivateRoute;