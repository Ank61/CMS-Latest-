import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import "./layout.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PublishIcon from '@mui/icons-material/Publish';
import GetAppIcon from '@mui/icons-material/GetApp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router";
import axios from '../SecureInstance/axiosInstance';
import networkConstant from '../API/uri_constant';
interface MyComponentProps {
    name: String | undefined | null; // Specify the type of the data property
    data : number
    path : String
}

type title = {
    title : String //We have already header comoponent!
    moduleName : String
    pageData? : MyComponentProps[]  |undefined
    modalDelete?:boolean
    modal?:boolean
    editModal? : boolean
}
function Layout(props : title){
    const [allData,setAllData] = useState<MyComponentProps[]>([])
    useEffect(()=>{
        const login =window.localStorage.getItem("Login")
        if(!login){
            navigate("/admin")
        }
        else{
        axios.get(`${networkConstant.URL.dashboard}`).then(response => {
            setAllData(response.data)  
        }).catch(error => console.log(error))
    }
    },[props.modalDelete , props.modal])
    const navigate = useNavigate();
    const handleLogout =()=>{
        window.localStorage.removeItem("Login")
        navigate("/adminLogin")
    }
    return(
        <>
            <div className="sidebar">
                <h3 style={{marginLeft : 10}}>Talentelgia</h3>
                <div className="pages" >
                <ul >
                    <li style={{fontSize :14}} >
                        <NavLink  to="/admin/dashboard" ><DashboardIcon style={{fontSize:19}}/>&nbsp;    Dashboard</NavLink> 
                    </li>
                    {/* <li style={{fontSize :14}}>
                        <NavLink  to="/admin/header" ><PublishIcon style={{fontSize:22}}/>&nbsp;       Header</NavLink> 
                    </li> */}
                    {/* <li style={{fontSize :13}}>
                        <NavLink  to="/admin/footer" ><GetAppIcon/>&nbsp;    Footer</NavLink> 
                    </li> */}
                    {/* <li style={{fontSize :14}}>
                      <NavLink  to="/admin/aboutus" ><AssignmentIndIcon style={{fontSize:19}}/>&nbsp;    About Us</NavLink>
                    </li> */}
                    { allData? allData.map((item :any,index :number)=><li style={{fontSize : 14}} key={index}> <NavLink  to={`/admin${item.path}`} ><AssignmentIndIcon style={{fontSize:19}}/>&nbsp;    {item.name}</NavLink></li>) : ""}
                    {/* <li style={{fontSize :15}}>
                       <GroupAddIcon/>&nbsp;    Join Us
                    </li>
                    <li style={{fontSize :15}}>
                       <GroupsIcon/>&nbsp;    Our Team
                    </li>
                    <li style={{fontSize :15}}>
                    <SupportAgentIcon/>&nbsp;    Clients
                    </li>
                    <li style={{fontSize :15}}>
                    <CorporateFareIcon/>&nbsp;    Real Estate
                    </li> */}
                </ul>
                </div>
                <div style={{marginTop:'120%'}}>
                <hr ></hr>
                <div  className='sidebarLogout'>
                <button className='logoutButton' onClick={handleLogout}><LogoutIcon style={{fontSize:19}}/>&nbsp;    Logout</button>
                </div>
                </div>
            </div>
            <div className="bodyDiv">
                <div className="headerDiv">
                  <div><ChevronLeftIcon style={{fontSize : 32}}/> &nbsp;{props.title}</div>
                  <div style={{fontSize : 25 ,color : '#5d7288',marginLeft : 80}}>{props.moduleName}</div>
                </div>
            </div>
        </>
    )

}
export default Layout;