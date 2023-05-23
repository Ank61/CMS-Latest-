import { useEffect, useState } from "react";
import React, { MouseEventHandler } from "react";
import Layout from "../../../Common/Layout/layout";
import { useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "../../../Common/SecureInstance/axiosInstance";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import networkConstant from "../../../Common/API/uri_constant";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
import { Oval } from 'react-loader-spinner';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
interface MyComponentProps {
    name: String | undefined | null;
    path: String
}
interface CustomArrowProps {
    onClick: () => void;
    direction: 'left' | 'right';
}
const CustomArrow: React.FC<CustomArrowProps> = ({ onClick, direction }) => {
    const arrowIcon = direction === 'left' ? '<' : '>'; // Customize the arrow icon as needed

    return (
        <button onClick={onClick} className="custom-arrow">
            {arrowIcon}
        </button>
    );
};
interface CustomIndicatorProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    isActive: boolean;
}
const CustomIndicator: React.FC<CustomIndicatorProps> = ({ onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`custom-indicator ${isActive ? 'active' : ''}`}
        />
    );
};
function Dashboard() {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [allData, setAllData] = useState<MyComponentProps[]>([])
    const [modal, setModal] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    const [newPage, setNewPage] = useState<string>("")
    const [loading, setLoading] = useState(false);
    const [path, setPath] = useState<string>("");
    const [pageError, setPageError] = useState(false)
    const [shortPage, setShortPage] = useState(false)
    const [emptyPage, setEmptyPage] = useState(false)
    const [pathError, setPathError] = useState(false)
    const [shortPath, setShortPath] = useState(false)
    const [emptyPath, setEmptyPath] = useState(false)
    const [deleteItem, setDeleteItem] = useState<string>("")
    const [deleteItemCheck, setDeleteItemCheck] = useState<string>("")
    const [deleteDisabled, setDeleteDisabled] = useState<boolean>(true)
    const [editModal, setEditModal] = useState<boolean>(false)
    const [editItem, setEditItem] = useState<string>("")
    const [editName, setEditName] = useState<string>("")
    const [editError, setEditError] = useState<boolean>(false)
    const [editShortError, setShortEditShortError] = useState<boolean>(false)
    const [editEmptyError, setShortEditEmptyError] = useState<boolean>(false)
    const [editPath, setEditPath] = useState<string>("")
    const [editPathError, setEditPathError] = useState<boolean>(false)
    const [editPathShort, setEditPathShort] = useState<boolean>(false)
    const [editPathEmpty, setEditPathEmpty] = useState<boolean>(false)
    const [deleteActive ,setDeleteActive] = useState<boolean>(false)
    const [editCheck ,setEditActive] = useState<boolean>(false)
    const [newActive ,setNewActive] = useState<boolean>(false)
    const [seperateLoading , setSeperateLoading] = useState<boolean>(false)
    useEffect(() => {
        setLoading(true);
        if (!window.localStorage.getItem("Login")) {
            navigate("/adminLogin")
        }
        else {
            axios.get(`${networkConstant.URL.dashboard}`).then(response => {
                setAllData(response.data)
                setLoading(false);
            }).catch(error => console.log(error))
        }
    }, [newActive, deleteActive,editCheck])
    const { page } = useParams();
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

    const handleRouting = (path: String) => {
        console.log(`${window.location.origin}${path}`)
        window.open(`${window.location.origin}${path}`, '_blank');
    }

    const handleNewPage = () => {
        if (!path) {
            setEmptyPath(true)
        }
        else if (!newPage) {
            setEmptyPage(true)
        }
        else if (newPage.length < 3) {
            setShortPage(true)
        }
        else if (!pageError && !shortPage && newPage.length > 2 && !pathError && !shortPath) {

            setLoading(true);
            const obj = {
                collectionName: newPage,
                path: "/" + path
            }
            axios.post(`${networkConstant.URL.createNewPage}`, obj).then(response => {
                setLoading(false)
                setModal(false)
                setNewPage("")
                setPath("")
                setNewActive(!newActive);
            }).catch(err => console.log(err))
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
    const handleDelete = (item: string) => {
        setModalDelete(true);
        setDeleteItem(item);
    }
    const handleDeleteCheck = (e: any) => {
        setDeleteItemCheck(e.target.value)
        if (deleteItem === e.target.value) {
            setDeleteDisabled(false)
        }
        else {
            setDeleteDisabled(true)
        }
    }
    const handleDeleteRequest = () => {

        const obj = {
            collectionName: deleteItem
        };
        axios.post(`${networkConstant.URL.delete}`, obj).then(response => {
            setModalDelete(false);
            toast.success("Deleted Successfully")
            setDeleteItemCheck("")
            setDeleteActive(!deleteActive)
        }).catch(err => console.log(err))

    }
    const handleEditClicked = (item: any, all: any) => {
        setEditName(item);
        setEditPath(all.path.substr(1))
        setEditItem(item);
        setEditModal(true);
    }
    const handleEditModalChange = (e: any) => {
        setEditName(e.target.value)
        if (e.target.value > 15) {
            setEditError(true)
        }
        else {
            setEditError(false);
            setShortEditShortError(false);
            setShortEditEmptyError(false);
        }
    }
    const handlepathEdit = (e: any) => {
        setEditPath(e.target.value)
        if (e.target.value > 15) {
            setEditPathError(true)
        }
        else {
            setPathError(false);
            setEditPathShort(false);
            setEditPathEmpty(false);
        }
    }
    const handleKeyDownEdit = (event: any) => {
        if (event.keyCode === 13) {
            //call the function which handles edit here
        }
    }
    const handleEditPage = () => {
        if (!editItem) {
            setShortEditEmptyError(true)
        }
        else if (!editPath) {
            setEditPathEmpty(true)
        }
        else if (editName.length < 3) {
            setShortEditShortError(true)
        }
        else if (!editError && !editShortError && editName.length > 2 && !editPathError && !editPathShort) {
            setSeperateLoading(true)
            // setLoading(true);
            const obj = {
                collectionName: editName,
                modulePath: "/" + editPath
            }
            axios.post(`${networkConstant.URL.edit}`, obj).then(response => {
                setSeperateLoading(false)
                setEditModal(false)
                toast.success("Successfully edited")
                setEditActive(!editCheck)
            }).catch(err => console.log(err))
        }
    }

    return (
        <>
            <div className="mainDiv"><Toaster />
                <Layout title="Dashboard" moduleName="" editModal={editCheck} modalDelete={deleteActive} modal={newActive} />
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
                                <th scope="col" style={{ textAlign: 'center' }}>Status</th>
                                <th scope="col" style={{ textAlign: 'center' }}>Edit</th>
                                <th scope="col" style={{ textAlign: 'center' }}>View</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: 13 }}>
                            {allData ? allData.map((item: any, index: number) => <tr><td scope="row" style={{ textAlign: 'center' }}>{index + 1}</td>
                                <td style={{ textAlign: 'center' }} key={index}>{item.name}</td>
                                <td style={{ textAlign: 'center' }}>{item.data}</td>
                                <td style={{ textAlign: 'center' }}>{item.path}</td>
                                <td style={{ textAlign: 'center'}}>{item.name==="homes" ? 
                                <div style={{padding:'2px 0px 2px 0px',fontSize:13,backgroundColor : '#fef2f2',fontWeight:650,color : '#fc7777',width:'72%',margin:'auto',borderRadius:4}}><CircleIcon style={{fontSize :7,color:'#fc7777'}}/>&nbsp;Reserved</div> :
                                <div style={{padding:'2px 0px 2px 0px' ,fontSize:13,backgroundColor : '#ebfcfb',fontWeight:650,color : '#2ad2ce',width:'56%',marginLeft:16,borderRadius:4}}><CircleIcon style={{fontSize :7,color:'#36c6d5'}}/>&nbsp;Open</div>}</td>
                                <td style={{ textAlign: 'center' }} ><button className="buttonHover" disabled={item.name==="homes" ? true:false }  onClick={() => handleEditClicked(item.name, item)}><EditIcon className={item.name==="homes" ? "buttonHoverDisable":"editButton"}  /></button> &nbsp; <button className="buttonHoverDelete" onClick={() => handleDelete(item.name)} disabled={item.name==="homes" ? true:false }><DeleteIcon className={item.name==="homes" ? "buttonHoverDisableDelete":"deleteButton"} /></button></td>
                                <td style={{ textAlign: 'center' }} onClick={() => handleRouting(item.path)}><button className="buttonHoverPreview"><VisibilityIcon className="visibleIcon" /></button></td>
                            </tr>) : ""}
                        </tbody>
                    </table>
                </div>
                <div className="oval-wrapper" style={{ position: 'relative', left: '40%' }}>
                    <Oval
                        height={80}
                        width={80}
                        color="#0dcaf0"
                        wrapperStyle={{
                            position: 'absolute'
                        }}
                        wrapperClass=""
                        visible={loading}
                        ariaLabel='oval-loading'
                        secondaryColor="#a5deff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
                {/* <div style={{ width: '50%', marginLeft: '12%', backgroundColor: 'white' }}>
                    <Carousel showThumbs={false} showArrows={true} stopOnHover={true} width="90%" swipeable={true} useKeyboardArrows={true} interval={2500} infiniteLoop={true} showStatus={false} autoPlay renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && <CustomArrow onClick={onClickHandler} direction="left" />
                    }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && <CustomArrow onClick={onClickHandler} direction="right" />
                        }
                        renderIndicator={(onClickHandler, isSelected, index, label) => (
                            <CustomIndicator
                                onClick={onClickHandler}
                                isActive={isSelected}
                                key={index}
                            />
                        )}>
                        <div>
                            <p>Page 1</p>
                            <ol>
                                <li>First Item</li>
                                <li>Second Item</li>
                                <li>Third Item</li>
                                <li>Fourth Item</li>
                            </ol>
                        </div>
                        <div>
                            <div>
                                <p>Page 2</p>
                                <ol>
                                    <li>First Item</li>
                                    <li>Second Item</li>
                                    <li>Third Item</li>
                                    <li>Fourth Item</li>
                                </ol>
                            </div>
                        </div>
                        <div>
                            <p>Page 3</p>
                            <ol>
                                <li>First Item</li>
                                <li>Second Item</li>
                                <li>Third Item</li>
                                <li>Fourth Item</li>
                            </ol>
                        </div>
                    </Carousel>
                </div> */}
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
                        <input type="text" className="form-control" placeholder="Please enter page name" style={{ fontSize: 13, width: '75%' }} onChange={(e) => handleModalChange(e)} value={newPage.replace(/\s{2}/, '')} maxLength={40}></input>
                        <span style={{ height: 12, color: 'red', fontSize: 14 }}>{pageError ? "Oops charachter too long!" : shortPage ? "Charachter too short" : emptyPage ? "Enter name of the module" : ""}</span>
                    </div>
                    <div className="newPagePath" style={{ marginTop: 10 }}>
                        <span style={{ width: '30%', marginTop: 5 }}>Route path :  &nbsp; &nbsp; &nbsp;/</span>
                        <input className="form-control" type="text" placeholder="Enter path name" style={{ fontSize: 13, width: '70%' }} value={path.replace(/\s{2}/, '')} onChange={(e) => handlepath(e)} onKeyDown={handleKeyDown}></input>
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
            {/*Modal for the Deleting collection*/}
            <Modal
                show={modalDelete}
                onHide={() => { setModalDelete(false); setDeleteItemCheck("") }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 19 }}>Drop Page</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ marginTop: 10, marginLeft: '6%', marginRight: '6%' }}>
                        <p style={{ fontSize: 14 }}>To drop the collection <b>{deleteItem ? deleteItem : ""}</b>, type the name to confirm.</p>
                        <input className="form-control" type="text" placeholder="Enter path name" style={{ fontSize: 13, width: '90%' }} value={deleteItemCheck} onChange={(e) => handleDeleteCheck(e)} onKeyDown={handleKeyDown}></input>
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
                    <div className="newPagePath" style={{ marginTop: 3 }}>
                        <Button style={{ marginLeft: '55%', fontSize: 13, border: '1px solid gray', backgroundColor: 'white', color: 'gray' }} className="mt-4" onClick={() => { setModalDelete(false); setDeleteItemCheck("") }}>Cancel</Button>
                        <Button variant="primary" disabled={deleteDisabled} style={{ marginLeft: '2%', fontSize: 13 }} className="mt-4" onClick={(e) => handleDeleteRequest()}>Drop</Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/*Modal for the Editing collection */}
            <Modal
                show={editModal}
                onHide={() => { setEditModal(false) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 19 }}>Edit Page <b>{editItem ? editItem : ""}</b> Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="newPagePath" style={{ marginTop: 10 }}>
                        <span style={{ width: '23%', marginTop: 5, fontSize: 14 }}>Page Name :</span>&nbsp;&nbsp;
                        <input type="text" className="form-control" placeholder="Please enter page name" style={{ fontSize: 13, width: '100%' }} onChange={(e) => handleEditModalChange(e)} value={editName.replace(/\s{2}/, '')} maxLength={40}></input>
                    </div>
                    <span style={{ height: 12, color: 'red', fontSize: 13, marginLeft: '20%' }}>{editError ? "Oops charachter too long!" : editShortError ? "Charachter too short" : editEmptyError ? "Enter name of the module" : ""}</span>
                    <div className="newPagePath" style={{ marginTop: 10 }}>
                        <span style={{ width: '30%', marginTop: 5, fontSize: 14 }}>Route path :  &nbsp; &nbsp; &nbsp;/</span>
                        <input className="form-control" type="text" placeholder="Enter path name" style={{ fontSize: 13, width: '100%' }} value={editPath.replace(/\s{2}/, '')} onChange={(e) => handlepathEdit(e)} onKeyDown={handleKeyDownEdit}></input>
                    </div>
                    <span style={{ height: 12, color: 'red', fontSize: 13, marginLeft: '23%' }}>{editPathError ? "Oops character too long!" : editPathShort ? "Character too short" : editPathEmpty ? "Enter path name" : ""}</span>
                    <Oval
                        height={80}
                        width={80}
                        color="#0dcaf0"
                        wrapperStyle={{ position: 'absolute' }}
                        wrapperClass=""
                        visible={seperateLoading}
                        ariaLabel='oval-loading'
                        secondaryColor="#a5deff"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                    <div className="newPagePath" style={{ marginTop: 3 }}>
                        <Button style={{ marginLeft: '60%', fontSize: 13, border: '1px solid gray', backgroundColor: 'white', color: 'gray' }} className="mt-4" onClick={() => { setEditModal(false) }}>Cancel</Button>
                        <Button variant="primary" style={{ marginLeft: '1%', fontSize: 13 }} className="mt-4" onClick={() => handleEditPage()}>Save Changes</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Dashboard;