import * as React from 'react';
import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router";
import Layout from "../../../Common/Layout/layout";
import axios from "../../../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import 'froala-editor/js/plugins/char_counter.min.js';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster, useToasterStore } from 'react-hot-toast';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import { styled } from '@mui/material/styles';
import Popover from '@mui/material/Popover';
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
import Modal from 'react-bootstrap/Modal';
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
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl, { formControlClasses } from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { CloseButton } from 'react-bootstrap';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CircleIcon from '@mui/icons-material/Circle';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import SquareIcon from '@mui/icons-material/Square';
import { HexColorPicker } from "react-colorful";
import outsideClickOutside from "../../../Common/outsideClickOutside";
import outsideClickSecond from "../../../Common/outsideClickSecond"
import outsideClickThird from '../../../Common/outsideClickThird'
import { Form } from 'react-bootstrap';
import Iframe from 'react-iframe'


type moduleDetail = {
    moduleName: String
    moduleId: Number
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
type Data = {
    columnNumber: Number//make cases
    rowNumber: Number //if the number is 0, then only column
    spacing: Number
    backgroundColor: String
    border: String
    shape: String
    complex: string
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
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function AboutUsDynamic() {
    const [moduleDetails, setModuleDetails] = useState<moduleDetail>()
    const [data, setData] = useState<Data>({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    const [insertCode, setInsertCode] = useState<string>("")
    const [insertDiv, setInsertDiv] = useState<string>("")
    const [editorContent, setEditorContent] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false)
    const [modalBackground, setModalBackground] = useState<boolean>(false)
    const [imageURL, setImageURL] = useState<string>("")
    const [textOverImage, setTextOverImage] = useState<string>("")
    const [secondBackground, setSecondBackground] = useState(false)
    const [secondColor, setSecondColor] = useState("#ccf6c2")
    const popoverSecond = React.useRef<HTMLInputElement>(null);
    const closeSecond = useCallback(() => setSecondBackground(false), [])
    outsideClickSecond(popoverSecond, closeSecond)

    const [thirdBackground, setThirdBackground] = useState(false)
    const [thirdColor, setThirdColor] = useState("#f9e0c0")
    const popoverThird = React.useRef<HTMLInputElement>(null);
    const closeThird = useCallback(() => setThirdBackground(false), [])
    outsideClickThird(popoverThird, closeThird)
    let { id } = useParams();
    //For add button
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        a11yProps(0)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setModal(true)
        a11yProps(0)
    };
    //For Modal tab
    const [value, setValue] = React.useState(0);
    // const [customization , setCustomization] = useState<boolean>(false)
    const [codeSelected, setCodeSelected] = useState<boolean>(false)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    //For Grid view
    const [spacing, setSpacing] = React.useState(0);
    const handleChangeGrid = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value));
    };

    //For Bottom Navigation
    const [valueBottom, setValueBottom] = React.useState<number>(0);
    function handleBottomNavigation(event: React.MouseEvent<HTMLButtonElement>) {
        console.log(valueBottom)
    }
    //For background select in div module
    const [color, setColor] = useState("#cce4ff");
    const popover = React.useRef<HTMLInputElement>(null);
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);
    outsideClickOutside(popover, close);

    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8080/aboutUs").then(response => {
            if (response.data == "Logout") {
                toast.error("Session expired")
                setTimeout(() => {
                    navigate("/admin")
                }, 1000)
            } else {
                console.log(response.data[0].Modules[`${id}`])
                setModuleDetails(response.data[0].Modules[`${id}`])
                setEditorContent(response.data[0].Modules[`${id}`].data)
            }
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setData((prev) => ({ ...prev, backgroundColor: color }))
    }, [color])
    function handleUpdate() {
        const obj = {
            moduleId: moduleDetails?.moduleId,
            moduleName: `${moduleDetails?.moduleName}`,
            data: `${editorContent}`
        }
        console.log(obj, typeof moduleDetails?.moduleId)
        axios.post("http://localhost:8080/aboutUs/update", obj)
            .then(response => {
                if (response.data == "Logout") {
                    toast.error("Session expired")
                    setTimeout(() => {
                        navigate("/admin")
                    }, 1000)
                } else {
                    toast.success("Updated Successfully")
                    console.log(response)
                }
            })
            .catch(err => console.log(err))
    }

    // function handleButton() {
    //     setEditorContent((prev) => prev +
    //         "<span style='display: inline-block; text-align: center; width : 170px ; height : 40px ; background-color : #0957a6; border-radius : 15px ; color : white'>Type something</span>")
    // }
    // function handleTwoDiv() {
    //     //For two divs do not delete it
    //     setEditorContent((prev) => prev +
    //         "<div style='display : flex ; flex-direction: row;'><div style='width : 50% ;'>Hello</div><div style='width : 50% '>World</div></div>")
    //     setModal(false)
    // }

    // function handleThreeDiv() {
    //     setEditorContent((prev) => prev +
    //         "<div style='display : flex ; flex-direction: row;'><div style='width : 33% ;'>Hello</div><div style='width : 33% '>World</div><div style='width : 33% '>World</div></div>")
    //     setModal(false)
    // }
    function handleDelete() {
        const obj = { moduleId: `${moduleDetails?.moduleId}`}
        axios.post("http://localhost:8080/aboutUs/delete", obj).then(response => console.log(response)).catch(err => console.log(err))
        navigate("/admin/aboutus")
        toast.error("Deleted successfully")
    }
    function handleBackgroundModal() {
        setEditorContent((prev) => prev + `<div style='position: relative;text-align: center;color: white;'><img src=${imageURL} style='width:100%'><div style='position: absolute;  top: 1px; left: 1px; width : 400px; height : 200px; background-color : #ffffff; color : #000000; word-wrap: break-word;'>${textOverImage}</div></div>`)
        setModalBackground(false)
    }
    //insertCode Modal
    const [anchorElInsert, setAnchorElInsert] = React.useState<HTMLButtonElement | null>(null);
    const handleClickInsert = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElInsert(event.currentTarget);
    };
    const handleCloseInsert = () => {
        setAnchorElInsert(null);
    };
    const openInsert = Boolean(anchorElInsert);
    const idInsert = openInsert ? 'simple-popover' : undefined;
    function handleInsertCode() {
        setEditorContent((prev) => prev + `${insertCode}`);
        console.log(insertCode)
        setModal(false);
        setInsertCode("")
    }
    let insertCodeModal = `<!doctype html> <html> <head> </head> <body><div style='background-color : red'> ${insertCode}</div></body> </html>`;
    //For Creating Div Module
    const [anchorElDiv, setAnchorElDiv] = React.useState<HTMLButtonElement | null>(null);
    const handleClickDiv = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElDiv(event.currentTarget);
        if (data.columnNumber === 1 && data.rowNumber === 0) {
            setInsertDiv('<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; gap: 0px 0px;"> <div style="background-color : #cce4ff;min-height : 191px;">Div 1</div> </div> ')
        }
        if (data.columnNumber === 3 && data.rowNumber === 0) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 1px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;border : 1px solid black">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 1px solid black">Div 3 </div></div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 3px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;border : 3px solid black">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 3px solid black">Div 3 </div></div> `)
            if (data.border === "thick")  setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 5px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;border : 5px solid black">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}  ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 5px solid black">Div 3 </div></div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"};  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px">Div 3 </div></div> `)
        }
        if (data.columnNumber === 2 && data.rowNumber === 0) {
            debugger;
            setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing}px;"> <div style="background-color : #cce4ff;min-height : 191px">Div 1</div> <div style="background-color : #fbcfcf">Div 2</div></div> `)
        }
        if (data.columnNumber === 4 && data.rowNumber === 0) {
            if (data.border === "sharp")  setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;  border : 1px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};  border : 1px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;  border : 1px solid black; ">Div 3 </div><div style="background-color : #f9e0c0;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 1px solid black";">Div 4</div></div> `)
            if (data.border === "thin")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : #cce4ff ;min-height : 191px;" >Div 1</div> <div style="grid-area: b;background-color : #fbcfcf;">Div 2</div> <div style="grid-area: c;background-color : #ccf6c2;">Div 3</div></div>`) 
            if (data.border === "thick")  setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;  border : 5px solid black ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};   border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3 </div><div style="background-color : #f9e0c0;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 5px solid black";">Div 4</div></div> `)
            if (data.border === "none")  setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;min-height : 191px ;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3 </div><div style="background-color : #f9e0c0;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div> `) 
        }
        if (data.columnNumber === 2 && data.rowNumber === 1) {
            if (data.border === "sharp")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};border : 1px solid black; ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 1px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"};border : 1px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)
            if (data.border === "thin")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px;border : 3px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 3px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}; border : 3px solid black;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)         
            if (data.border === "thick")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px;border : 5px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 5px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}; border : 5px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)        
            if (data.border === "none")   setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)
        }
        if (data.columnNumber === 3 && data.rowNumber === 1) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 1px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 1px solid black ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;border : 1px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">This </div><div style="grid-area: d;background-color : #f9e0c0; border : 1px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 3px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 3px solid black;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 3px solid black;">This </div><div style="grid-area: d;background-color : #f9e0c0; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 3px solid black;">Div 4</div></div> `)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};border : 5px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 5px solid black;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 5px solid black;">This </div><div style="grid-area: d;background-color : #f9e0c0; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 5px solid black;">Div 4</div></div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">This </div><div style="grid-area: d;background-color : #f9e0c0; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div> `)
        }
        if (data.columnNumber === 3 && data.rowNumber === 1 && data.complex === "Left Big") {
            if (data.border === "sharp")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;border : 1px solid black;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;">Div 2</div><div style="grid-area: c;background-color : #fbcfcf;border : 1px solid black; ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 1px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);
            if (data.border === "thin")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;border : 3px solid black;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;border : 3px solid black;">Div 2</div><div style="grid-area: c;border : 3px solid black;background-color : #fbcfcf; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 3px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);    
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;border : 5px solid black;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;">Div 2</div><div style="grid-area: c;border : 5px solid black;background-color : #fbcfcf; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 5px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);      
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;">Div 2</div><div style="grid-area: c;background-color : #fbcfcf; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);     
    }
        if (data.columnNumber === 2 && data.rowNumber === 2) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 1px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border : 1px solid black;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;border : 1px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 1px solid black;background-color : #f9e0c0; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};  border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"};  border : 3px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;background-color : #f9e0c0;  border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 5px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border : 5px solid black;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 5px solid black;background-color : #f9e0c0; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
            if (data.border === "none")  setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;background-color : #f9e0c0; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
        }
    };
    const handleCloseDiv = () => {
        setAnchorElDiv(null);
    };
    const openDiv = Boolean(anchorElDiv);
    const idDiv = openDiv ? 'simple-popover' : undefined;
    let insertDivModal = `<!doctype html> <html> <head> </head> 
    <body>
    ${insertDiv}
    </body> </html>`

    function handleInsertDiv() {
        setEditorContent((prev) => prev + `${insertDiv}`);
        setModal(false);
        setCodeSelected(false)
        setValueBottom(0);
        setSpacing(0)
        setData({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    }
    function handleCloseFullModal() {
        debugger;
        console.log(codeSelected)
        setModal(false)
        setCodeSelected(false)
        setValueBottom(0);
        setSpacing(0);
        setData({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    }

    return (
        <>
            <div className="mainDiv">
                <Layout title="About Us" moduleName={moduleDetails ? moduleDetails.moduleName : " "}></Layout> <Toaster />
            </div>
            <div className='mainContentDiv'>
                <div className="contentDiv">
                    <div>
                        <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}  aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} > 
                        <div className="addButton"><AddIcon /></div>
                        </Button>
                        <Menu  id="basic-menu"  anchorEl={anchorEl}  open={open}  onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                            <MenuItem style={{ fontSize: 14 }} onClick={handleClose}> <ViewModuleIcon style={{ marginRight: 20, fontSize: 29 }} /> Divide Module</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }}><SmartButtonIcon style={{ marginRight: 20, fontSize: 31 }} /> Button</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }}><WallpaperIcon style={{ marginRight: 20, fontSize: 26 }} />   Background Image</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }}><AlignHorizontalCenterIcon style={{ marginRight: 20, fontSize: 28 }} /> Align Item</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }}><FormatColorFillIcon style={{ marginRight: 20, fontSize: 27 }} /> Background Color</MenuItem>
                        </Menu>
                    </div>
                    {/* <Button variant="secondary" style={{ marginLeft: 8, marginTop: 4 ,background : "white" ,color : "black"}} onClick={() => setModal(true)}>Divide Module <ViewModuleIcon/></Button>
                <Button variant="secondary" style={{ marginLeft: 5, marginTop: 4 ,background : "white" ,color : "black" }} onClick={() => handleButton()}>Background Color <FormatColorFillIcon/></Button>
                <Button variant="secondary" style={{ marginLeft: 5, marginTop: 4 ,background : "white" ,color : "black"}} onClick={() => handleButton()}>Add Button <SmartButtonIcon/></Button>
                <Button variant="secondary" style={{ marginLeft: 5, marginTop: 4 ,background : "white" ,color : "black"}} onClick={() => handleBackground()}>Background Image with Text<WallpaperIcon/></Button>
                <Button variant="secondary" style={{ marginLeft: 5, marginTop: 4 ,background : "white" ,color : "black"}} onClick={() => handleUpdate()}>Align Items <AlignHorizontalCenterIcon/></Button> */}
                    <div >
                        <button className="updateButton" ><VisibilityIcon /> Preview</button>
                        <button className="updateButton" onClick={() => handleUpdate()}><SendIcon /> Update</button>
                        <button className="updateButton" onClick={() => handleDelete()}><DeleteIcon /></button>
                    </div>
                </div>
                <div style={{ marginLeft: 10, marginTop: 10, marginRight: 10 }}>
                    <FroalaEditor
                        tag='textarea'
                        model={editorContent}
                        onModelChange={(newContent: string) => setEditorContent(newContent)}
                        config={{
                            charCounterCount: true,
                            height: 460,
                            width: '100%',
                            autoFocus: true,
                            pluginsEnabled: ['fontFamily', 'fontSize', 'colors', 'textColor', 'image', "getPDF", "codeView", "inlineStyle", "inlineClass", "link", "video", "emoticons", "wordPaste", "embedly", "fontAwesome", "draggable", "lists", "paragraphStyle", "paragraphFormat", "quote", "align", "insertHTMLButton", "table"],
                            toolbarButtons: ['insertHTML', 'align', "quote", "draggable", "fontAwesome", "embedly", "wordPaste", "emoticons", "insertVideo", "insertLink", "inlineClass", "inlineStyle", "html", "getPDF", 'insertImage', 'backgroundColor', 'textColor', 'color', 'fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', 'paragraphFormat', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertFile', 'insertTable', 'specialCharacters', 'selectAll', 'clearFormatting', 'print', 'help', 'html', 'undo', 'redo', 'trackChanges', 'markdown', "insertHR", 'uploadFile'],
                        }}
                    />
                    <div>
                    </div>
                </div>
                {/*Modal for Div module */}
                <Modal
                    show={modal}
                    onHide={() => setModal(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >

                    <Modal.Body style={{ overflow: 'auto' }} >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <div className="InsertCodeModal">
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                    <Tab label="Select Column Type" {...a11yProps(0)} onClick={() => setCodeSelected(false)} />
                                    <Tab label="Apply Code" {...a11yProps(1)} onClick={() => setCodeSelected(true)} />
                                </Tabs>
                                <Tab label={<ClearIcon onClick={() => handleCloseFullModal()} />} ></Tab>
                            </div>
                        </Box>
                        {!codeSelected && valueBottom !== 1 && valueBottom !== 2 ?
                            <>
                                <div className="wrapper section">
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 1, rowNumber: 0, backgroundColor: color, complex: "none" })); setValueBottom(1) }}><CropSquareOutlinedIcon style={{ fontSize: 31 }} className='divisionModule' />  Make Full width Column</div>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 2, rowNumber: 0, backgroundColor: color, complex: "none" })); setValueBottom(1) }}><SplitscreenIcon style={{ fontSize: 31 }} className='divisionModule' />  Divide into Two Column</div>
                                </div>
                                <div className='wrapper'>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 3, rowNumber: 0, backgroundColor: color, complex: "none" })); setValueBottom(1) }}> <ViewWeekOutlinedIcon style={{ fontSize: 31 }} className='divisionModule' />  Divide into Three Column</div>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 4, rowNumber: 0, backgroundColor: color, complex: "none" })); setValueBottom(1) }}><CalendarViewWeekIcon style={{ fontSize: 31 }} className='divisionModule' />  Divide  into Four Column</div>
                                </div>
                                <div className='wrapper'>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 3, rowNumber: 1, backgroundColor: color, complex: "none" })); setValueBottom(1) }}> <TableChartOutlinedIcon style={{ fontSize: 31 }} className='divisionModule' /> Grid of 1 row & 3 column</div>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 2, rowNumber: 1, backgroundColor: color, complex: "none" })); setValueBottom(1) }}><ViewComfyOutlinedIcon style={{ fontSize: 31 }} className='divisionModule' /> Grid of 1 row & 2 column</div>
                                </div>
                                <div className='wrapper'>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 3, rowNumber: 1, backgroundColor: color, complex: "Left Big" })); setValueBottom(1) }}> <ViewQuiltOutlinedIcon style={{ fontSize: 31 }} className='divisionModule' /> Grid of 1 row & 3 colum</div>
                                    <div className="first" onClick={() => { setData((prev) => ({ ...prev, columnNumber: 2, rowNumber: 2, backgroundColor: color, complex: "none" })); setValueBottom(1) }}><GridViewOutlinedIcon style={{ fontSize: 31 }} className='divisionModule' />  Grid of Four row</div>
                                </div>

                                <Box sx={{ width: 'auto' }}>
                                    <BottomNavigation
                                        showLabels
                                        value={valueBottom}
                                        onChange={(event, newValue) => {
                                            setValueBottom(newValue);
                                        }}
                                    >
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa1} style={{ fontSize: 11, paddingTop: 30 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa2} style={{ fontSize: 11, paddingTop: 30 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa3} style={{ fontSize: 11, paddingTop: 30 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                    </BottomNavigation>
                                </Box>
                            </>
                            : ""}
                        {!codeSelected && valueBottom === 1 ?
                            <>
                                <TabPanel value={value} index={0}>
                                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                                        <Grid item xs={12} style={{ marginTop: 10 }}>
                                            {/*For 1 column */}
                                            {data.columnNumber === 1 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper
                                                                sx={{
                                                                    height: 130,
                                                                    width: 80,
                                                                    border: '1px solid #77aadc',
                                                                    backgroundColor: '#efebeb'
                                                                }}
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                : ""}

                                            {/*For 2 column */}
                                            {data.columnNumber === 2 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0, 1].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper
                                                                sx={{
                                                                    height: 130,
                                                                    width: 80,
                                                                    border: '1px solid #77aadc',
                                                                    backgroundColor: '#efebeb'
                                                                }}
                                                            />
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                : ""}

                                            {/*For 3 column */}
                                            {data.columnNumber === 3 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0, 1, 2].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#efebeb' }}/>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                                : ""}

                                            {/* For 4 column */}
                                            {data.columnNumber === 4 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0, 1, 2, 3].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper sx={{ height: 130,  width: 80, border: '1px solid #77aadc', backgroundColor: '#efebeb' }}/>
                                                        </Grid>
                                                    ))}
                                                </Grid> : ""}

                                            {/* For 3 column  and 1 row no complex*/}
                                            {data.columnNumber === 3 && data.rowNumber === 1 && data.complex !== "Left Big" ?
                                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={spacing}>
                                                    <Box gridColumn="span 12"> <Paper sx={{ height: 40, width: 420, border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                    <Box gridColumn="span 4"> <Paper sx={{ height: 80, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />  </Box>
                                                    <Box gridColumn="span 4">  <Paper sx={{ height: 80, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                    <Box gridColumn="span 4">  <Paper sx={{ height: 80, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                </Box> : ""}

                                            {/* For 2 column  and 1 row no complex*/}
                                            {data.columnNumber === 2 && data.rowNumber === 1 && data.complex !== "Left Big" ?
                                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={spacing}>
                                                    <Box gridColumn="span 12"> <Paper sx={{ height: 40, width: 420, border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                    <Box gridColumn="span 6">   <Paper sx={{ height: 80, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />  </Box>
                                                    <Box gridColumn="span 6"> <Paper sx={{ height: 80, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                </Box> : ""}

                                            {/* For 2 column  and 1 row with complex*/}
                                            {data.columnNumber === 3 && data.rowNumber === 1 && data.complex === "Left Big" ?
                                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridTemplateRows="repeat(2,1fr)" gap={spacing}>
                                                    <Box gridRow="span 4" gridColumn="span 4">   <Paper sx={{ height: 120, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />  </Box>
                                                    <Box gridColumn="span 8"> <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />  </Box>
                                                    <Box gridColumn="span 4">   <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                    <Box gridColumn="span 4">  <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                </Box>
                                                : ""}

                                            {/*For 4 equal sizes*/}
                                            {data.columnNumber === 2 && data.rowNumber === 2 && data.complex !== "Left Big" ?
                                                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={spacing}>
                                                    <Box gridColumn="span 6">  <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                    <Box gridColumn="span 6">  <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} /> </Box>
                                                    <Box gridColumn="span 6">  <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />  </Box>
                                                    <Box gridColumn="span 6">   <Paper sx={{ height: 60, width: 'auto', border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />  </Box>
                                                </Box>
                                                : ""}

                                    </Grid>
                                        <Grid item xs={12}>
                                            <Paper sx={{ p: 2 }}>
                                                <Grid container style={{ height: 60 }}>
                                                    <Grid item>
                                                        <FormControl component="fieldset">
                                                            <FormLabel component="legend" style={{ fontSize: 15 }}>Select Spacing</FormLabel>
                                                            <RadioGroup name="spacing"  aria-label="spacing"  value={spacing.toString()}   onChange={handleChangeGrid}  row >
                                                                {[0, 1, 2, 3, 4].map((value) => (  // removed 0.5,8 and 12
                                                                    <FormControlLabel key={value} value={value.toString()}  control={<Radio />} label={value.toString()}  style={{ height: 20, width: 40, marginLeft: 3 }}/>
                                                                ))}
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                    <Button variant="contained" style={{ marginLeft: 320, marginTop: 5 }} onClick={() => { setData((prev) => ({ ...prev, spacing: spacing })); setValueBottom(2); }}>Next
                                        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 18, marginLeft: 10 }} />
                                    </Button>
                                </TabPanel>
                                <Box sx={{ width: 'auto' }}>
                                    <BottomNavigation  showLabels  value={valueBottom}   onChange={(event, newValue) => { setValueBottom(newValue); }} >
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa1} style={{ fontSize: 11, paddingTop: 20 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa2} style={{ fontSize: 11, paddingTop: 20 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa3} style={{ fontSize: 11, paddingTop: 20 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                    </BottomNavigation>
                                </Box>
                            </>
                            : ""}

                        {!codeSelected && valueBottom === 2 ?
                            <>
                                <div className="backgroundFlex">
                                    <label style={{ marginTop: 10 }}>Shape</label>
                                    <div>
                                        <FormControl>
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" style={{ marginLeft: 45, marginTop: 10 }} name="row-radio-buttons-group"defaultValue="Square" onChange={(e) => { setData((prev) => ({ ...prev, shape: e.target.value })) }} >
                                                <FormControlLabel value="Square" control={<Radio />} label={"Square"} style={{ height: 30 }} onClick={() => setData((prev) => ({ ...prev, shape: "Square" }))} />
                                                <FormControlLabel value="Rounded" control={<Radio />} label={"Rounded Square"} style={{ height: 30 }} onClick={() => setData((prev) => ({ ...prev, shape: "Rounded" }))} />
                                                <FormControlLabel value="Circle" control={<Radio />} label={"Circle"} style={{ height: 30 }} onClick={() => setData((prev) => ({ ...prev, shape: "Circle" }))}></FormControlLabel>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='backgroundFlex'>
                                    <label style={{ marginTop: 23 }}>Border</label>
                                    <div style={{ marginTop: 12 }}>
                                        <FormControl>
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" style={{ marginLeft: 100, marginTop: 7 }} name="row-radio-buttons-group"   defaultValue="none" onChange={(e) => setData((prev) => ({ ...prev, border: e.target.value }))} >
                                                <FormControlLabel value="sharp" control={<Radio />} label={<FontAwesomeIcon icon={faGripLinesVertical} style={{ fontSize: 28, width: 7 }} />} onClick={() => setData((prev) => ({ ...prev, border: "Sharp" }))} /> &nbsp;&nbsp;
                                                <FormControlLabel value="thin" control={<Radio />} label={<FontAwesomeIcon icon={faGripLinesVertical} style={{ fontSize: 31, width: 10 }} />} onClick={() => setData((prev) => ({ ...prev, border: "Thin" }))} />&nbsp;&nbsp;
                                                <FormControlLabel value="thick" control={<Radio />} label={<FontAwesomeIcon icon={faGripLinesVertical} style={{ fontSize: 35 }} ></FontAwesomeIcon>} onClick={() => setData((prev) => ({ ...prev, border: "Thick" }))}></FormControlLabel>&nbsp;&nbsp;&nbsp;
                                                <FormControlLabel value="none" control={<Radio />} label={"None"} onClick={() => setData((prev) => ({ ...prev, border: "None" }))}></FormControlLabel>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='backgroundFlex' style={{ marginTop: 25 }}>
                                    <label>Background Color</label>
                                    <div className="picker" style={{ marginLeft: 90 }}>
                                        <div  className="swatch"  style={{ backgroundColor: color, marginTop: 3 }}  onClick={() => toggle(true)} />
                                        {isOpen && ( <div className="popover" ref={popover}><HexColorPicker color={color} onChange={setColor} /></div> )}
                                    </div>
                                    <input type="text" className='form-control' style={{ width: 100, marginLeft: 20 }} value={color} onChange={(e) => { setColor(e.target.value) }}></input>
                                    <div style={{ marginLeft: 20, marginTop: 5 }}>
                                        Div 1
                                    </div>
                                </div>

                                <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                    <div className="picker">
                                        <div  className="swatch"  style={{ backgroundColor: secondColor, marginTop: 3 }}  onClick={() => setSecondBackground(true)}/>
                                        {secondBackground && (<div className="popover" ref={popoverSecond}> <HexColorPicker color={secondColor} onChange={setSecondColor} /> </div> )}
                                    </div>
                                    <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={secondColor} onChange={(e) => { setSecondColor(e.target.value) }}></input>
                                    <div style={{ marginLeft: 20, marginTop: 5 }}>
                                        Div 2
                                    </div>
                                </div>
                                <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                    <div className="picker">
                                        <div  className="swatch"   style={{ backgroundColor: thirdColor, marginTop: 3 }}  onClick={() => setThirdBackground(true)} />
                                        {thirdBackground && (
                                            <div className="popover" ref={popoverThird}>  <HexColorPicker color={thirdColor} onChange={setThirdColor} /> </div>
                                        )}
                                    </div>
                                  
                                    <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={thirdColor} onChange={(e) => { setThirdColor(e.target.value) }}></input>
                                    <div style={{ marginLeft: 20, marginTop: 5 }}> Div 3  </div>
                                </div>


                                <div className='previewButtonDiv'>
                                    <div>
                                        <Button aria-describedby={idDiv} variant="contained" style={{ backgroundColor: 'white', color: 'gray' }} onClick={handleClickDiv}>
                                            <VisibilityIcon />&nbsp; Preview
                                        </Button>
                                        <Popover  id={idDiv}    open={openDiv}   anchorEl={anchorElDiv}   onClose={handleCloseDiv}   anchorReference="anchorPosition"    anchorPosition={{ top: 200, left: 868 }}    anchorOrigin={{    vertical: 'center',   horizontal: 'right', }} transformOrigin={{ vertical: 'center',    horizontal: 'left',  }} >
                                            <iframe srcDoc={insertDivModal} width={400} height={400} sandbox='' ></iframe>
                                        </Popover>
                                    </div>
                                    <div>
                                        <button type="button" className='btn btn-primary' style={{ marginLeft: 20 }} onClick={() => handleInsertDiv()}>Apply to Module</button>
                                    </div>
                                </div>
                                <Box sx={{ width: 'auto' }}>
                                    <BottomNavigation
                                        showLabels   value={valueBottom} onChange={(event, newValue) => {  setValueBottom(newValue);}} >
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa1} style={{ fontSize: 11, paddingTop: 40 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa2} style={{ fontSize: 11, paddingTop: 40 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa3} style={{ fontSize: 11, paddingTop: 40 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                    </BottomNavigation>
                                </Box>
                            </>
                            : ""
                        }
                        <TabPanel value={value} index={1}>
                            <Popover
                                id={idInsert}
                                open={openInsert}
                                anchorEl={anchorElInsert}
                                onClose={handleCloseInsert}
                                anchorReference="anchorPosition"
                                anchorPosition={{ top: 200, left: 868 }}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'left',  }}  >
                                <iframe srcDoc={insertCodeModal} width={400} height={400} sandbox='' ></iframe>
                            </Popover>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={11} placeholder="Insert your code here!" value={insertCode} onChange={(e) => setInsertCode(e.target.value)} />
                                </Form.Group>
                            </Form>
                            <div className='previewButton'>
                                <div>
                                    <Button aria-describedby={idInsert} variant="contained" style={{ backgroundColor: 'white', color: 'gray' }} onClick={handleClickInsert}>
                                        <VisibilityIcon />&nbsp; Preview
                                    </Button>
                                </div>
                                <div>
                                    <button type="button" className='btn btn-primary' style={{ marginLeft: 20 }} onClick={() => handleInsertCode()}>Apply to Module</button>
                                </div>
                            </div>
                        </TabPanel>
                    </Modal.Body>
                </Modal>
                <Modal
                    show={modalBackground}
                    onHide={() => setModalBackground(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Background Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Stack gap={3} style={{ textAlign: "left" }}>
                            <label>URL : </label>
                            <input type="text" className="form-control" placeholder="Enter URL" onChange={(e) => setImageURL(e.target.value)} value={imageURL} />
                            <label>Text</label>
                            <textarea className="form-control" placeholder="Write something here!" value={textOverImage} onChange={(e) => setTextOverImage(e.target.value)} />
                            <div>Text Place: Top-Left (default)
                            </div>
                            <button className="btn btn-primary" onClick={() => handleBackgroundModal()}>Upload</button>
                        </Stack>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default AboutUsDynamic;