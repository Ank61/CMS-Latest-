import React from 'react';
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
import toast, { Toaster } from 'react-hot-toast';
import "./aboutUsAdmin.css";
import CloseIcon from '@mui/icons-material/Close';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
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
import Slider from '@mui/material/Slider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
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
import { HexColorPicker } from "react-colorful";
import outsideClickOutside from "../../../Common//ColorPicker/outsideClickOutside";
import outsideClickSecond from "../../../Common//ColorPicker/outsideClickSecond"
import outsideClickThird from '../../../Common/ColorPicker/outsideClickThird'
import { Form } from 'react-bootstrap';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import outsideClickFourth from '../../../Common/ColorPicker/outsideClickFourth';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import "../AdminPageCSS/adminPages.css"
import gradient from "../../../../Images/gradient.jpeg";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import networkConstant from '../../../Common/API/uri_constant';


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
    columnNumber: number
    rowNumber: number
    spacing: Number
    backgroundColor: String
    border: String
    shape: String
    complex: string
}

type ButtonData = {
    backgroundType: string
    background: { start: string, end: string }
    backgroundColor: string
    borderRadius: number
    borderColor: string
    borderStyle: string
    borderWidth: number
    paddingTop: number
    paddingLeft: number
    paddingRight: number
    paddingBottom: number
    hoverType: string
    hoverColor: { start: string, end: string }
    hoverSolidColor: string

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
interface ButtonProps {
    data: {
        backgroundColor: string;
        borderWidth: number;
        borderRadius: number;
        paddingTop: number;
        paddingRight: number;
        paddingLeft: number;
        paddingBottom: number;
        hoverType: string;
        borderStyle: string;
        hoverColor: { start: string, end: string }
        hoverSolidColor: string
    }
    fourthColor: string
    fifthColor: string
}
const CustomHover = styled.button<ButtonProps>`
  background-color: ${props => props.color};
  border-radius :  ${props => props.data.borderRadius + 'px'};
  border : ${props => props.data.borderWidth + 'px' + ' ' + props.data.borderStyle + props.fourthColor}; 
  padding-top : ${props => props.data.paddingTop + 'px'};
  padding-left :  ${props => props.data.paddingLeft + 'px'};
  padding-right :  ${props => props.data.paddingRight + 'px'};
  padding-bottom :  ${props => props.data.paddingBottom + 'px'};

  &:hover {
    background-color:  ${props => props.fifthColor}
  }
`;

function AboutUsDynamic() {
    const [moduleDetails, setModuleDetails] = useState<moduleDetail>()
    const [data, setData] = useState<Data>({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    const [insertCode, setInsertCode] = useState<string>("")
    const [insertDiv, setInsertDiv] = useState<string>("")
    const [editorContent, setEditorContent] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false)
    const [modalBackground, setModalBackground] = useState<boolean>(false)
    const [modalButton, setModalButton] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
    const [buttonData, setButtonData] = useState<ButtonData>({
        backgroundType: "solid",
        background: { start: "", end: "" },
        backgroundColor: "",
        borderRadius: 0,
        borderColor: "",
        borderStyle: "Solid",
        borderWidth: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        hoverType: "solid",
        hoverColor: { start: "", end: "" },
        hoverSolidColor: "",
    })
    const [backgroundImageUrl, setBackgroundImageURL] = useState<string>("")
    const [buttonRoute, setButtonRoute] = useState<string>("")
    const [checkedButtonBorder, setCheckedButtonBorder] = React.useState(false);
    const [checkedButtonBorderOnly, setCheckedButtonBorderOnly] = React.useState(false)
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
    const [fourthBackground, setFourthBackground] = useState(false)
    const [fourthColor, setFourthColor] = useState("#d6c9f1")
    const popoverFourth = React.useRef<HTMLInputElement>(null);
    const closeFourth = useCallback(() => setFourthBackground(false), [])
    outsideClickFourth(popoverFourth, closeFourth)
    const [fifthBackground, setFifthBackground] = useState(false)
    const [fifthColor, setFifthColor] = useState("#d6c9f1")
    const popoverFifth = React.useRef<HTMLInputElement>(null);
    const closeFifth = useCallback(() => setFifthBackground(false), [])
    outsideClickFourth(popoverFifth, closeFifth)
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChangeAccordion =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const [backgroundModalInput, setBackgroundModalInput] = React.useState('');
    const handleBackgroundModalInput = (event: SelectChangeEvent) => {
        setBackgroundModalInput(event.target.value);
    };
    //States for background Images 
    const [backgroundHeight, setBackgroundHeight] = useState<number>(40)
    const [backgroundWidth, setBackgroundWidth] = useState<number>(40)
    const [backgroundImageModal, setBackgroundImageModal] = useState(false)
    const [applyBackground, setApplyBackground] = useState(false);
    const [selectDiv, setSelectDiv] = useState(false)
    const [divHeight, setDivHeight] = useState<number>(230);
    const [divWidth, setDivWidth] = useState<number>(450);
    const [pressDivCorner, setPressedDivCorner] = useState(false)
    let { id } = useParams();
    //For add button
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!anchorEl){
            debugger
            setAnchorEl(event.currentTarget);
            a11yProps(0)
        }
        else{
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
    const handleChangeButtonBorder = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedButtonBorder(event.target.checked);
    };
    const handleChangeButtonOnly = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedButtonBorderOnly(event.target.checked);
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
    }
    //For background select in div module
    const [color, setColor] = useState("#cce4ff");
    const popover = React.useRef<HTMLInputElement>(null);
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);
    outsideClickOutside(popover, close);
    //For button modal => dropdown
    const [borderStyle, setBorderStyle] = React.useState('solid');

    const handleChangeBorderStyle = (event: SelectChangeEvent) => {
        setBorderStyle(event.target.value);
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
    function generateUniqueLetters(num: number) {
        let result = '';
        const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * possibleChars.length);
            result += possibleChars.charAt(randomIndex);
        }
        return result;
    }
    function handleDelete() {
        const obj = { moduleId: `${moduleDetails?.moduleId}` }
        axios.post(`${networkConstant.URL.deleteAboutUs}`, obj).then(response => console.log(response)).catch(err => console.log(err))
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
        setModal(false);
        setInsertCode("")
    }
    let insertCodeModal = `<!doctype html> <html> <head> </head> <body><div style='background-color : red'> ${insertCode}</div></body> </html>`;
    //For Creating Div Module
    let backgorundModal = `<!doctype html> <html> <head> </head> <body><div style="background-color : red" draggable="true">Hello</div></body> </html>`;
    const [anchorElDiv, setAnchorElDiv] = React.useState<HTMLButtonElement | null>(null);
    const handleClickDiv = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElDiv(event.currentTarget);
        if (data.columnNumber === 1 && data.rowNumber === 0) {
            debugger;
            // setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;px;"> <div style=" style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> </div> `)
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style=" background-color : ${color !== "#cce4ff" ? color : "#cce4ff"}; border : 1px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> </div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"}; border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> </div> `)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"}; border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> </div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> </div> `)
        }
        if (data.columnNumber === 3 && data.rowNumber === 0) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 1px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;border : 1px solid black">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 1px solid black">Div 3 </div></div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 3px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;border : 3px solid black">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 3px solid black">Div 3 </div></div> `)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 5px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;border : 5px solid black">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}  ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 5px solid black">Div 3 </div></div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr; gap: 0px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; min-height : 191px;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"};  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px">Div 3 </div></div> `)
        }
        if (data.columnNumber === 2 && data.rowNumber === 0) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; gap: 0px${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;px;"> <div style=" background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};border :1px solid black;min-height : 191px;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border :1px solid black;">Div 2</div></div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; gap: 0px${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;px;"> <div style=" background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};min-height : 191px;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border :3px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border :3px solid black;">Div 2</div></div> `)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; gap: 0px${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;px;"> <div style=" background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};min-height : 191px;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border :5px solid black">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border :5px solid black;">Div 2</div></div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; gap: 0px${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;px;"> <div style=" background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};min-height : 191px;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div></div> `)
        }
        if (data.columnNumber === 4 && data.rowNumber === 0) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;  border : 1px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};  border : 1px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;  border : 1px solid black; ">Div 3 </div><div style="background-color : #f9e0c0;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 1px solid black";">Div 4</div></div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : #cce4ff ;min-height : 191px;" >Div 1</div> <div style="grid-area: b;background-color : #fbcfcf;">Div 2</div> <div style="grid-area: c;background-color : #ccf6c2;">Div 3</div></div>`)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;  border : 5px solid black ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;min-height : 191px">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};   border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3 </div><div style="background-color : #f9e0c0;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px; border : 5px solid black";">Div 4</div></div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr; gap: ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;"> <div style="background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px ;min-height : 191px ;">Div 1</div> <div style="background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3 </div><div style="background-color : #f9e0c0;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div> `)
        }
        if (data.columnNumber === 2 && data.rowNumber === 1) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};border : 1px solid black; ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 1px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"};border : 1px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px;border : 3px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 3px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}; border : 3px solid black;  border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px;border : 5px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 5px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}; border : 5px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a' 'b c'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div></div>`)
        }
        if (data.columnNumber === 3 && data.rowNumber === 1) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 1px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};border : 1px solid black ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;border : 1px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">This </div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border : 1px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div> `)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 3px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 3px solid black;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 3px solid black;">This </div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 3px solid black;">Div 4</div></div> `)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"};border : 5px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 5px solid black;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 5px solid black;">This </div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;border : 5px solid black;">Div 4</div></div> `)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr;grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 0.5fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px;grid-template-areas: 'a a a' 'b c d'  "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;" >Div 1</div> <div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div> <div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">This </div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div> `)
        }
        if (data.columnNumber === 3 && data.rowNumber === 1 && data.complex === "Left Big") {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;border : 1px solid black;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;">Div 2</div><div style="grid-area: c;background-color : #fbcfcf;border : 1px solid black; ;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 1px solid black;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;border : 3px solid black;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;border : 3px solid black;">Div 2</div><div style="grid-area: c;border : 3px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 3px solid black;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;border : 5px solid black;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;">Div 2</div><div style="grid-area: c;border : 5px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 5px solid black;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b b' 'a c d' "><div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};min-height : 191px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div> </div>`);
        }
        if (data.columnNumber === 2 && data.rowNumber === 2) {
            if (data.border === "sharp") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 1px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border : 1px solid black;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;border : 1px solid black;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 1px solid black;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
            if (data.border === "thin") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"};  border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"};  border : 3px solid black; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ;  border : 3px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
            if (data.border === "thick") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;border : 5px solid black;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;border : 5px solid black;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border : 5px solid black;border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;border : 5px solid black;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
            if (data.border === "none") setInsertDiv(`<div style="display: grid; grid-auto-columns: 1fr; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:  ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px ${spacing === 2 ? 10 : spacing === 3 ? 15 : spacing === 4 ? 20 : spacing}px; grid-template-areas: 'a b' 'c d' "> <div style="grid-area: a;background-color : ${color !== "#cce4ff" ? color : "#cce4ff"} ;min-height : 191px; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 1</div><div style="grid-area: b;background-color : ${secondColor !== "#ccf6c2" ? secondColor : "#ccf6c2"}; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 2</div><div style="grid-area: c;background-color : ${thirdColor !== "#f9e0c0" ? thirdColor : "#f9e0c0"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 3</div><div style="grid-area: d;background-color : ${fourthColor !== "#d6c9f1" ? fourthColor : "#d6c9f1"} ; border-radius : ${data.shape === "Square" ? 0 : data.shape === "Rounded" ? 15 : data.shape === "Circle" ? 60 : 0}px;">Div 4</div></div>`)
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

    const handleCheckboxHover = () => {
        setButtonHover(!buttonHover ? true : false)
    }
    async function handleButtonModule() {
        toast.success("Updated css")
        const uniqueLetters = generateUniqueLetters(10);
        if (buttonHover) {
            debugger;
            const effectStyling = `{background-color :${fifthColor} }`
            const obj = {
                className: `${uniqueLetters}`,
                style: `{border-radius : ${buttonData.borderRadius}px;background-color : ${color} ; border :  ${buttonData.borderWidth}px ${buttonData.borderStyle} ${fourthColor} ; padding-top : ${buttonData.paddingTop}px ; padding-left : ${buttonData.paddingLeft}px; padding-right : ${buttonData.paddingRight}px ;padding-bottom : ${buttonData.paddingBottom}px;}`,
                Effect: 'Hover',
                EffectStyle: effectStyling,
                From: "Apply"
            }
            await axios.post(`${networkConstant.URL.updateAboutUs}`, obj)
                .then(response => {
                    console.log(response)
                })
                .catch(err => console.log(err))
        }

        setModalButton(false);
        setEditorContent((prev) => prev + `<button  class=${uniqueLetters} id="buttonRoute" value=${buttonRoute} >Click Me</button>`);
        setButtonData({
            backgroundType: "solid",
            background: { start: "", end: "" },
            backgroundColor: "",
            borderRadius: 0,
            borderColor: "",
            borderStyle: "Solid",
            borderWidth: 0,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 0,
            hoverType: "solid",
            hoverColor: { start: "", end: "" },
            hoverSolidColor: "",
        })
        setButtonHover(false);
        setButtonRoute("")
    }

    function handleCloseFullModal() {
        setModal(false)
        setCodeSelected(false)
        setValueBottom(0);
        setSpacing(0);
        setData({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    }
    function handleCloseButtonModal() {
        setModalButton(false)
    }
    const handlePaddingRight = (event: Event, newValue: number | number[]) => {
        setButtonData((prev) => ({ ...prev, paddingRight: newValue as number }));
    };
    const handlePaddingLeft = (event: Event, newValue: number | number[]) => {
        setButtonData((prev) => ({ ...prev, paddingLeft: newValue as number }));
    };
    const handlePaddingBottom = (event: Event, newValue: number | number[]) => {
        setButtonData((prev) => ({ ...prev, paddingBottom: newValue as number }));
    };
    const handlePaddingTop = (event: Event, newValue: number | number[]) => {
        setButtonData((prev) => ({ ...prev, paddingTop: newValue as number }));
    };
    const handleSmoothnessSlider: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        return setButtonData((prev) => ({ ...prev, borderRadius: Number(event.target.value) }));
    }
    const handleSmoothnessSliderNew = (event: Event, newValue: number | number[]) => {
        setButtonData((prev) => ({ ...prev, borderRadius: newValue as number }));
    }
    const handleSliderForWidth: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        debugger;
        return setButtonData((prev) => ({ ...prev, borderWidth: Number(event.target.value) }));
    }
    const handleSliderForWidthNew = (event: Event, newValue: number | number[]) => {
        setButtonData((prev) => ({ ...prev, borderWidth: newValue as number }));
    }
    const ButtonDataStyleLinear = { backgroundImage: `linear-gradient(to bottom, ${color}, ${secondColor})`, borderRadius: buttonData.borderRadius, backgroundColor: `${color}`, border: ` ${buttonData.borderWidth}px ${buttonData.borderStyle} ${fourthColor}`, paddingTop: buttonData.paddingTop, paddingLeft: buttonData.paddingLeft, paddingRight: buttonData.paddingRight, paddingBottom: buttonData.paddingBottom, ':hover': { backgroundColor: `${buttonData.hoverSolidColor}` } }
    const buttonDataStyle = { borderRadius: checkedButtonBorder ? buttonData.borderRadius : 0, backgroundColor: `${color}`, border: ` ${checkedButtonBorderOnly ? buttonData.borderWidth : 0}px  ${checkedButtonBorderOnly ? buttonData.borderStyle : 'none'} ${checkedButtonBorderOnly ? fourthColor : ""}`, paddingTop: buttonData.paddingTop, paddingLeft: buttonData.paddingLeft, paddingRight: buttonData.paddingRight, paddingBottom: buttonData.paddingBottom }
    const [pressed, setPressed] = useState(false)
    const [position, setPosition] = useState({ x: 1, y: 1 })
    const ref = useRef<HTMLImageElement>(null)
    const refDiv = useRef<HTMLDivElement>(null)
    const [pressedDiv, setPressedDiv] = useState(false)
    const [positionDiv, setPositionDiv] = useState({ x: 1, y: 1 })

    const onMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        if (pressed) {
            if (ref.current) {
                ref.current.style.cursor = "grabbing";
            }
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
        else {
            if (ref.current) {
                ref.current.style.cursor = "pointer"
            }
        }
    }

    const onMouseMoveDiv = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (pressDivCorner) {
            setDivWidth(divWidth - event.movementX)
            setDivHeight(divHeight - event.movementY)
        }
        if (pressedDiv) {
            if (refDiv.current) {
                refDiv.current.style.cursor = "all-scroll";
            }
            setPositionDiv({
                x: positionDiv.x + event.movementX,
                y: positionDiv.y + event.movementY
            })
        }
        else {
            if (refDiv.current) {
                refDiv.current.style.cursor = "default"
            }
        }
    }

    const outsideSection = `height : ${divHeight}px;width : ${divWidth}px;  background-color: white; box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); border-radius : 14px;margin-left : ${positionDiv.x}px; margin-top : ${positionDiv.y}px;`
    const applieBackgroundEditor = `width : ${backgroundWidth * 14}px; height :${backgroundHeight * 10}px ;background-image: url(${gradient}); background-position : center 50% ; background-size : cover; margin-left :${position.x}px;padding-top : ${position.y}px; `
    function handleBackgroundModalButton() {
        setEditorContent((prev) => prev + `<div><div style="${applieBackgroundEditor}"> <div style="${outsideSection}">This is test</div><div></div>`);
        setBackgroundImageModal(false)
        setPosition({
            x: 0,
            y: 0
        })
    }

    const quickAndDirtyStyle = {
        width: backgroundWidth * 10,
        height: backgroundHeight * 10,
        cursor: "pointer",
        marginLeft: position.x,
        marginTop: position.y,
    }
    function handleBackgroundImageWidth(e: any) {
        setBackgroundWidth(e.target.value);
    }
    function handleBackgroundImageHeight(e: any) {
        setBackgroundHeight(e.target.value);
    }
    const backgroundData = {
        width: backgroundWidth * 10,
        height: backgroundHeight * 10,
        backgroundColor: 'red',
        backgroundImage: `url(${gradient})`,
        backgroundPosition: 'center 50%',
        backgroundSize: 'cover',
        marginLeft: position.x,
        marginTop: position.y,
    }

    // For selecting div
    const divNormalStyling = {
        height: divHeight,
        width: divWidth,
        backgroundColor: 'white',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
        marginLeft: positionDiv.x,
        marginTop: positionDiv.y,
    }
    const divSelected: React.CSSProperties = {
        position: 'relative',
        height: divHeight,
        width: divWidth,
        backgroundColor: 'white',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
        marginLeft: positionDiv.x,
        marginTop: positionDiv.y,
        border: '5px solid #3c98e7'
    }

    const positioning: React.CSSProperties = {
        position: 'absolute',
        top: 0 + positionDiv.y,
        left: 0 + positionDiv.x,
        backgroundColor: 'white',
        width: 'auto',
        height: 26,
    }
    const intialInvisible: React.CSSProperties = {//TopRight
        position: 'absolute',
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        backgroundColor: 'red',
        cursor: 'nw-resize',
        opacity: 0,
    }
    const invisibleRight: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 10,
        height: 10,
        backgroundColor: 'green',
        cursor: 'ne-resize',
        opacity: 0,
    }
    const invisibleSecondRight: React.CSSProperties = { //Bottom Right
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 10,
        height: 10,
        backgroundColor: 'yellow',
        cursor: 'nw-resize',
        opacity: 0,
    }
    const invisibleLeft: React.CSSProperties = { //BottomLeft
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        cursor: 'ne-resize',
        opacity: 0,
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
                            <div className="addButton">{open ? <CloseIcon/>:<AddIcon />}</div>
                        </Button>
                        <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClick} MenuListProps={{ 'aria-labelledby': 'basic-button' }}>
                            <MenuItem style={{ fontSize: 14 }} onClick={handleClose}> <ViewModuleIcon style={{ marginRight: 20, fontSize: 29 }} /> Divide Module</MenuItem>
                            <MenuItem onClick={handleCloseButton} style={{ fontSize: 14 }}><SmartButtonIcon style={{ marginRight: 20, fontSize: 31 }} /> Button</MenuItem>
                            <MenuItem onClick={handleCloseBackground} style={{ fontSize: 14 }}><WallpaperIcon style={{ marginRight: 20, fontSize: 26 }} />   Background Image</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }} disabled><AlignHorizontalCenterIcon style={{ marginRight: 20, fontSize: 28 }} /> Align Item</MenuItem>
                            <MenuItem onClick={handleClose} style={{ fontSize: 14 }} disabled><FormatColorFillIcon style={{ marginRight: 20, fontSize: 27 }} /> Background Color</MenuItem>
                        </Menu>
                    </div>
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

                {/*Modal for Div module */}
                <Modal show={modal} onHide={() => setModal(false)} backdrop="static" keyboard={false} centered  >
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
                                    <BottomNavigation showLabels value={valueBottom} onChange={(event, newValue) => { setValueBottom(newValue); }}  >
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
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />
                                                        </Grid>))}
                                                </Grid>
                                                : ""}

                                            {/*For 2 column */}
                                            {data.columnNumber === 2 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0, 1].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />
                                                        </Grid>))}
                                                </Grid>
                                                : ""}

                                            {/*For 3 column */}
                                            {data.columnNumber === 3 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0, 1, 2].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />
                                                        </Grid>))}
                                                </Grid>
                                                : ""}

                                            {/* For 4 column */}
                                            {data.columnNumber === 4 && data.rowNumber === 0 && data.complex !== "Left Big" ?
                                                <Grid container justifyContent="center" spacing={spacing} style={{ marginLeft: 2, width: '100%' }}>
                                                    {[0, 1, 2, 3].map((value) => (
                                                        <Grid key={value} item>
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#efebeb' }} />
                                                        </Grid>))}
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
                                                            <RadioGroup name="spacing" aria-label="spacing" value={spacing.toString()} onChange={handleChangeGrid} row >
                                                                {[0, 1, 2, 3, 4].map((value) => (  // removed 0.5,8 and 12
                                                                    <FormControlLabel key={value} value={value.toString()} control={<Radio />} label={value.toString()} style={{ height: 20, width: 40, marginLeft: 3 }} />
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
                                    <BottomNavigation showLabels value={valueBottom} onChange={(event, newValue) => { setValueBottom(newValue); }} >
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
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" style={{ marginLeft: 45, marginTop: 10 }} name="row-radio-buttons-group" defaultValue="Square" onChange={(e) => { setData((prev) => ({ ...prev, shape: e.target.value })) }} >
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
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" style={{ marginLeft: 100, marginTop: 7 }} name="row-radio-buttons-group" defaultValue="none" onChange={(e) => setData((prev) => ({ ...prev, border: e.target.value }))} >
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
                                        <div className="swatch" style={{ backgroundColor: color, marginTop: 3 }} onClick={() => toggle(true)} /> {isOpen && (<div className="popover" ref={popover}><HexColorPicker color={color} onChange={setColor} /></div>)} </div>
                                    <input type="text" className='form-control' style={{ width: 100, marginLeft: 20 }} value={color} onChange={(e) => { setColor(e.target.value) }}></input>
                                    <div style={{ marginLeft: 20, marginTop: 5 }}> Div 1 </div>
                                </div>
                                {data.columnNumber === 2 && data.rowNumber === 0 ?
                                    <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                        <div className="picker">
                                            <div className="swatch" style={{ backgroundColor: secondColor, marginTop: 3 }} onClick={() => setSecondBackground(true)} />
                                            {secondBackground && (<div className="popover" ref={popoverSecond}> <HexColorPicker color={secondColor} onChange={setSecondColor} /> </div>)}
                                        </div>
                                        <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={secondColor} onChange={(e) => { setSecondColor(e.target.value) }}></input>
                                        <div style={{ marginLeft: 20, marginTop: 5 }}>
                                            Div 2
                                        </div>
                                    </div>
                                    : ""}

                                {(data.columnNumber === 2 && data.rowNumber > 0 && data.rowNumber !== 2) || (data.columnNumber === 2 && data.rowNumber === 1) || (data.columnNumber === 3 && data.rowNumber === 0)
                                    ? <> <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                        <div className="picker">
                                            <div className="swatch" style={{ backgroundColor: secondColor, marginTop: 3 }} onClick={() => setSecondBackground(true)} />
                                            {secondBackground && (<div className="popover" ref={popoverSecond}> <HexColorPicker color={secondColor} onChange={setSecondColor} /> </div>)}
                                        </div>
                                        <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={secondColor} onChange={(e) => { setSecondColor(e.target.value) }}></input>
                                        <div style={{ marginLeft: 20, marginTop: 5 }}>  Div 2 </div> </div>
                                        <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                            <div className="picker">
                                                <div className="swatch" style={{ backgroundColor: thirdColor, marginTop: 3 }} onClick={() => setThirdBackground(true)} />
                                                {thirdBackground && (<div className="popover" ref={popoverThird}>  <HexColorPicker color={thirdColor} onChange={setThirdColor} /> </div>)}
                                            </div>
                                            <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={thirdColor} onChange={(e) => { setThirdColor(e.target.value) }}></input>
                                            <div style={{ marginLeft: 20, marginTop: 5 }}> Div 3 </div>
                                        </div>
                                    </>
                                    : ""}

                                {/* Fourth Div*/}
                                {(data.columnNumber === 3 && data.rowNumber > 0) || (data.columnNumber === 2 && data.rowNumber === 2) || (data.columnNumber === 4 && data.rowNumber === 0)
                                    ?
                                    <><div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                        <div className="picker">
                                            <div className="swatch" style={{ backgroundColor: secondColor, marginTop: 3 }} onClick={() => setSecondBackground(true)} />
                                            {secondBackground && (<div className="popover" ref={popoverSecond}> <HexColorPicker color={secondColor} onChange={setSecondColor} /> </div>)}
                                        </div>
                                        <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={secondColor} onChange={(e) => { setSecondColor(e.target.value) }}></input>
                                        <div style={{ marginLeft: 20, marginTop: 5 }}>
                                            Div 2 </div>  </div>

                                        <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                            <div className="picker">
                                                <div className="swatch" style={{ backgroundColor: thirdColor, marginTop: 3 }} onClick={() => setThirdBackground(true)} />
                                                {thirdBackground && (
                                                    <div className="popover" ref={popoverThird}>  <HexColorPicker color={thirdColor} onChange={setThirdColor} /> </div>)}
                                            </div>
                                            <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={thirdColor} onChange={(e) => { setThirdColor(e.target.value) }}></input>
                                            <div style={{ marginLeft: 20, marginTop: 5 }}> Div 3</div>
                                        </div>

                                        <div className='backgroundFlex' style={{ marginTop: 8, marginLeft: 182 }}>
                                            <div className="picker">
                                                <div className="swatch" style={{ backgroundColor: fourthColor, marginTop: 3 }} onClick={() => setFourthBackground(true)} />
                                                {fourthBackground && (<div className="popover" ref={popoverFourth}>  <HexColorPicker color={fourthColor} onChange={setFourthColor} /> </div>)}
                                            </div>
                                            <input type="text" className='form-control' style={{ width: 100, marginLeft: 20, }} value={fourthColor} onChange={(e) => { setFourthColor(e.target.value) }}></input>
                                            <div style={{ marginLeft: 20, marginTop: 5 }}> Div 4  </div>
                                        </div>
                                    </>
                                    : ""}

                                <div className='previewButtonDiv'>
                                    <div>
                                        <Button aria-describedby={idDiv} variant="contained" style={{ backgroundColor: 'white', color: 'gray' }} onClick={handleClickDiv}>
                                            <VisibilityIcon />&nbsp; Preview
                                        </Button>
                                        <Popover id={idDiv} open={openDiv} anchorEl={anchorElDiv} onClose={handleCloseDiv} anchorReference="anchorPosition" anchorPosition={{ top: 200, left: 868 }} anchorOrigin={{ vertical: 'center', horizontal: 'right', }} transformOrigin={{ vertical: 'center', horizontal: 'left', }} >
                                            <iframe srcDoc={insertDivModal} width={400} height={400} sandbox='' title='Preview' ></iframe>
                                        </Popover>
                                    </div> <div>
                                        <button type="button" className='btn btn-primary' style={{ marginLeft: 20 }} onClick={() => handleInsertDiv()}>Apply to Module</button>
                                    </div>
                                </div>
                                <Box sx={{ width: 'auto' }}>
                                    <BottomNavigation
                                        showLabels value={valueBottom} onChange={(event, newValue) => { setValueBottom(newValue); }} >
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa1} style={{ fontSize: 11, paddingTop: 40 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa2} style={{ fontSize: 11, paddingTop: 40 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                        <BottomNavigationAction label={<FontAwesomeIcon icon={fa3} style={{ fontSize: 11, paddingTop: 40 }} />} onClick={(event) => handleBottomNavigation(event)} />
                                    </BottomNavigation>
                                </Box>
                            </>
                            : ""
                        }
                        <TabPanel value={value} index={1}>
                            <Popover id={idInsert} open={openInsert} anchorEl={anchorElInsert} onClose={handleCloseInsert} anchorReference="anchorPosition" anchorPosition={{ top: 200, left: 868 }} anchorOrigin={{ vertical: 'center', horizontal: 'right', }} transformOrigin={{ vertical: 'center', horizontal: 'left', }}  >
                                <iframe srcDoc={insertCodeModal} width={400} height={400} sandbox='' title='Preview'></iframe>
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

                {/*Modal for Button*/}
                <Modal
                    show={modalButton}
                    onHide={() => setModalButton(false)}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Body style={{ overflow: 'auto' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <div className="InsertCodeModal">
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                    <Tab label="Customize Button" {...a11yProps(0)} onClick={() => setCodeSelected(false)} />
                                    <Tab label="Apply Code" {...a11yProps(1)} onClick={() => setCodeSelected(true)} />
                                </Tabs>
                                <Tab label={<ClearIcon onClick={() => handleCloseButtonModal()} />} ></Tab>
                            </div>
                        </Box>
                        <Accordion style={{ backgroundColor: '#f5f5f5', marginTop: 20 }} expanded={expanded === 'panel1'} onChange={handleChangeAccordion('panel1')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header"  >
                                <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontSize: 15 }}>Background Color</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <div className='backgroundButton' >
                                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" defaultValue="solid" name="row-radio-buttons-group" style={{ marginLeft: 110 }} >
                                            <FormControlLabel value="gradient" control={<Radio size="small" />} label={<Typography variant="body2" color="textSecondary">Gradient</Typography>} onClick={() => setButtonData((prev) => ({ ...prev, backgroundType: "gradient" }))} />
                                            <FormControlLabel value="solid" control={<Radio size="small" />} label={<Typography variant="body2" color="textSecondary">Solid</Typography>} onClick={() => setButtonData((prev) => ({ ...prev, backgroundType: "solid" }))} style={{ marginLeft: 30 }} />
                                        </RadioGroup>
                                    </div>
                                </FormControl>
                                {buttonData.backgroundType === "gradient" ?
                                    <div className="backgroundFlex">
                                        <div className='backgroundButton'>
                                            <FormLabel style={{ marginTop: 8, fontSize: 14 }}>Start Color :</FormLabel>
                                            <div className="picker" style={{ marginLeft: 19 }}>
                                                <div className="swatch" style={{ backgroundColor: color, marginTop: 3 }} onClick={() => toggle(true)} /> {isOpen && (<div className="popover" ref={popover}><HexColorPicker color={color} onChange={setColor} /></div>)}
                                            </div>
                                            <input type="text" className='form-control' style={{ width: 90, height: 30, marginLeft: 10 }} value={color} onChange={(e) => { setColor(e.target.value) }}></input>
                                        </div>&nbsp;&nbsp;&nbsp;
                                        <div className='backgroundButton'>
                                            <FormLabel style={{ marginTop: 8, fontSize: 14 }}>End Color :</FormLabel>
                                            <div className="picker" style={{ marginLeft: 19 }}>
                                                <div className="swatch" style={{ backgroundColor: secondColor, marginTop: 3 }} onClick={() => setSecondBackground(true)} /> {secondBackground && (<div className="popover" ref={popoverSecond}><HexColorPicker color={secondColor} onChange={setSecondColor} /></div>)}
                                            </div>
                                            <input type="text" className='form-control' style={{ width: 90, marginLeft: 10, height: 30 }} value={secondColor} onChange={(e) => { setSecondColor(e.target.value) }}></input>
                                        </div>
                                    </div>
                                    : ""}

                                {buttonData.backgroundType === "solid" ?
                                    <div className='backgroundButton'>
                                        <FormLabel style={{ marginTop: 8, fontSize: 14 }}>Color :</FormLabel>
                                        <div className="picker" style={{ marginLeft: 90 }}>
                                            <div className="swatch" style={{ backgroundColor: color, marginTop: 3 }} onClick={() => toggle(true)} /> {isOpen && (<div className="popover" ref={popover}><HexColorPicker color={color} onChange={setColor} /></div>)}
                                        </div>
                                        <input type="text" className='form-control' style={{ width: 90, height: 30, marginLeft: 20 }} value={color} onChange={(e) => { setColor(e.target.value) }}></input>
                                    </div>
                                    : ""}
                            </AccordionDetails>
                        </Accordion>

                        <Accordion style={{ backgroundColor: '#f5f5f5' }} expanded={expanded === 'panel2'} onChange={handleChangeAccordion('panel2')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" >
                                <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontSize: 15 }}>Align Text</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='backgroundButton'>
                                    <div> <FormLabel style={{ marginTop: 4, fontSize: 14 }}>Left </FormLabel> </div>
                                    <div style={{ width: 170, marginLeft: 14 }}> <Slider size="small" aria-label="Small" valueLabelDisplay="auto" value={buttonData.paddingLeft} onChange={handlePaddingLeft} /> </div>
                                    <div><FormLabel style={{ marginTop: 4, fontSize: 14, marginLeft: 20 }}>Right </FormLabel> </div>
                                    <div style={{ width: 170, marginLeft: 25, marginTop: 1 }}> <Slider size="small" aria-label="Small" valueLabelDisplay="auto" value={buttonData.paddingRight} onChange={handlePaddingRight} /> </div>
                                </div>
                                <div className='backgroundButton'>
                                    <div>  <FormLabel style={{ marginTop: 4, fontSize: 14 }}>Top </FormLabel> </div>
                                    <div style={{ width: 170, marginTop: 1, marginLeft: 14 }}><Slider size="small" aria-label="Small" valueLabelDisplay="auto" value={buttonData.paddingTop} onChange={handlePaddingTop} /> </div>
                                    <div> <FormLabel style={{ marginTop: 4, fontSize: 14, marginLeft: 20 }}>Bottom </FormLabel> </div>
                                    <div style={{ width: 170, marginLeft: 14, marginTop: 1 }}><Slider size="small" aria-label="Small" valueLabelDisplay="auto" value={buttonData.paddingBottom} onChange={handlePaddingBottom} /> </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion style={{ backgroundColor: '#f5f5f5' }} expanded={expanded === 'panel3'} onChange={handleChangeAccordion('panel3')}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header" >
                                <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontSize: 15 }}> Border </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='backgroundButton'>
                                    <div><Checkbox checked={checkedButtonBorder} onChange={handleChangeButtonBorder} inputProps={{ 'aria-label': 'controlled' }} /></div>
                                    <div> <FormLabel style={{ marginTop: 11, marginLeft: 20, fontSize: 14 }}>Smoothness </FormLabel> </div>
                                    <div> <input type="text" className='form-control' style={{ width: 70, marginLeft: 50, height: 32 }} value={buttonData.borderRadius} onChange={handleSmoothnessSlider}></input> </div>
                                    <div style={{ width: 170, marginLeft: 22, marginTop: 7 }}> <Slider size="small" aria-label="Small" valueLabelDisplay="auto" value={buttonData.borderRadius} onChange={handleSmoothnessSliderNew} /> </div>
                                </div>
                                <div className='backgroundButton'>
                                    <div> <Checkbox checked={checkedButtonBorderOnly} onChange={handleChangeButtonOnly} inputProps={{ 'aria-label': 'controlled' }} /> </div>
                                    <div> <FormLabel style={{ marginTop: 10, fontSize: 14, marginLeft: 20 }}>Border Color</FormLabel>  </div>

                                    <div className="picker" style={{ marginLeft: 19 }}>
                                        <div className="swatch" style={{ backgroundColor: fourthColor, marginTop: 3 }} onClick={() => setFourthBackground(true)} /> {fourthBackground && (<div className="popover" ref={popoverFourth}><HexColorPicker color={fourthColor} onChange={setFourthColor} /></div>)}
                                    </div>
                                    <div> <input type="text" className='form-control' style={{ width: 90, marginLeft: 50, height: 32 }} value={fourthColor} onChange={(e) => { setColor(e.target.value) }}></input>  </div>
                                </div>
                                <div className='backgroundButton'>
                                    <div> <FormLabel style={{ marginTop: 10, fontSize: 14, marginLeft: 63 }}>Border Style</FormLabel> </div>
                                    <div>
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
                                            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={borderStyle} onChange={handleChangeBorderStyle} label="style" style={{ fontSize: 14, width: 75, marginLeft: 50 }} defaultValue={"solid"}>
                                                <MenuItem value={"solid"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "solid" }))} >Solid</MenuItem>
                                                <MenuItem value={"dotted"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "dotted" }))}>Dotted</MenuItem>
                                                <MenuItem value={"dashed"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "dashed" }))} >Dashed</MenuItem>
                                                <MenuItem value={"double"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "double" }))}>Double</MenuItem>
                                                <MenuItem value={"ridge"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "ridge" }))} >Ridge</MenuItem>
                                                <MenuItem value={"groove"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "groove" }))} >Groove</MenuItem>
                                                <MenuItem value={"inset"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "inset" }))} >Inset</MenuItem>
                                                <MenuItem value={"outset"} style={{ fontSize: 14 }} onClick={() => setButtonData((prev) => ({ ...prev, borderStyle: "outset" }))} >Outset</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className='backgroundButton'>
                                    <div> <FormLabel style={{ marginTop: 10, fontSize: 14, marginLeft: 63 }}>Border Width</FormLabel></div> <div>
                                        <input type="text" className='form-control' style={{ width: 70, marginLeft: 50, marginTop: 7, height: 32 }} value={buttonData.borderWidth ?? ' '} onChange={handleSliderForWidth}></input> </div>
                                    <div style={{ width: 170, marginLeft: 22, marginTop: 7 }}><Slider size="small" aria-label="Small" valueLabelDisplay="auto" value={buttonData.borderWidth ?? ' '} onChange={handleSliderForWidthNew} /> </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion expanded={expanded === 'panel4'} onChange={handleChangeAccordion('panel4')} style={{ backgroundColor: '#f5f5f5' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header"  >
                                <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontSize: 15 }}>Advance </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <div className='backgroundButton' >
                                        <div>
                                            <Checkbox onChange={handleCheckboxHover} />
                                        </div>
                                        <div>
                                            <Typography sx={{ width: '33%', flexShrink: 0 }} style={{ fontSize: 15, marginTop: 10, marginLeft: 15 }}>Hover</Typography>
                                        </div>
                                        <div>
                                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" defaultValue="solid" name="row-radio-buttons-group" style={{ marginLeft: 110 }} >
                                                <FormControlLabel value="gradient" control={<Radio size="small" />} label={<Typography variant="body2" color="textSecondary">Gradient</Typography>} onClick={() => setButtonData((prev) => ({ ...prev, hoverType: "gradient" }))} />
                                                <FormControlLabel value="solid" control={<Radio size="small" />} label={<Typography variant="body2" color="textSecondary">Solid</Typography>} onClick={() => setButtonData((prev) => ({ ...prev, hoverType: "solid" }))} style={{ marginLeft: 30 }} />
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </FormControl>
                                {buttonData.hoverType === "gradient" ?
                                    <div className="backgroundFlex">
                                        <div className='backgroundButton'>
                                            <FormLabel style={{ marginTop: 8, fontSize: 12, marginLeft: 56 }}>Start Color :</FormLabel>
                                            <input type="text" className='form-control' style={{ width: 72, height: 30, marginLeft: 10, fontSize: 12 }}></input>
                                        </div>&nbsp;&nbsp;
                                        <div className='backgroundButton'>
                                            <FormLabel style={{ marginTop: 8, fontSize: 12 }}>End Color :</FormLabel>
                                            <input type="text" className='form-control' style={{ width: 72, marginLeft: 10, height: 30, fontSize: 12 }} ></input>
                                        </div>
                                    </div>
                                    : ""}

                                {buttonData.hoverType === "solid" ?
                                    <div className='backgroundButton'>
                                        <FormLabel style={{ marginTop: 15, fontSize: 14, marginLeft: 150 }}>Color :</FormLabel>
                                        <div className="picker" style={{ marginLeft: 19, marginTop: 8 }}>
                                            <div className="swatch" style={{ backgroundColor: fifthColor, marginTop: 3 }} onClick={() => setFifthBackground(true)} /> {fifthBackground && (<div className="popover" ref={popoverFifth}><HexColorPicker color={fifthColor} onChange={setFifthColor} /></div>)}
                                        </div>
                                        <input type="text" className='form-control' style={{ width: 90, height: 30, marginLeft: 20, marginTop: 10 }} value={fifthColor} onChange={(e) => setFifthColor(e.target.value)}></input>
                                    </div>
                                    : ""}
                            </AccordionDetails>
                        </Accordion>
                        <div className='customizeButton'>
                            <div>
                                {!buttonHover ?
                                    <button style={buttonData.backgroundType !== "gradient" ? buttonDataStyle : ButtonDataStyleLinear}>Click Me</button>
                                    : <CustomHover data={buttonData} color={color} fourthColor={fourthColor} fifthColor={fifthColor}>Click Me</CustomHover>
                                }
                            </div>
                        </div>
                        <div className='backgroundButton'>
                            <div style={{ textAlign: 'start' }}> <input type="text" className='form-control' style={{ fontSize: 13, width: 150 }} value={buttonRoute} onChange={(e) => setButtonRoute(e.target.value)} placeholder='Enter Route Path'></input></div>
                            <div style={{ textAlign: 'end', marginLeft: 170 }}> <button type="button" className='btn btn-primary' style={{ marginLeft: 20, fontSize: 13 }} onClick={() => handleButtonModule()}>Apply to Module</button></div>
                        </div>
                    </Modal.Body>
                </Modal>


                {/* Modal for background Image*/}
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

                <Modal
                    show={backgroundImageModal}
                    onHide={() => setBackgroundImageModal(false)}
                    backdrop="static"
                    keyboard={false}
                    size='xl'
                >
                    <Modal.Body style={{ overflow: 'auto' }}>
                        <div className='backgroundButton'>
                            <div style={{ width: 800, height: 566 }}>
                                {applyBackground ?
                                    <div style={backgroundData}>
                                        <div style={{ fontSize: 11 }}>Background</div>
                                        {backgroundModalInput === "section" ?
                                            selectDiv ? <>  <div style={divSelected} ref={refDiv} onClick={() => { setSelectDiv(false); setPressedDivCorner(false) }} onMouseMove={onMouseMoveDiv} onMouseDown={() => setPressedDiv(true)} onMouseUp={() => setPressedDiv(false)}>
                                                <div style={intialInvisible} onMouseMove={onMouseMoveDiv} onMouseDown={() => setPressedDivCorner(true)} onMouseUp={() => setPressedDivCorner(false)}></div>
                                                <div style={invisibleRight} onMouseMove={onMouseMoveDiv} onMouseDown={() => setPressedDivCorner(true)} onMouseUp={() => setPressedDivCorner(false)}></div>
                                                <div style={invisibleLeft} onMouseMove={onMouseMoveDiv} onMouseDown={() => setPressedDivCorner(true)} onMouseUp={() => setPressedDivCorner(false)}></div>
                                                <div style={invisibleSecondRight} onMouseMove={onMouseMoveDiv} onMouseDown={() => setPressedDivCorner(true)} onMouseUp={() => setPressedDivCorner(false)}></div>
                                                This is test Applied
                                            </div>
                                                <div style={positioning}>
                                                    <VerticalAlignBottomIcon style={{ color: '#00559f', height: 28, width: 31, padding: 3, borderBottom: '1px solid #00559f', borderTop: '1px solid #00559f', borderRight: '1px solid #00559f', borderLeft: '1px solid #00559f' }} />
                                                    <VerticalAlignTopIcon style={{ color: '#00559f', height: 28, width: 31, padding: 3, borderBottom: '1px solid #00559f', borderTop: '1px solid #00559f', borderRight: '1px solid #00559f' }} />
                                                    <FormatIndentIncreaseIcon style={{ color: '#00559f', height: 28, width: 31, padding: 3, borderBottom: '1px solid #00559f', borderTop: '1px solid #00559f', borderRight: '1px solid #00559f' }} />
                                                    <FormatIndentDecreaseIcon style={{ color: '#00559f', height: 28, width: 31, padding: 3, borderBottom: '1px solid #00559f', borderTop: '1px solid #00559f', borderRight: '1px solid #00559f' }} />
                                                    <FormatAlignJustifyIcon style={{ color: '#00559f', height: 28, width: 31, padding: 3, borderBottom: '1px solid #00559f', borderTop: '1px solid #00559f', borderRight: '1px solid #00559f' }} />
                                                </div>
                                            </> :
                                                <div style={divNormalStyling} onClick={() => setSelectDiv(true)}>This is test Initial</div>
                                            : ""}

                                    </div>
                                    :
                                    <img src={gradient} alt="ImageText" ref={ref} onMouseMove={onMouseMove} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} style={quickAndDirtyStyle}></img>}

                            </div>


                            {/* Controller section below!! */}

                            <div style={{ height: 500, width: 'auto', borderLeft: '1px solid #dee2e6' }} >
                                <div className='backgroundButton'>
                                    <h5 style={{ marginLeft: 60 }}>Background Image</h5>
                                    <CloseIcon style={{ marginLeft: 40, cursor: 'pointer' }} onClick={() => setBackgroundImageModal(false)} />
                                </div>
                                <div className='backgroundButton' style={{ fontSize: 14, marginTop: 20 }}>
                                    <label style={{ marginTop: 10, marginLeft: 17, marginRight: 20 }}>URL</label>
                                    <input style={{ marginLeft: 20, width: 'auto', fontSize: 14 }} className="form-control" type="text" placeholder='Enter you url' value={backgroundImageUrl} onChange={(e) => setBackgroundImageURL(e.target.value)}></input>
                                </div>
                                <div className='backgroundButton ' style={{ marginTop: 17 }}>
                                    <label style={{ fontSize: 14, marginLeft: 17, marginRight: 20 }}>Height</label>
                                    <Box width={200}>
                                        <Slider
                                            size="small"
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            value={backgroundHeight}
                                            onChange={(e) => handleBackgroundImageHeight(e)}
                                        />
                                    </Box>
                                </div>
                                <div className='backgroundButton' style={{ marginTop: 10 }}>
                                    <label style={{ fontSize: 14, marginLeft: 17, marginRight: 20 }}>Width</label>
                                    <Box width={200}>
                                        <Slider
                                            size="small"
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            value={backgroundWidth}
                                            onChange={(e) => handleBackgroundImageWidth(e)}
                                        />
                                    </Box>
                                </div>
                                <div className='backgroundButton'>
                                    <button type="button" className='btn btn-primary' style={{ marginLeft: 30, fontSize: 13, }} onClick={() => setApplyBackground(true)}>Set Background</button>
                                    <button type="button" className='btn btn-primary' style={{ marginLeft: 5, fontSize: 13, }} onClick={() => setApplyBackground(false)}>Unset Background</button>
                                </div>
                                <h5 style={{ textAlign: 'center', marginTop: 20 }}>Element on Top</h5>
                                <div className='backgroundButton'>
                                    <Checkbox defaultChecked size="small" style={{ marginTop: 15, marginLeft: 20 }} />
                                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} style={{ marginLeft: 20 }}>
                                        <InputLabel id="demo-simple-select-standard-label" style={{ fontSize: 14 }}>Effect</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={backgroundModalInput}
                                            onChange={handleBackgroundModalInput}
                                            label="Effect"
                                            style={{ backgroundColor: 'white' }}
                                        >
                                            <MenuItem value={'section'}>Section</MenuItem>
                                            <MenuItem value={'text'}>Text</MenuItem>
                                            <MenuItem value={"none"}>None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <button type="button" className='btn btn-primary' style={{ marginLeft: 100, fontSize: 13, marginTop: 60 }} onClick={() => handleBackgroundModalButton()}>Apply to Module</button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}
export default AboutUsDynamic;