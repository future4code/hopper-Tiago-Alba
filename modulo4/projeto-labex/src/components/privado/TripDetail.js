import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { fetchTrips } from "../importTrips";
import {getToken} from "../publico/Login"

const ContainerDatail = styled.div`

`

export default function TripDetail(props) {

    const [tripsWithDetail, setTripsWithDetail] = useState()
    

    useEffect(() => {
        fetchTripDetail(props.id).then((res)=>{
            setTripsWithDetail(res.data.trip)
        })
       

    
    }, [])

    const fetchTripDetail = (id) => 
        
        
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tiago-Alba-Moreno/trip/${id}`, {
            headers: {
                auth: getToken()
            }
        })
    
        

        

    return (
        <ContainerDatail>
           {tripsWithDetail ? tripsWithDetail.name: "carregando..." }
        </ContainerDatail>
    )
}