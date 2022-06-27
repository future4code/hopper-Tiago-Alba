import React, {useEffect}  from "react";
import {useNavigate} from "react-router-dom";

export function UserProtector(){
    const navigate = useNavigate()
    useEffect(()=>{
    let token = localStorage.getItem("token")
    
        if(token === ""){
             navigate("/");
         }else if (token === null){
            navigate("/")
         }
         
      
        
    },[navigate])
}