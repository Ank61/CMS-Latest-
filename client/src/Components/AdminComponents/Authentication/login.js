import React, { useEffect, useState } from "react";
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import networkConstant from "../../Common/API/uri_constant";
import { Oval } from 'react-loader-spinner';
const emailRegex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/
const passRegex = /^[a-zA-Z]+$/ 
const emailErrorStyle ={
    border : '1px solid #ff5e5e'
}
const emailNormal = {
    border : '2px solid white'
}
const TOAST_LIMIT = 1;
function Login() {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [isChecked,setIsChecked] = useState(false)
    const { toasts } = useToasterStore();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem("Login")) {
            navigate("/admin/dashboard")
        }
        else if(window.localStorage.getItem("username") && window.localStorage.getItem("password") ){
            setLoginData({email :window.localStorage.getItem("username") , password : window.localStorage.getItem("password") })
        }
    }, [])

    useEffect(() => {
        toasts
            .filter((t) => t.visible)
            .filter((_, i) => i >= TOAST_LIMIT)
            .forEach((t) => toast.dismiss(t.id));
    }, [toasts]);

    async function handleSubmit(e) {
        e.preventDefault()
        const {email,password} = loginData
        if(emailError && email.length>0 && passwordError && password.length>0){
            console.log("Login")
            setLoading(true);
            await axios.post(`${networkConstant.URL.login}`, loginData).then((response) => {
                setLoading(false);
                if (response.data.Login) {
                    window.localStorage.setItem("Login", true)
                    toast.success('Login Successfull!');
                    if(isChecked){
                        window.localStorage.setItem("username",email)
                        window.localStorage.setItem("password",password)
                    }
                    setTimeout(() => {
                        navigate("/admin/dashboard")
                    }, 1500)
                }
                else {
                    toast.error('Login Failed');
                }
            }).catch(err => console.log("Error Occured while LogIn", err))
        }
        else{
            setEmailError(false)
            setPasswordError(false)
        }
    }
    function handleEmail(e) {
        const { value } = e.target;
        const check = emailRegex.test(value);
        console.log(check)
        setLoginData((prev) => ({
            ...prev,
            email: value
        }))
        if (!check) {
            setEmailError(false)
        }
        else{;
            setEmailError(true)
        }
    }

    function handlePassword(e) {
        const { value } = e.target
        setLoginData((prev) => ({ ...prev, password: value }))

        const check = passRegex.test(value)
        if (!check) {
            setPasswordError(false)
        }
        else{;
            setPasswordError(true)
        }
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSubmit(event)
        }
    }
    const handleRemember =(e)=>{
        setIsChecked(e.target.checked)
    }

    return (
        <div className={`auth-wrapper d-flex no-block justify-content-center align-items-center ${loading ? 'loading' : ''}`}>
            <Toaster />
            <div className="auth-box p-4 bg-white rounded" style={{border : '1px solid #2b2767'}}>
                <div id="loginform">
                    <div className="logo">
                        <h3 className="box-title mb-3" style={{color : '#2b2767'}}>Talentelgia Technology</h3>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form className="form-horizontal mt-3 form-material" id="loginform" onSubmit={(e) => handleSubmit(e)}>
                                <div className="form-group mb-2" style={{ width: 300 }}>
                                    <div className="LoginError">
                                        <input className="form-control no-border" type="text" placeholder="Enter email"  style={emailError ? {} : emailErrorStyle} value={loginData.email} onChange={(e) => handleEmail(e)} maxLength={35}/>
                                        <span style={{ height: 20, color: '#ff5e5e',fontSize:14}}> {!emailError ? "Enter valid email" : ""}</span>
                                    </div>
                                </div>
                                <div className="oval-wrapper" style={{ position: 'relative', left: '35%' }}>
                                    <Oval
                                        height={80}
                                        width={80}
                                        color="#0dcaf0"
                                        wrapperStyle={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            margin: 'auto',
                                            zIndex: 1,
                                        }}
                                        wrapperClass=""
                                        visible={loading}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#a5deff"
                                        strokeWidth={2}
                                        strokeWidthSecondary={2}

                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <div className="LoginError">
                                        <input className="form-control no-border" type="password" placeholder="Enter password"  style={passwordError ? {} : emailErrorStyle} value={loginData.password} onChange={(e) => handlePassword(e)} onKeyDown={handleKeyDown} maxLength={7}/>
                                        <span style={{ height: 20, color: '#ff5e5e',fontSize:14}}>{!passwordError ? "Enter letter only" : ""}</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="d-flex">
                                        <div className="checkbox checkbox-info pt-0">
                                            <input id="checkbox-signup" type="checkbox" onClick={handleRemember} className="material-inputs chk-col-indigo" />
                                            <label > &nbsp;Remember me </label>
                                        </div>
                                        {/* <div className="ms-auto">
                                            <p >&nbsp;Forgot password?</p>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="form-group text-center mt-4 mb-3">
                                    <div className="col-xs-12">
                                        <button className=" btn btn-info d-block w-100 waves-effect waves-light" type="submit">
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;