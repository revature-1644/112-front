import React from "react";
import { Flight } from "../models/Flight";
interface propsInterface{
    flight:Flight
}
export function FlightInfoCard(props:propsInterface){
    return (<>
    <h3>{props.flight.flightId}</h3>
    <p>{props.flight.departureCity}</p>
    <p>{props.flight.arrivalCity}</p>
    </>);
}