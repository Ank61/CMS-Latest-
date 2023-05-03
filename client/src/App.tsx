import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/UserComponents/home";
import Login from "./Components/AdminComponents/Authentication/login";
import AboutUs from "./Components/UserComponents/aboutUs";
import Dashboard from "./Components/AdminComponents/Pages/dashboard";
import AdminAboutUs from "./Components/AdminComponents/Pages/AboutUs/aboutUs";
import AboutUsDynamic from "./Components/AdminComponents/Pages/AboutUs/aboutUsModule";
import Header from "./Components/AdminComponents/Pages/Header/header";
import AboutUsPreview from "./Components/AdminComponents/Pages/AboutUs/Preview/preview";
import './App.css';
import NoPage from "./Components/UserComponents/noPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/admin" element={<Login />}></Route>
          {/* <Route path="/admin/home" element={<Portal/>}></Route> */}
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admin/aboutus" element={<AdminAboutUs/>}></Route>
          <Route path="/admin/header" element={<Header/>}></Route>
          <Route path= {`/admin/aboutus/:id`} element={<AboutUsDynamic/>}></Route>
          <Route path= {`/aboutus/preview`} element={<AboutUsPreview/>}></Route>
          {/*Restricted Route*/}
          {/* <Route path="/admin/home" element={<Portal admin={authenticate}/>}></Route> */}
          <Route path = "*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;