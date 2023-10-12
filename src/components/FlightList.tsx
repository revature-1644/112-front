import React, { useEffect, useState } from "react";
import { getFlightsAPI } from "../services/FlightService";
import { FlightInfoCard } from "./FlightInfoCard";
import { Flight } from "../models/Flight";
export function FlightList (){
    const [flightArray, setFlightArray] = useState<Flight[]>([]);
    useEffect(() => {
        getFlightsAPI()
        .then(response => {return response.json()})
        .then(json => {setFlightArray(json); console.log(json)});
        console.log("running useeffect");
    }, [])
    return (
        <>
            {flightArray.map(flight=><>
            <h1>test flight: {flight.flightId}</h1>
            <FlightInfoCard flight={flight}></FlightInfoCard>
            </>)}
        </>
    )
}