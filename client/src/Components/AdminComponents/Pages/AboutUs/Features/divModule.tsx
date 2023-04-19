import React from 'react';
import { useState, useCallback } from "react";
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@mui/icons-material/Clear';
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
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Form } from 'react-bootstrap';
import Popover from '@mui/material/Popover';
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import "../aboutUsAdmin.css"; 
import "../../AdminPageCSS/adminPages.css";
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
import ViewQuiltOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HexColorPicker } from "react-colorful";
import outsideClickOutside from "../../../../Common//ColorPicker/outsideClickOutside";
import outsideClickSecond from "../../../../Common//ColorPicker/outsideClickSecond"
import outsideClickThird from '../../../../Common/ColorPicker/outsideClickThird';
import outsideClickFourth from '../../../../Common/ColorPicker/outsideClickFourth';
type Data = {
    columnNumber: number
    rowNumber: number
    spacing: Number
    backgroundColor: String
    border: String
    shape: String
    complex: string
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
type DivModuleProps= {
    showing: boolean;
    onHiding: (data:string) => void;
    closeDiv : ()=>void;
  }
function DivModule(props : DivModuleProps ){
    const [value, setValue] = React.useState(0);
    const [codeSelected, setCodeSelected] = useState<boolean>(false)
    const [valueBottom, setValueBottom] = React.useState<number>(0);
    const [spacing, setSpacing] = React.useState(0);
    const [insertCode, setInsertCode] = useState<string>("")
    const [insertDiv, setInsertDiv] = useState<string>("")
    const [anchorElInsert, setAnchorElInsert] = React.useState<HTMLButtonElement | null>(null);
    const [data, setData] = useState<Data>({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    const [color, setColor] = useState("#cce4ff");
    const popover = React.useRef<HTMLInputElement>(null);
    const [isOpen, toggle] = useState(false);
    const close = useCallback(() => toggle(false), []);
    outsideClickOutside(popover, close)
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
    const [anchorElDiv, setAnchorElDiv] = React.useState<HTMLButtonElement | null>(null);
    const openDiv = Boolean(anchorElDiv);
    const idDiv = openDiv ? 'simple-popover' : undefined;
    const handleChangeGrid = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value));
    };
    const handleCloseDiv = () => {
        setAnchorElDiv(null);
    };
    const openInsert = Boolean(anchorElInsert);
    const idInsert = openInsert ? 'simple-popover' : undefined;
    let insertDivModal = `<!doctype html> <html> <head> </head> 
    <body>
    ${insertDiv}
    </body> </html>`

    function handleCloseFullModal() {
       props.closeDiv()
        setCodeSelected(false)
        setValueBottom(0);
        setSpacing(0);
        setData({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    }
    function handleInsertDiv() {
        props.onHiding(`${insertDiv}`)
        props.closeDiv()
        setCodeSelected(false)
        setValueBottom(0);
        setSpacing(0)
        setData({ columnNumber: 0, rowNumber: 0, spacing: 0, backgroundColor: "", border: "none", shape: "Square", complex: "" })
    }
    function handleBottomNavigation(event: React.MouseEvent<HTMLButtonElement>) {
    }
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    function handleInsertCode() {
        props.onHiding(`${insertCode}`)
        props.closeDiv()
        setInsertCode("")
    }
    const handleClickDiv = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElDiv(event.currentTarget);
        if (data.columnNumber === 1 && data.rowNumber === 0) {

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
    let insertCodeModal = `<!doctype html> <html> <head> </head> <body><div style='background-color : red'> ${insertCode}</div></body> </html>`;
    const handleClickInsert = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElInsert(event.currentTarget);
    };
    const handleCloseInsert = () => {
        setAnchorElInsert(null);
    };
    
    return(
    <Modal show={props.showing} onHide={props.closeDiv} backdrop="static" keyboard={false} centered  >
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
)
}
export default DivModule;