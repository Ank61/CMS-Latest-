import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/UserComponents/home";
import Login from "./Components/AdminComponents/Authentication/login";
import AboutUs from "./Components/UserComponents/aboutUs";
import Dashboard from "./Components/AdminComponents/Pages/Dashboard/dashboard";
import AdminAboutUs from "./Components/AdminComponents/Pages/AboutUs/aboutUs";
import AboutUsDynamic from "./Components/AdminComponents/Pages/AboutUs/aboutUsModule";
import Header from "./Components/AdminComponents/Pages/Header/header";
import AboutUsPreview from "./Components/AdminComponents/Pages/AboutUs/Preview/preview";
import './App.css';
import NoPage from "./Components/UserComponents/noPage";
import {useEffect, useState} from "react";
import axios from "./Components/Common/SecureInstance/axiosInstance";
import networkConstant from "./Components/Common/API/uri_constant";
import EmptyPages from "./Components/AdminComponents/Pages/DynamicPages/EmptyPages";
import EmptyEdit from "./Components/AdminComponents/Pages/DynamicPages/EmptyEditor";
import UserPage from "./Components/UserComponents/DynamicUserPages/userPage";

function App() {
  const [allRoutes , setAllRoutes] =useState([])
  useEffect(()=>{
  axios.get(`${networkConstant.URL.dashboard}`).then(response=>{
  setAllRoutes(response.data)}
  ).catch(err=>console.log(err))
  },[])
  return (
    <div>
      <Router>
        <Routes>
          {/* Routes for the USER */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/adminLogin" element={<Login/>}></Route>
          {/* Routes for the ADMIN*/}
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admin/aboutus" element={<AdminAboutUs/>}></Route>
          <Route path="/admin/header" element={<Header/>}></Route>
          <Route path= {`/admin/aboutus/:id`} element={<AboutUsDynamic/>}></Route>
          <Route path= {`/aboutus/preview`} element={<AboutUsPreview/>}></Route>
          {/* Dynamic route for ADMIN*/}
          {allRoutes? allRoutes.map((item:any ,index : number)=> <Route path= {`/admin${item.path}/:id`} key={index} element={<EmptyEdit path={`${item.path}`} name={`${item.name}`}/>}></Route>):""} 
          {allRoutes? allRoutes.map((item:any,index : number)=><Route path= {`/admin${item.path}`} key={index} element={<EmptyPages path={`${item.name}`} pathName={`${item.path}`}/>}></Route>):""}
          {/*Dynamic route for USER*/}
          {allRoutes ? allRoutes.map((item : any,index : number)=><Route path= {`${item.path}`} key={index} element={<UserPage path={`${item.path}`} name={`${item.name}`}/>}></Route>):""}
          {/*Route for Preview*/}
          {/*Restricted Route*/}
          {/* <Route path="/admin/home" element={<Portal admin={authenticate}/>}></Route> */}
          <Route path = "*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;