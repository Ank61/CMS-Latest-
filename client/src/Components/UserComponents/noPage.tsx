import "./CSS/noPage.css"
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import {useState, useEffect } from "react";

function NoPage() {
const [loading , setLoading] = useState<boolean>(true)
    useEffect(()=>{
       setTimeout(()=>{
        setLoading(false)
       },4000) 
    },[])
    return (
        <>
       {!loading ? <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Nothing was found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable. <Link to="/">Return to homepage</Link></p>
                <div className="notfound-social">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-google-plus"></i></a>
                </div>
            </div>
        </div>
        : ""}
        {loading ? <div style={{marginLeft : '47%',marginRight :'20%',marginTop:'20%', width :'50%'}}>
                                
                                        <Oval
                                        height={90}
                                        width={90}
                                        color="#0dcaf0"
                                        wrapperStyle={{ position: 'absolute'}}
                                        wrapperClass=""
                                        visible={loading}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#a5deff"
                                        strokeWidth={2}
                                        strokeWidthSecondary={2}
                                    />
                              
                                </div> : ""}
        </>
    )
}
export default NoPage;