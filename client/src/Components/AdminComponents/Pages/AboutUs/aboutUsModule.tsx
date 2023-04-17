import React from 'react';
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import Layout from "../../../Common/Layout/layout";
import axios from "../../../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import 'froala-editor/js/plugins/char_counter.min.js';
import toast, { Toaster } from 'react-hot-toast';
import "./aboutUsAdmin.css";
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';
import Modal from 'react-bootstrap/Modal';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/print.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/inline_class.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/font_awesome.min.js';
import 'froala-editor/js/third_party/font_awesome.min.js'
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/draggable.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/plugins/draggable.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import "../AdminPageCSS/adminPages.css"
import networkConstant from '../../../Common/API/uri_constant';
import DivModule from './Features/divModule';
import ButtonModule from './Features/buttonModule';
import BackgroundModule from './Features/backgroundModule';
import CodeIcon from '@mui/icons-material/Code';

type moduleDetail = {
    moduleName: String
    moduleId: Number
}
function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function AboutUsDynamic() {
    const [moduleDetails, setModuleDetails] = useState<moduleDetail>()
    const [editorContent, setEditorContent] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false)
    const [modalButton, setModalButton] = useState(false)
    const [backgroundImageModal, setBackgroundImageModal] = useState(false)
    const [tagModal, setTagModal] = useState<boolean>(false);
    const [title , setTitle] = useState<string>("")
    const [description , setDescription] = useState<string>("")
    let { id } = useParams();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!anchorEl) {
            debugger
            setAnchorEl(event.currentTarget);
            a11yProps(0)
        }
        else {
            setAnchorEl(null);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
        setModal(true)
        a11yProps(0)
    };
    const handleCloseButton = () => {
        setAnchorEl(null);
        setModalButton(true);
    }
    const handleCloseBackground = () => {
        setAnchorEl(null);
        setBackgroundImageModal(true)
    }


    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${networkConstant.URL.aboutUS}`).then(response => {
            if (response.data === "Logout") {
                toast.error("Session expired")
                setTimeout(() => {
                    navigate("/admin")
                }, 1000)
            } else {
                setModuleDetails(response.data[0].Modules[`${id}`])
                setEditorContent(response.data[0].Modules[`${id}`].data)
                setTitle(response.data[0].title)
                setDescription(response.data[0].description)
            }
        }).catch(err => console.log(err))
    }, [])
    // useEffect(() => {
    //     setData((prev) => ({ ...prev, backgroundColor: color }))
    // }, [color])
    function handleUpdate() {
        const obj = {
            moduleId: moduleDetails?.moduleId,
            moduleName: `${moduleDetails?.moduleName}`,
            data: `${editorContent}`,
            From: "Update"
        }
        axios.post(`${networkConstant.URL.updateAboutUs}`, obj)
            .then(response => {
                if (response.data === "Logout") {
                    toast.error("Session expired")
                    setTimeout(() => {
                        navigate("/admin")
                    }, 1000)
                } else {
                    toast.success("Updated Successfully")
                }
            })
            .catch(err => console.log(err))
    }

    function handleDelete() {
        const obj = { moduleId: `${moduleDetails?.moduleId}` }
        axios.post(`${networkConstant.URL.deleteAboutUs}`, obj).then(response => console.log(response)).catch(err => console.log(err))
        navigate("/admin/aboutus")
        toast.error("Deleted successfully")
    }
    const closeDivModule = (newData: string) => {
        debugger;
        setEditorContent((prev) => prev + `${newData}`);
    };
    const closeDiv = () => {
        debugger;
        setModal(false)
    }
    const editorRef = useRef<FroalaEditor>(null);
    function handleAddDiv() {
        const editorInstance = editorRef.current
        console.log(editorInstance)
    }
    const closeButtonModule = (newData: string) => {
        setEditorContent((prev) => prev + `${newData}`);
    }
    const closeButtonModuleDiv = () => {
        setModalButton(false);
    }
    const closeBackgroundModule = () => {
        setBackgroundImageModal(false)
    }
    const closeBackground = (newData: string) => {
        setEditorContent((prev) => prev + `${newData}`);
    }
    const handleMetaData=()=>{
        const metaData = {
            title : title,
            description : description
        }
        axios.post(`${networkConstant.URL.metaData}`,metaData).then(response=>console.log(response.data)).catch(err=>console.log(err))
    setTagModal(false);
    toast.success("Successfully Updated!")
    
    }
    const handleTitle=(e:React.ChangeEvent<HTMLTextAreaElement> )=>{
      setTitle(e.target?.value);
    }
    const handleDescription = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setDescription(e.target.value);
    }
    return (
        <>
            <div className="mainDiv">
                <Layout title="About Us" moduleName={moduleDetails ? moduleDetails.moduleName : " "}></Layout> <Toaster />
            </div>
            <div className='mainContentDiv'>
                <div className="contentDivMain">
                    <div >
                        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} >
                            <div className="addButton">{open ? <CloseIcon style={{height : 21}}/> : <AddIcon style={{height : 21}}/>}</div>
                        </Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClick} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                            <MenuItem style={{ fontSize: 14 }} onClick={handleClose}> <ViewModuleIcon style={{ marginRight: 20, fontSize: 29 }} /> Divide Module</MenuItem>
                            <MenuItem onClick={handleCloseButton} style={{ fontSize: 14 }}><SmartButtonIcon style={{ marginRight: 20, fontSize: 31 }} /> Button</MenuItem>
                            <MenuItem onClick={handleCloseBackground} style={{ fontSize: 14 }}><WallpaperIcon style={{ marginRight: 20, fontSize: 26 }} />   Background Image</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }} disabled><AlignHorizontalCenterIcon style={{ marginRight: 20, fontSize: 28 }} /> Align Item</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }} disabled><FormatColorFillIcon style={{ marginRight: 20, fontSize: 27 }} /> Background Color</MenuItem>
                        </Menu>
                    </div>
                    <div>
                        <button className='updateButton' onClick={()=>setTagModal(true)}><CodeIcon style={{height : 21}}/> Meta Tag</button>
                        <button className="updateButton" ><VisibilityIcon style={{height : 21}}/> Preview</button>
                        <button className="updateButton" onClick={() => handleUpdate()}><SendIcon style={{height : 20}}/> Update</button>
                        <button className="updateButton" onClick={() => handleDelete()}><DeleteIcon style={{height : 21}} /></button>
                    </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    <FroalaEditor
                        tag='textarea'
                        model={editorContent}
                        onModelChange={(newContent: string) => setEditorContent(newContent)}
                        ref={editorRef}
                        config={{
                            charCounterCount: true,
                            height: 450,
                            width: '100%',
                            autoFocus: true,
                            pluginsEnabled: ['fontFamily', 'fontSize', 'colors', 'textColor', 'image', "getPDF", "codeView", "inlineStyle", "inlineClass", "link", "video", "emoticons", "wordPaste", "embedly", "fontAwesome", "draggable", "lists", "paragraphStyle", "paragraphFormat", "quote", "align", "insertHTMLButton", "table"],
                            toolbarButtons: ['insertHTML', 'align', "quote", "draggable", "fontAwesome", "embedly", "wordPaste", "emoticons", "insertVideo", "insertLink", "inlineClass", "inlineStyle", "html", "getPDF", 'insertImage', 'backgroundColor', 'textColor', 'color', 'fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', 'paragraphFormat', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertFile', 'insertTable', 'specialCharacters', 'selectAll', 'clearFormatting', 'print', 'help', 'html', 'undo', 'redo', 'trackChanges', 'markdown', "insertHR", 'uploadFile'],
                        }}
                    />
                    <div>
                    </div>
                </div>
                {JSON.stringify(editorContent)}
                {/*Modal for Making Divs*/}
                <DivModule showing={modal} onHiding={closeDivModule} closeDiv={closeDiv} />
                {/*Modal for Button*/}
                <ButtonModule showing={modalButton} onHiding={closeButtonModule} closeButtonDiv={closeButtonModuleDiv} />
                {/*Modal for Background Modal*/}
                <BackgroundModule showing={backgroundImageModal} onHiding={closeBackground} closeBackground={closeBackgroundModule} />
                {/*Modal for Meta Tag*/}
                <Modal show={tagModal} onHide={()=>setTagModal(false)} backdrop="static" keyboard={false} centered  >
                    <Modal.Body style={{ overflow: 'auto' }} >

                    <div className='backgroundButton' >
                    <h5 style={{marginLeft : 80}}>Change Meta Tag for About Us</h5>
                    <div  onClick={()=>setTagModal(false)} className='metaTagButton'><ClearIcon /></div>
                    </div>

                        <div className='backgroundButton' style={{marginTop : 10}}>
                        <label style={{marginTop : 30}}>Title : </label>
                        <textarea  className='form-control' style={{width : 'auto' , marginLeft : 'auto' , fontSize : 14}} rows={3} cols={47} value={title} onChange={(e)=>handleTitle(e)}></textarea >
                        </div>
                        
                        <div className='backgroundButton' style={{marginTop : 10}}>
                        <label style={{marginTop : 30}}>Description : </label>
                        <textarea  className='form-control' style={{width : 'auto' , marginLeft : 'auto',fontSize : 14}} rows={8} cols={47} value={description} onChange={(e)=>handleDescription(e)}></textarea >
                        </div>

                        <button type="button" className='btn btn-primary' style={{ marginLeft:400,marginTop : 20 ,height : 'auto',fontSize :13 ,width : 'auto' }}  onClick={handleMetaData}>Update</button>
                        </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default AboutUsDynamic;