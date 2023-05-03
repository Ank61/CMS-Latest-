import { NavLink } from 'react-router-dom';
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
type title = {
    title : String //We have already header comoponent!
    moduleName : String
}
function Layout(props : title){
    return(
        <>
            <div className="sidebar">
                <h3 style={{marginLeft : 10}}>Talentelgia</h3>
                <div className="pages">
                <ul >
                    <li style={{fontSize :15}} >
                        <NavLink  to="/admin/dashboard" ><DashboardIcon/>&nbsp;    Dashboard</NavLink> 
                    </li>
                    <li style={{fontSize :15}}>
                        <NavLink  to="/admin/header" ><PublishIcon/>&nbsp;    Header</NavLink> 
                    </li>
                    {/* <li style={{fontSize :15}}>
                        <NavLink  to="/admin/footer" ><GetAppIcon/>&nbsp;    Footer</NavLink> 
                    </li> */}
                    <li style={{fontSize :15}}>
                      <NavLink  to="/admin/aboutus" ><AssignmentIndIcon/>&nbsp;    About Us</NavLink>
                    </li>
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
            </div>
            <div className="bodyDiv">
                <div className="headerDiv">
                <ChevronLeftIcon style={{fontSize : 32}}/> &nbsp;
                  {props.title} 
                  <span style={{fontSize : 25 ,color : '#5d7288',marginLeft : 80}}>{props.moduleName}</span>
                </div>
            </div>
        </>
    )

}
export default Layout;