import { useEffect } from "react";
import Layout from "../../Common/Layout/layout";
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "../../Common/SecureInstance/axiosInstance";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!window.localStorage.getItem("Login")) {
            navigate("/admin")
        }
        else{
            axios.get("").then(response=>console.log(response)).catch(error=>console.log(error))
        }
    })
    return (
        <>
            <div className="mainDiv">
                <Layout title="Dashboard" moduleName="" />
            </div>
            <div className="contentDiv" style={{ backgroundColor: '#f5f5f5' }}>
                <br></br>
                <div className="dashboardTable">
                    <div className="mainDivDashboard">
                <h4 style={{ textAlign: "left" }}>Pages</h4>
                <button className="newPage">Create New Page <CreateNewFolderIcon style={{color : '#22c4d7'}}/></button>
                </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr.no</th>
                                <th scope="col">Page Name</th>
                                <th scope="col">No. of Modules</th>
                                <th scope="col">Last Updated</th>
                                <th scope="col">Route Path</th>
                                <th scope="col">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><EditIcon style={{fontSize: 20 , color : '#8cc0ea'}}/> &nbsp; <DeleteIcon style={{fontSize: 20 , color : '#fb8d8d'}}/></td>
                                <td>Jacob</td>
                                <td><VisibilityIcon style={{fontSize :20,color : '#ffb75c'}}/></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td><VisibilityIcon style={{fontSize :20,color : '#ffb75c'}}/></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td><VisibilityIcon style={{fontSize :20,color : '#ffb75c'}}/></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td><VisibilityIcon style={{fontSize :20,color : '#ffb75c'}}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Dashboard;