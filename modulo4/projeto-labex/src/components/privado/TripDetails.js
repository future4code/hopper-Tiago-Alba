import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { fetchTrips } from "../importTrips";
import {getToken} from "../publico/Login"
import TripDatail from "../privado/TripDetail"
const ContainerDatail = styled.div`

`

export default function TripDetails() {

    
    const [trips, setTrips] = useState([])

    useEffect(() => {
        
        fetchTrips().then((tripsResponse) => {
            setTrips(tripsResponse.data.trips)
           
       
            
            
        })
       

    
    }, [])

    

    return (
        <ContainerDatail>
            <h1>Viagens</h1>
            {trips.map((trip) => {
                return (
                    <TripDatail id={trip.id} />
                )

            })}
        </ContainerDatail>
    )
}