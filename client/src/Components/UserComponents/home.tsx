import { useEffect } from "react";
import axios from "../Common/SecureInstance/axiosInstance";
import "./CSS/home.css"
import { useNavigate } from "react-router";

function AboutUs(){
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("")
        .then(response=>{})
        .catch(err=>console.log(err))
    }
    ,[])

    const handleAdmin =()=>{
        navigate("/admin/dashboard")
    }
    return (
        <div className="wrapperr">
        <div className="columnswise">
         <h4>Site under construction</h4>
         <h6>Talentelgia Technologies</h6>
         <div style={{display:'flex' ,textAlign:'center' , justifyContent : 'center'}}>
         <button className="adminButton" onClick={handleAdmin}>Admin Login</button>
         </div>
        </div>
        </div>
   
    )
    }
    export default AboutUs;