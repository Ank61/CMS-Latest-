import { useEffect } from "react";
import axios from "../Common/SecureInstance/axiosInstance";
import "./home.css"

function AboutUs(){
    useEffect(()=>{
        axios.get("")
        .then(response=>{})
        .catch(err=>console.log(err))
    }
    ,[])

    return (
        <div className="wrapperr">
        <div className="columnswise">
         <h4>Site under construction</h4>
         <h6>Talentelgia Technologies</h6>
        </div>
        </div>
    )
    }
    export default AboutUs;