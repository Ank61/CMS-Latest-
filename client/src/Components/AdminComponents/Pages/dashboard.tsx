import { useEffect, useState } from "react";
import Layout from "../../Common/Layout/layout";
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "../../Common/SecureInstance/axiosInstance";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import networkConstant from "../../Common/API/uri_constant";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { Oval } from 'react-loader-spinner';
import path from "path";
interface MyComponentProps {
    name: String | undefined | null; // Specify the type of the data property
    data : number
    path : String
}

function Dashboard() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [allData, setAllData] = useState<MyComponentProps[]>([])
    const [moduleNumber, setModuleNumber] = useState<number[]>([])
    const [modal, setModal] = useState(false)
    const [newPage, setNewPage] = useState<string>("")
    const [loading, setLoading] = useState(false);
    const [path, setPath] = useState<string>("");
    const [pageError, setPageError] = useState(false)
    const [shortPage, setShortPage] = useState(false)
    const [emptyPage, setEmptyPage] = useState(false)
    const [pathError, setPathError] = useState(false)
    const [shortPath, setShortPath] = useState(false)
    const [emptyPath, setEmptyPath] = useState(false)
    const [displayPath , setDisplayPath] = useState("")
    useEffect(() => {
        if (!window.localStorage.getItem("Login")) {
            navigate("/admin")
        }
        else {
            var number: number;
            axios.get(`${networkConstant.URL.dashboard}`).then(response => {
                console.log(response.data);
                setAllData(response.data)
                // response.data?.map((item :any,index : number)=> setModuleName((prev:string)=>([...prev , moduleName.push(Object.keys(item))])))    

            }).catch(error => console.log(error))
        }
    }, [modal])
console.log("this is all the data" ,moduleNumber )
    const handleModalChange = (e: any) => {
        setNewPage(e.target.value)
        if (e.target.value > 15) {
            setPageError(true)
        }
        else {
            setPageError(false);
            setShortPage(false);
            setEmptyPage(false);
        }
    }
    const handleNewPageModal = () => {
        setModal(true)
    }

    const handleRouting = () => {
        navigate("/aboutus")
    }

    const handleNewPage = () => {
        if (!path ) {
            setEmptyPath(true)
        }
        else if(!newPage){
            setEmptyPage(true)
        }
        // else if (path.length < 1 ) {
        //     setShortPath(true)
        // }
        else if(newPage.length < 3){
            setShortPage(true)
        }
        else if (!pageError && !shortPage && newPage.length > 2 && !pathError && !shortPath) {
            debugger;
            setLoading(true);
            const obj = {
                collectionName: newPage,
                path: path
            }
            axios.post(`${networkConstant.URL.createNewPage}`, obj).then(response => {
                setLoading(false)
                console.log(response);
            }).catch(err => console.log(err))
            setModal(false)
        }
    }
    const handleKeyDown = (event: any) => {
        if (event.keyCode === 13) {
            handleNewPage()
        }
    }
    const handlepath = (e: any) => {
        setPath(e.target.value)
        if (e.target.value > 15) {
            setPathError(true)
        }
        else {
            setPathError(false);
            setShortPath(false);
            setEmptyPath(false);
        }
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
                        <button className="newPage" onClick={handleNewPageModal}>Create New Page &nbsp;<CreateNewFolderIcon style={{ color: '#22c4d7' }} /></button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr style={{ fontSize: 14, marginTop: 10 }}>
                                <th scope="col" style={{ textAlign: 'center' }}>Sr.no</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Page Name</th>
                                <th scope="col" style={{ textAlign: 'center' }}>No. of Modules</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Route Path</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Edit</th>
                                <th scope="col" style={{ textAlign: 'center' }}>View</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: 13 }}>
                            {/* {moduleName ? moduleName.map((item: any, index: number) => <tr><td scope="row" style={{ textAlign: 'center' }}>{index + 1}</td>
                                <td style={{ textAlign: 'center' }} key={index}>{item}</td>
                                {moduleNumber ? moduleNumber.map((item: any, index: number) => <td style={{ textAlign: 'center' }} key={index}>{item}</td>) : ""}
                                <td style={{ textAlign: 'center' }}>/{item}</td>
                                <td style={{ textAlign: 'center' }} ><EditIcon style={{ fontSize: 20, color: '#8cc0ea', cursor: 'pointer' }} /> &nbsp; <DeleteIcon style={{ fontSize: 20, cursor: 'pointer', color: '#fb8d8d' }} /></td>
                                <td style={{ textAlign: 'center' }} onClick={handleRouting}><VisibilityIcon style={{ fontSize: 20, color: '#ffb75c', cursor: 'pointer' }} /></td> */}
                            {/* </tr>) : ""} */}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                show={modal}
                onHide={() => setModal(false)}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 19 }}>Add New Module</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="newPagePath" style={{ marginTop: 10 }}>
                        <span style={{ width: '23%', marginTop: 5 }}>Page Name :</span>&nbsp;&nbsp;
                        <input type="text" className="form-control" placeholder="Please enter page name" style={{ fontSize: 13, width: '75%' }} onChange={(e) => handleModalChange(e)} value={newPage.replace(/\s{2}/, '')} onKeyDown={handleKeyDown} maxLength={40}></input>
                        <span style={{ height: 12, color: 'red', fontSize: 14 }}>{pageError ? "Oops charachter too long!" : shortPage ? "Charachter too short" : emptyPage ? "Enter name of the module" : ""}</span>
                    </div>
                    <div className="newPagePath" style={{ marginTop: 10 }}>
                        <span style={{ width: '30%', marginTop: 5 }}>Route path :  &nbsp; &nbsp; &nbsp;/</span>
                        <input className="form-control" type="text" placeholder="Enter path name" style={{ fontSize: 13, width: '70%' }} value={path.replace(/\s{2}/, '')} onChange={(e) => handlepath(e)}></input>
                        <span style={{ height: 12, color: 'red', fontSize: 14 }}>{pathError ? "Oops character too long!" : shortPath ? "Character too short" : emptyPath ? "Enter path name" : ""}</span>
                    </div>
                    <Oval
                        height={80}
                        width={80}
                        color="#0dcaf0"
                        wrapperStyle={{ position: 'absolute' }}
                        wrapperClass=""
                        visible={loading}
                        ariaLabel='oval-loading'
                        secondaryColor="#a5deff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    />
                    <Button variant="primary" style={{ marginLeft: '70%', fontSize: 13 }} className="mt-4" onClick={() => handleNewPage()}>Create Page</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Dashboard;