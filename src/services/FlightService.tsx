import axios from "axios";
import { Flight } from "../models/Flight";

export function postFlightAPI(flight: Flight){
    return fetch("http://localhost:8080/flight", {
        mode:"cors",
        method:"POST",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST,OPTIONS",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            flightId:flight.flightId,
            departureCity:flight.departureCity,
            arrivalCity:flight.arrivalCity
        })
    })
}

export function getFlightsAPI():Promise<Response>{
    return fetch("http://localhost:8080/flight", {
        mode:"cors",
        method:"GET",
        headers:{
            "access-control-allow-origin":"*",
            "access-control-allow-headers":"*",
            "access-control-allow-method":"GET,POST,OPTIONS",
            "content-type":"application/json"
        }
    })
}