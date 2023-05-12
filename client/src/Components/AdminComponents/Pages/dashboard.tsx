import { useEffect, useState } from "react";
import Layout from "../../Common/Layout/layout";
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "../../Common/SecureInstance/axiosInstance";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import networkConstant from "../../Common/API/uri_constant";
interface MyComponentProps {
    data: any[] | undefined | null; // Specify the type of the data property
  }
  
function Dashboard() {
    const navigate = useNavigate();
    const [data,setData] = useState([])
    const [moduleName,setModuleName] = useState<string[]>([])
    const [moduleNumber,setModuleNumber] = useState<number[]>([])
    useEffect(() => {
        if (!window.localStorage.getItem("Login")) {
            navigate("/admin")
        }
        else{
            var number:number;
            axios.get(`${networkConstant.URL.dashboard}`).then(response=>{
            console.log(response.data[0])
           // response.data?.map((item :any,index : number)=> setModuleName((prev:string)=>([...prev , moduleName.push(Object.keys(item))])))    
           response?.data?.forEach((item: any,index : number) => {
            const keys = Object.keys(item);
            keys.forEach((key: string) => {
              setModuleName((prev: string[]) => [...prev, key]);
              number = response.data[index][key].Modules.length
              console.log("This is ",number)
              setModuleNumber((prev:number[])=>[...prev,number ])
            });
          }); 
           setData(response.data)}).catch(error=>console.log(error))
        }
    },[])
    
    const handleNewPage=()=>{
      axios.get("").then(response=>console.log(response)).catch(err=>console.log(err))
    }
    const handleRouting=()=>{
        navigate("/aboutus")
    }
    return (
        <>
            <div className="mainDiv">
                <Layout title="Dashboard" moduleName="" />
            </div>
            <div className="contentDiv" style={{ backgroundColor: '#f5f5f5' }}>
                <br></br>
                <div className="dashboardTable">
                    <div className="mainDivDashboard">
                <h5 style={{ textAlign: "left" }}>Pages</h5>
                <button className="newPage" onClick={handleNewPage}>Create New Page &nbsp;<CreateNewFolderIcon style={{color : '#22c4d7'}}/></button>
                </div>
                    <table className="table">
                        <thead>
                            <tr style={{fontSize : 14 , marginTop : 10}}>
                                <th scope="col" style={{textAlign:'center'}}>Sr.no</th>
                                <th scope="col" style={{textAlign:'center'}}>Page Name</th>
                                <th scope="col" style={{textAlign:'center'}}>No. of Modules</th>
                                <th scope="col" style={{textAlign:'center'}}>Route Path</th>
                                <th scope="col" style={{textAlign:'center'}}>Edit</th>
                                <th scope="col" style={{textAlign:'center'}}>View</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize:13}}>
                                {moduleName? moduleName.map((item :any,index:number)=>  <tr><th scope="row" style={{textAlign:'center'}}>{index+1}</th>
                                <td style={{textAlign:'center'}} key={index}>{item}</td>
                                {moduleNumber? moduleNumber.map((item :any,index :number)=> <td style={{textAlign:'center'}} key={index}>{item}</td>) : ""}
                                <td style={{textAlign:'center'}}>/{item}</td>
                                <td style={{textAlign:'center'}} ><EditIcon style={{fontSize: 20 , color : '#8cc0ea' ,cursor:'pointer'}}/> &nbsp; <DeleteIcon style={{fontSize: 20 ,cursor:'pointer', color : '#fb8d8d'}}/></td>
                                <td style={{textAlign:'center'}} onClick={handleRouting}><VisibilityIcon style={{fontSize :20,color : '#ffb75c',cursor:'pointer'}}/></td>
                                </tr>) : ""}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Dashboard;