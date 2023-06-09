import Layout from "../../../Common/Layout/layout";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "../AdminPageCSS/adminPages.css"
import axios from "../../../Common/SecureInstance/axiosInstance";
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import networkConstant from "../../../Common/API/uri_constant";
import { Oval } from 'react-loader-spinner';
function AdminAboutUs() {
    type Modules = {
        moduleName: string,
        index: Number
        //array
    }
    const [modules, setModules] = useState([])
    const [render ,setRender] = useState("1") 
    const [modal, setModal] = useState<boolean>(false)
    const [title, setTitle] = useState("")
    const [titleError, setTitleError]  = useState(false)
    const [shortTitle , setShortTitle] = useState(false)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [emptyTitle , setEmptyTitle] = useState(false)

    useEffect(() => {
        if (!window.localStorage.getItem("Login")) {
            navigate("/admin")
        }
        else{
            debugger;
        axios.get(`${networkConstant.URL.aboutUS}`)
            .then(response => {
                if (response.data ==="Logout") {
                    navigate("/admin")
                } else {
                    console.log(response.data[0].Modules)
                    setModules(response.data[0].Modules)
                }
            })
            .catch(err => console.log(err))
        }
    }, [])


    function handleClick(index: Number) {
        navigate(`/admin/aboutus/${index}`)
    }
    async function handleNewModule() {
        if(!title){
            setEmptyTitle(true)
        }
        else if(title.length<4){
            setShortTitle(true)
        }
        else if(!titleError && !shortTitle && title.length>2){
            debugger;
        setLoading(true);
        const obj = {
            moduleName: title,
            data: ""
        }
        await axios.post(`${networkConstant.URL.createAboutUs}`, obj).then().catch(err => console.log(err))
        setRender("2")
        setTimeout(()=>{
            axios.get(`${networkConstant.URL.aboutUS}`)
            .then(response => {
                if (response.data === "Logout") {
                    navigate("/admin")
                } else {
                    console.log(response.data[0].Modules)
                    setModules(response.data[0].Modules)
                }
            })
            .catch(err => console.log(err))
        },100)
        setLoading(false);
         setModal(false);
    }
    }
    async function handleModalChange(e : any){

        debugger;
        setEmptyTitle(false)
        setTitle(e.target.value)
        if(e.target.value.length>15 ){
            setTitleError(true)
        }
        else{
            setShortTitle(false)
            setTitleError(false)
        }
    }
    const handleKeyDown = (event : any) => {
        if (event.keyCode === 13) {
            handleNewModule()
        }
    }

    return (
        <>
            <div className="mainDiv">
                <Layout title="About Us" moduleName=""/>
            </div>
            <div className="contentDiv" style={{backgroundColor :'#f5f5f5' }}>
                <h3 style={{ textAlign: "center" }}>About Us Page</h3>

                <div className="Module">
                    {modules.length > 0 ? modules.map((item: Modules, index) => {
                        return (
                            <div className="moduleDiv" key={item.moduleName} style={{fontSize :13}} onClick={() => handleClick(index)}>
                                Module Name : {item.moduleName}
                            </div>
                        )
                    }) : " "}
                    <div className="moduleDiv2" onClick={() => setModal(true)}>
                        <AddIcon />
                    </div>
                </div>
                <Modal
                    show={modal}
                    onHide={() => setModal(false)}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title style={{fontSize:19}}>Add New Module</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" className="form-control" placeholder="Please enter Title for Module" style={{fontSize :13}} onChange={(e) => handleModalChange(e)} value={title.replace(/\s{2}/, '')} onKeyDown={handleKeyDown} maxLength={40}></input>
                        <span style={{height :12 ,color : 'red',fontSize :14}}>{titleError ? "Oops charachter too long!" : shortTitle ? "Charachter too short" :  emptyTitle ? "Enter name of the module" :""}</span>
                        <Oval
                                        height={80}
                                        width={80}
                                        color="#0dcaf0"
                                        wrapperStyle={{ position: 'absolute'}}
                                        wrapperClass=""
                                        visible={loading}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#a5deff"
                                        strokeWidth={2}
                                        strokeWidthSecondary={2}

                                    />
                        <Button variant="primary" style={{marginLeft :'70%',fontSize :13}} className="mt-4" onClick={() => handleNewModule()}>Create Module</Button>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default AdminAboutUs;