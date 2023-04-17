import React from 'react';
import { useEffect, useState, useCallback, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ClearIcon from '@mui/icons-material/Clear';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { HexColorPicker } from "react-colorful";
import outsideClickOutside from "../../../../Common//ColorPicker/outsideClickOutside";
import outsideClickSecond from "../../../../Common//ColorPicker/outsideClickSecond"
import outsideClickThird from '../../../../Common/ColorPicker/outsideClickThird';
import outsideClickFourth from '../../../../Common/ColorPicker/outsideClickFourth';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import axios from "../../../../Common/SecureInstance/axiosInstance";
import networkConstant from '../../../../Common/API/uri_constant';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
type buttonModuleProps ={
    showing :boolean;
    onHiding : (data : string)=>void;
    closeButtonDiv : ()=>void;
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

function ButtonModule(props:buttonModuleProps) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [buttonRoute, setButtonRoute] = useState<string>("")
    const [buttonHover, setButtonHover] = useState(false)
    const [checkedButtonBorder, setCheckedButtonBorder] = React.useState(false);
    const [checkedButtonBorderOnly, setCheckedButtonBorderOnly] = React.useState(false)
    const [color, setColor] = useState("#cce4ff");
    const popover = React.useRef<HTMLInputElement>(null);
    const [isOpen, toggle] = useState(false);
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
    const [codeSelected, setCodeSelected] = useState<boolean>(false)
    const [value, setValue] = React.useState(0);
    const [borderStyle, setBorderStyle] = React.useState('solid');

    const handleChangeBorderStyle = (event: SelectChangeEvent) => {
        setBorderStyle(event.target.value);
    };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeAccordion =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
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
    const handleChangeButtonBorder = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedButtonBorder(event.target.checked);
    };
    const handleChangeButtonOnly = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedButtonBorderOnly(event.target.checked);
    };
    const handleCheckboxHover = () => {
        setButtonHover(!buttonHover ? true : false)
    }
    const ButtonDataStyleLinear = { backgroundImage: `linear-gradient(to bottom, ${color}, ${secondColor})`, borderRadius: buttonData.borderRadius, backgroundColor: `${color}`, border: ` ${buttonData.borderWidth}px ${buttonData.borderStyle} ${fourthColor}`, paddingTop: buttonData.paddingTop, paddingLeft: buttonData.paddingLeft, paddingRight: buttonData.paddingRight, paddingBottom: buttonData.paddingBottom, ':hover': { backgroundColor: `${buttonData.hoverSolidColor}` } }
    const buttonDataStyle = { borderRadius: checkedButtonBorder ? buttonData.borderRadius : 0, backgroundColor: `${color}`, border: ` ${checkedButtonBorderOnly ? buttonData.borderWidth : 0}px  ${checkedButtonBorderOnly ? buttonData.borderStyle : 'none'} ${checkedButtonBorderOnly ? fourthColor : ""}`, paddingTop: buttonData.paddingTop, paddingLeft: buttonData.paddingLeft, paddingRight: buttonData.paddingRight, paddingBottom: buttonData.paddingBottom }
    function generateUniqueLetters(num: number) {
        let result = '';
        const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < num; i++) {
            const randomIndex = Math.floor(Math.random() * possibleChars.length);
            result += possibleChars.charAt(randomIndex);
        }
        return result;
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

        //setModalButton(false);
        props.closeButtonDiv()
        //setEditorContent((prev) => prev + `<button  class=${uniqueLetters} id="buttonRoute" value=${buttonRoute} >Click Me</button>`);
        props.onHiding(`<button  class=${uniqueLetters} id="buttonRoute" value=${buttonRoute} >Click Me</button>`)
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
    return (
        <Modal
            show={props.showing}
            onHide={props.closeButtonDiv}
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
                        <Tab label={<ClearIcon onClick={props.closeButtonDiv} />} ></Tab>
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
    )
}
export default ButtonModule