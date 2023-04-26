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
import MetaTagModal from './Features/metaTagModal';
import BoltIcon from '@mui/icons-material/Bolt';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { FormLabel } from 'react-bootstrap';
import RemoveIcon from '@mui/icons-material/Remove';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProp(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
interface Item {
    item: number | undefined | null;
    label?: string | undefined;
    placeholder?: string | undefined
    required? :boolean|undefined
}


function AboutUsDynamic() {
    const [moduleDetails, setModuleDetails] = useState<moduleDetail>()
    const [editorContent, setEditorContent] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false)
    const [modalButton, setModalButton] = useState(false)
    const [backgroundImageModal, setBackgroundImageModal] = useState(false)
    const [tagModal, setTagModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    let { id } = useParams();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [cursorPosition, setCurrentPosition] = useState<any>()
    const [selectionIndex, setSelectionIndex] = useState()
    const [developerModal, setDeveloperModal] = useState(false)
    const [developerHTML, setDeveloperHTML] = useState<string>('')
    const [developerCSS, setDeveloperCSS] = useState<string>('')
    const [formModal, setFormModal] = useState(false)
    const [formData, setFormData] = useState();
    const [formOuter, setFormOuter] = React.useState('div');
    const [intialLabel, setInitialLabel] = useState("")
    const [intialPlaceholder, setInitialPlaceholder] = useState("")
    const [intialRequired, setIntialReqiured] = useState(false)
    //States for form button animantion
    const [showMore, setShowMore] = useState(false)
    const [value, setValue] = React.useState(0);
    const [constantItem, setConstantItem] = useState<number>()
    const [multipleLabel, setMultipleLabel] = useState<Item[]>([])
    const [constantLabel, setConstantLabel] = useState<string>()
    const [constantPlaceholder, setConstantPlaceholder] = useState<string>()
    const [showSubmitButton, setShowSubmitButton] = useState(false)
    const [buttonText, setButtonText] = useState("")
    const [finalForm, setFinalForm] = useState<any[] | undefined>()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        debugger;
        setValue(newValue);
    };
    const froalaEditorMain = (newContent: string) => {
        setEditorContent(newContent);
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!anchorEl) {
            setAnchorEl(event.currentTarget);
            a11yProps(0)
            setCurrentPosition(editorReff.current)
            var editor = editorReff.current?.getEditor();
            var selection = editor.selection.get();
            setSelectionIndex(selection)
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

    const handleChangeForm = (event: SelectChangeEvent) => {
        setFormOuter(event.target.value);
    };
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
        var editor = cursorPosition?.getEditor();
        if (!editor) return;
        var div = `${newData}`
        editor.html.insert(div, selectionIndex);
    }
    const closeDiv = () => {
        setModal(false)
    }
    const closeButtonModule = (newData: string) => {
        var editor = cursorPosition?.getEditor();
        if (!editor) return;
        var div = `${newData}`;
        editor.html.insert(div, selectionIndex);
    }
    const closeButtonModuleDiv = () => {
        setModalButton(false);
    }
    const closeBackgroundModule = () => {
        setBackgroundImageModal(false)
    }
    const closeBackground = (newData: string) => {
        const editor = cursorPosition?.getEditor();
        if (!editor) return;
        const div = `${newData}`;
        editor.html.insert(div, selectionIndex);
    }
    const handleMetaData = () => {
        const metaData = {
            title: title,
            description: description
        }
        axios.post(`${networkConstant.URL.metaData}`, metaData).then(response => console.log(response.data)).catch(err => console.log(err))
        setTagModal(false);
        toast.success("Successfully Updated!")

    }
    const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target?.value);
    }
    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    const editorReff = useRef<FroalaEditor>(null);
    //Do not delete this
    // const handleModelChange = () => {
    //     const editor = editorReff.current?.getEditor();
    //     if (!editor) return;
    //     const selection = editor.selection.get();
    //     const div = '<button style="background-color : orange">Click meow</button>'
    //     editor.html.insert(div, selection.index);
    // }
    const handleHiding = () => {
        setTagModal(false)
    }
    const handleBootstrap = () => {
        setDeveloperModal(true)
    }
    const handleDeveloper = async () => {
        setEditorContent((prev) => prev + `${developerHTML}`)
        setDeveloperModal(false)
        const obj = {
            CSS: `${developerCSS}`,
            Effect: 'Developer',
            From: "Apply"
        }
        await axios.post(`${networkConstant.URL.updateAboutUs}`, obj).then(response => { console.log(response) }).catch(err => console.log(err))
    }
    const handleFormElement = () => {
        setAnchorEl(null);
        setFormModal(true)
    }
    const [formArray, setFormArray] = useState<number[]>([])
    var count = 0;
    const handlePlusArray = () => {
        count++;
        setFormArray((prev) => [...prev, prev.push(count)]);
    }
    const handleRemove = (e: React.MouseEvent, item: number) => {
        if (formArray.length === 1) {
            setFormArray([])
        }
        else {
            const indexToDelete = formArray.indexOf(item)
            const newArray = formArray.filter((_, index) => index !== indexToDelete);
            setFormArray(newArray)
        }
    }
    const handleDynamicLabel = (value: string, items: number) => {
        setMultipleLabel((prev) => [...prev, { item: items, label: value,placeholder : constantPlaceholder,required : multipleLabel[items-1]?.required ? true : false}])
        setConstantLabel(value)
        setConstantItem(items)
    }
    const handleDynamicPlaceholder = (placeholder: string, items: number) => {
        setMultipleLabel((prev) => [...prev, { item: items, label: constantLabel, placeholder: placeholder,required : multipleLabel[items-1]?.required ? true : false }])
        setConstantItem(items)
        setConstantPlaceholder(placeholder)
    }
    const handleSubmitButton = () => {
        setShowSubmitButton(!showSubmitButton)
        setFinalForm(lastObjects)
    }
    const handleFormData = () => {
        // const components = finalForm ?finalForm.map((item :any,index :any)=>{return <div key={index}>{item.item}<input className = "form-control" type="text" placeholder={item.placeholder}></input></div>}) : "";
        // console.log("This si " , components)
        let result: any;
        switch (finalForm?.length) {
            case 1:
                result = `<div style="height : 200px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div> <button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button><div>`;
                break;
            case 2:
                result = `<div style="height : 300px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button><div>`
                break;
            case 3:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
            case 4:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
            case 5:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[4].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
            case 6:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
            case 7:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[6].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[6].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
            case 8:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[6].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[6].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[7].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[7].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
            case 9:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[0].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[6].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[6].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[7].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[7].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[8].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[8].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
        }
        var editor = cursorPosition?.getEditor();
        if (!editor) return;
        var div = `${result}`;
        editor.html.insert(div, selectionIndex);
        //setEditorContent((prev)=>prev + result)
        setFormModal(false)
        console.log("This si final data", result)
    }
    var lastObjects: any;
    const handleCheckBoxForm =(value:any , items : number)=>{
        setMultipleLabel((prev) => [...prev, { item: items, required :}])
    }
    return (
        <>
            <div className="mainDiv">
                <Layout title="About Us" moduleName={moduleDetails ? moduleDetails.moduleName : " "}></Layout> <Toaster />
            </div>
            <div className='mainContentDiv'>
                <div className="contentDivMain">
                    <div>
                        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} >
                            <div className="addButton">{open ? <CloseIcon style={{ height: 21 }} /> : <AddIcon style={{ height: 21 }} />}</div>
                        </Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClick} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                            <MenuItem style={{ fontSize: 14 }} onClick={handleClose}> <ViewModuleIcon style={{ marginRight: 20, fontSize: 25 }} />   Divide Module</MenuItem>
                            <MenuItem onClick={handleCloseButton} style={{ fontSize: 14 }}><SmartButtonIcon style={{ marginRight: 17, fontSize: 27 }} /> Button</MenuItem>
                            <MenuItem onClick={handleCloseBackground} style={{ fontSize: 14 }}><WallpaperIcon style={{ marginRight: 20, fontSize: 23 }} />       Background Image</MenuItem>
                            <MenuItem onClick={handleFormElement} style={{ fontSize: 14 }}><ChromeReaderModeIcon style={{ marginRight: 20, fontSize: 23 }} />       Form Element</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }} disabled><AlignHorizontalCenterIcon style={{ marginRight: 20, fontSize: 23 }} /> Align Item</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }} disabled><FormatColorFillIcon style={{ marginRight: 20, fontSize: 23 }} /> Background Color</MenuItem>
                        </Menu>
                    </div>
                    <div>
                        {/* <button className='updateButton' onClick={handleModelChange}>Add Div</button> */}
                        <button className='developerButton' style={{ color: '#ef0b60' }} onClick={handleBootstrap}><BoltIcon style={{ height: 21, color: '#ef0b60' }} />Developer</button>
                        <button className='updateButton' onClick={() => setTagModal(true)}><CodeIcon style={{ height: 21 }} /> Meta Tag</button>
                        <button className="updateButton" onClick={() => window.open('http://localhost:3000/aboutus', '_blank')}><VisibilityIcon style={{ height: 21 }} /> Present View</button>
                        <button className="updateButton" onClick={() => handleUpdate()}><SendIcon style={{ height: 20 }} /> Update</button>
                        <button className="updateButton" onClick={() => handleDelete()}><DeleteIcon style={{ height: 21 }} /></button>
                    </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    <FroalaEditor
                        tag='textarea'
                        model={editorContent}
                        onModelChange={froalaEditorMain}
                        ref={editorReff}
                        config={{
                            charCounterCount: true,
                            height: 450,
                            width: '100%',
                            autoFocus: true,
                            pluginsEnabled: ['fontFamily', 'fontSize', 'colors', 'textColor', 'image', "getPDF", "codeView", "inlineStyle", "inlineClass", "link", "video", "emoticons", "wordPaste", "embedly", "fontAwesome", "draggable", "lists", "paragraphStyle", "paragraphFormat", "quote", "align", "insertHTMLButton", "table"],
                            toolbarButtons: ['insertHTML', 'align', "quote", "draggable", "fontAwesome", "embedly", "wordPaste", "emoticons", "insertVideo", "insertLink", "inlineClass", "inlineStyle", "html", "getPDF", 'insertImage', 'backgroundColor', 'textColor', 'color', 'fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', 'paragraphFormat', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertFile', 'insertTable', 'specialCharacters', 'selectAll', 'clearFormatting', 'print', 'help', 'html', 'undo', 'redo', 'trackChanges', 'markdown', "insertHR", 'uploadFile'],
                        }}
                    />
                </div>
                {JSON.stringify(editorContent)}
                <DivModule showing={modal} onHiding={closeDivModule} closeDiv={closeDiv} />
                <ButtonModule showing={modalButton} onHiding={closeButtonModule} closeButtonDiv={closeButtonModuleDiv} />
                <BackgroundModule showing={backgroundImageModal} onHiding={closeBackground} closeBackground={closeBackgroundModule} />
                <MetaTagModal show={tagModal} onHiding={handleHiding} title={title} description={description} handleMetaData={handleMetaData} handleDescription={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleDescription(e)} handleTitle={handleTitle} />
                <Modal show={developerModal} onHide={() => setDeveloperModal(true)} backdrop="static" keyboard={false} centered size="xl">
                    <Modal.Body style={{ overflow: 'auto' }} >
                        <div className='backgroundButton'>
                            <div className='columnGrid'>
                                <label>HTML</label>
                                <textarea className="form-control" placeholder='Enter HTML Code' rows={22} cols={85} style={{ fontSize: 12, width: 'auto', boxShadow: 'none' }} onChange={(e) => setDeveloperHTML(e.target.value)} />
                            </div>
                            <div className='columnGrid'>
                                <label>CSS</label>
                                <textarea className="form-control" placeholder='Enter CSS Code' rows={22} cols={85} style={{ fontSize: 12, marginLeft: 10, width: 'auto', boxShadow: 'none' }} onChange={(e) => setDeveloperCSS(e.target.value)} />
                            </div>
                        </div>
                        <button className='btn btn-primary' style={{ marginLeft: '88%', fontSize: 12, marginTop: 10 }} onClick={handleDeveloper}>Apply To Module</button>
                    </Modal.Body>
                </Modal>
                {/* For fornm Data*/}
                <Modal show={formModal} onHide={() => setFormModal(true)} backdrop="static" keyboard={false} centered size="xl">
                    <Modal.Body style={{ overflow: 'auto' }} >
                        <div className='backgroundButton'>
                            <div style={{ height: '100%', width: '50%' }}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                            <Tab label="Text Input" {...a11yProp(0)} style={{ fontSize: 12 }} />
                                            <Tab label="Submit Button" {...a11yProp(1)} style={{ fontSize: 12 }} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={value} index={0}>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={formOuter}
                                                onChange={handleChangeForm}
                                                label="Age"
                                                style={{ fontSize: 14, width: '80%', backgroundColor: 'white' }}
                                            >
                                                <MenuItem value="div" style={{ fontSize: 13 }}>Div</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <br></br>
                                        {!showMore ? <div className="formButtons" >
                                            <button className="formButtonClick" style={{ width: '40%', alignSelf: 'center', height: 40, fontSize: 13, marginTop: 10, marginBottom: 20 }} onClick={() => setShowMore(true)}>Add Text Input</button>
                                        </div> : <button className="formButtonClick" style={{ width: '50%', fontSize: 13, height: 40, marginLeft: '20%', marginTop: 10 }} >Add Text Input</button>}
                                        {showMore ?
                                            <>
                                                <button className='formButtonClick' style={{ marginLeft: 30, width: '7%', border: '1px solid #38b152' }} onClick={handlePlusArray}><AddIcon style={{ fontSize: 17, color: '#38b152' }} /></button><br></br>
                                                <div className='backgroundButton'>
                                                    <div style={{ border: '1px solid #8fc4ff', marginTop: 20, borderRadius: 8, width: '80%', marginLeft: 40 }}>
                                                        <div className='backgroundButton'>
                                                            <div style={{ width: '75%' }}>
                                                                <div className='backgroundButton'>
                                                                    &nbsp;
                                                                    <FormLabel style={{ fontSize: 13, marginTop: 5, marginLeft: '5%' }}>Label  </FormLabel>
                                                                    <input type='text' className="form-control " style={{ height: 24, width: '100%', fontSize: 12, marginLeft: 70, marginTop: 5 }} onChange={(e) => setInitialLabel(e.target.value)}></input>
                                                                </div>
                                                                <div className='backgroundButton' style={{ marginTop: 2 }}>
                                                                    &nbsp;
                                                                    <FormLabel style={{ fontSize: 13, marginLeft: '5%' }}>Placeholder  </FormLabel>
                                                                    <input type='text' className="form-control" style={{ height: 24, width: '100%', marginLeft: 33, fontSize: 12, marginBottom: 5 }} onChange={(e) => setInitialPlaceholder(e.target.value)}></input>
                                                                </div>
                                                            </div>
                                                            <div style={{ width: '25%' }}>
                                                                <button className="formButtonClick" style={{ marginLeft: '30%', width: 'auto', height: 25, marginTop: '13%', border: '1px solid #f71701' }} onClick={() => setShowMore(false)}>
                                                                    <RemoveIcon style={{ fontSize: 17, color: '#f71701' }} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='backgroundButton' style={{ fontSize: 12, marginTop: 12 }}>
                                                        <div style={{ marginTop: 14 }}> <Checkbox defaultChecked size="small" checked={intialRequired} onClick={() => setIntialReqiured(!intialRequired)} /></div>
                                                        <label style={{ marginTop: 24 }}>Required</label>
                                                    </div>
                                                    {formArray.length < 1 ? <ArrowCircleRightIcon className="nextButton" /> : ""}
                                                </div>
                                                {formArray ? formArray.map((item, index) => (
                                                    <div className='backgroundButton'>
                                                        <div style={{ border: '1px solid #8fc4ff', marginTop: 20, borderRadius: 8, width: '80%', marginLeft: 40 }}>
                                                            <div className='backgroundButton'>
                                                                <div style={{ width: '75%' }}>
                                                                    <div className='backgroundButton'>
                                                                        &nbsp;
                                                                        <FormLabel style={{ fontSize: 13, marginTop: 5, marginLeft: '5%' }}>Label</FormLabel>
                                                                        <input type='text' className="form-control" style={{ height: 24, width: '100%', marginLeft: 70, fontSize: 12, marginTop: 5 }} onChange={(e) => handleDynamicLabel(e.target.value, item)}></input>
                                                                    </div>
                                                                    <div className='backgroundButton' style={{ marginTop: 2 }}>
                                                                        &nbsp;
                                                                        <FormLabel style={{ fontSize: 13, marginLeft: '5%' }}>Placeholder  </FormLabel>
                                                                        <input type='text' className="form-control" style={{ height: 24, width: '100%', marginLeft: 33, fontSize: 12, marginBottom: 5 }} onChange={(e) => handleDynamicPlaceholder(e.target.value, item)}></input>
                                                                    </div>
                                                                </div>
                                                                <div style={{ width: '25%' }}>
                                                                    <button className="formButtonClick" style={{ marginLeft: '30%', width: 'auto', height: 25, marginTop: '13%', border: '1px solid #f71701' }} onClick={(e) => handleRemove(e, item)}>
                                                                        <RemoveIcon style={{ fontSize: 17, color: '#f71701' }} />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='backgroundButton' style={{ fontSize: 12, marginTop: 12 }}>
                                                            <div style={{ marginTop: 14 }}> <Checkbox defaultChecked size="small" checked={} onClick={(e)=>handleCheckBoxForm(e,item)}/></div>
                                                            <label style={{ marginTop: 24 }}>Required</label>
                                                        </div>
                                                        {/* {index===formArray.length-1?  
                                        <ArrowCircleRightIcon className="nextButton" style={{border:'none'}} onClick={(e)=>handleChange(e,1)}/>
                                      : ""}  */}
                                                    </div>
                                                )) : ""}
                                                {formArray.length > 0 ?
                                                    <div className='backgroundButton' >
                                                        <button className='btn btn-primary' style={{ fontSize: 12, marginLeft: 'auto' }}> Next <KeyboardArrowRightIcon style={{ fontSize: 21 }} onClick={(e) => handleChange(e, 1)}></KeyboardArrowRightIcon></button>
                                                    </div>
                                                    : ""}
                                            </>
                                            : ""}
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <div className='formButtons'>
                                            <button className="formButtonClick" style={{ width: '40%', alignSelf: 'center', height: 40, fontSize: 13 }} onClick={handleSubmitButton}>Add Submit Button</button>
                                            <div className='backgroundButton' style={{ fontSize: 14, marginTop: 30, alignSelf: 'center' }}>
                                                <h6 style={{ marginTop: 4 }}>Text</h6>
                                                <input type="text" className='form-control' placeholder='Change text' style={{ fontSize: 12, marginLeft: '10%' }} onChange={(e) => setButtonText(e.target.value)}></input>
                                            </div>
                                            <button className="btn btn-primary" style={{ fontSize: 12, width: '50%', alignSelf: 'center', marginTop: '30%' }} onClick={handleFormData}>Apply to module</button>
                                        </div>
                                    </TabPanel>
                                </Box>
                            </div>
                            <div style={{ height: '100%', width: '50%', borderLeft: '1px solid #a4a4a4' }}>
                                <div className='backgroundButton'>
                                    <h5 style={{ marginLeft: '30%' }}>Output</h5>
                                    <div style={{ marginLeft: 'auto' }} onClick={() => setFormModal(false)}><CloseIcon style={{ fontSize: 25 }} /></div>
                                </div>
                                {/* For output make it auto*/}
                                <div style={{ height: 460, width: 550, marginLeft: 10, border: '1px solid #e1e1e1' }} className='column'>
                                    {showMore ?
                                        <div className="backgroundButton" style={{ marginTop: 30, fontSize: 14 }}>
                                            <h6 style={{ fontSize: 13, marginRight: 'auto' }}>{JSON.stringify(intialLabel)}</h6>
                                            {intialRequired ? <h6 style={{ color: 'red' }}>*</h6> : ""}
                                            <input type="text" className='form-control' style={{ height: 30, width: '60%', marginLeft: 60, fontSize: 12 }} placeholder={JSON.stringify(intialPlaceholder)}></input>
                                        </div> : ""}
                                    {formArray ? formArray.map((items, index) => {
                                        const filteredArray = multipleLabel.filter(obj => obj.item === constantItem);
                                        const lastMatchingItem = filteredArray[filteredArray.length - 1];
                                        lastObjects = Object.values(
                                            multipleLabel.reduce((acc: { [key: number]: any }, cur) => {
                                                if (cur.item != null) {
                                                    acc[cur.item] = cur;
                                                }
                                                return acc;
                                            }, {})
                                        );
                                        return <>
                                            <div className='backgroundButton' style={{ marginTop: 10 }}>
                                                <h6 style={{ fontSize: 13, marginRight: 'auto', marginTop: 7 }}>{lastMatchingItem?.item === items ? JSON.stringify(lastMatchingItem.label) : lastObjects[index] ? JSON.stringify(lastObjects[index].label) : ""}</h6>
                                                <input type="text" className='form-control' style={{ height: 30, width: '60%', marginLeft: 60, fontSize: 12 }} placeholder={lastMatchingItem?.item === items ? JSON.stringify(lastMatchingItem.placeholder) : lastObjects[index] ? JSON.stringify(lastObjects[index].placeholder) : ""}></input>
                                            </div>
                                        </>
                                    }) : ""}
                                    {showSubmitButton ? <button className='btn btn-primary submitButton' id="postIt" style={{ fontSize: 12, marginTop: 20 }}>{buttonText ? buttonText : "Submit"}</button> : ""}
                                </div>
                            </div>
                        </div>
                        {/* <button className='btn btn-primary' style={{marginLeft :'88%' ,fontSize : 12 ,marginTop : 10}} onClick={handleDeveloper}>Apply To Module</button> */}
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default AboutUsDynamic;