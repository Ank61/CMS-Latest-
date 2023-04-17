import React from 'react';
import { useState, useRef } from "react";
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import "../aboutUsAdmin.css";
import "../../AdminPageCSS/adminPages.css";
import Slider from '@mui/material/Slider';
import gradient from "../../../../../Images/gradient.jpeg";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

type backgroundModalProps = {
    showing: boolean;
    onHiding: (data: string) => void;
    closeBackground: () => void;
}
function BackgroundModule(props: backgroundModalProps) {
    const [backgroundModalInput, setBackgroundModalInput] = React.useState('');
    const [applyBackground, setApplyBackground] = useState(false);
    const [selectDiv, setSelectDiv] = useState(false)
    const [pressed, setPressed] = useState(false)
    const [backgroundHeight, setBackgroundHeight] = useState<number>(40)
    const [backgroundWidth, setBackgroundWidth] = useState<number>(40)
    const [position, setPosition] = useState({ x: 1, y: 1 })
    const ref = useRef<HTMLImageElement>(null)
    const refDiv = useRef<HTMLDivElement>(null)
    const [pressedDiv, setPressedDiv] = useState(false)
    const [positionDiv, setPositionDiv] = useState({ x: 1, y: 1 })
    const [divHeight, setDivHeight] = useState<number>(230);
    const [divWidth, setDivWidth] = useState<number>(450);
    const [pressDivCorner, setPressedDivCorner] = useState(false)
    const [backgroundImageUrl, setBackgroundImageURL] = useState<string>("")
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
    const divNormalStyling = {
        height: divHeight,
        width: divWidth,
        backgroundColor: 'white',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: 12,
        marginLeft: positionDiv.x,
        marginTop: positionDiv.y,
    }
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
    function handleBackgroundImageHeight(e: any) {
        setBackgroundHeight(e.target.value);
    }
    function handleBackgroundImageWidth(e: any) {
        setBackgroundWidth(e.target.value);
    }
    const handleBackgroundModalInput = (event: SelectChangeEvent) => {
        setBackgroundModalInput(event.target.value);
    };
    const outsideSection = `height : ${divHeight}px;width : ${divWidth}px;  background-color: white; box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); border-radius : 14px;margin-left : ${positionDiv.x}px; margin-top : ${positionDiv.y}px;`
    const applieBackgroundEditor = `width : ${backgroundWidth * 14}px; height :${backgroundHeight * 10}px ;background-image: url(${gradient}); background-position : center 50% ; background-size : cover; margin-left :${position.x}px;padding-top : ${position.y}px; `
    function handleBackgroundModalButton() {
        props.onHiding(`<div><div style="${applieBackgroundEditor}"> <div style="${outsideSection}">This is test</div><div></div>`)
        props.closeBackground();
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
    return (
        <Modal show={props.showing} onHide={props.closeBackground} backdrop="static" keyboard={false} size='xl'>
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
                            <CloseIcon style={{ marginLeft: 40, cursor: 'pointer' }} onClick={props.closeBackground} />
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
    )
}
export default BackgroundModule;