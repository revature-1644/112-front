import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
        <Link to="/AddFlight">add a flight</Link>
        <Link to="/AllFlights">see all flights</Link>
        </>

    )
}