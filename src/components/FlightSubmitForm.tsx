import React, { SyntheticEvent, useState } from "react";
import { postFlightAPI } from "../services/FlightService";
export function FlightSubmitForm(){
    const [flightId, setFlightId] = useState(0);
    const [departureCity, setDepartureCity] = useState("");
    const [arrivalCity, setArrivalCity] = useState("");

    function updateFlightIdInput (event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setFlightId(parseInt(box.value));
    }
    function updateDepartureCityInput (event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setDepartureCity(box.value);
    }
    function updateArrivalCityInput (event:SyntheticEvent){
        let box = event.target as HTMLTextAreaElement;
        setArrivalCity(box.value);
    }

    function attemptSaveFlight(){
        let flight = {
            flightId,
            departureCity,
            arrivalCity
        }
        postFlightAPI(flight);
    }
    return (
        <>
            <h1>input flight id</h1>
            <input value={flightId} onChange = {updateFlightIdInput}></input>
            <h1>input departure city</h1>
            <input value = {departureCity} onChange = {updateDepartureCityInput}></input>
            <h1>input arrival city</h1>
            <input value = {arrivalCity} onChange={updateArrivalCityInput}></input>
            <button onClick={attemptSaveFlight}>submit</button>
        </>
    )
}