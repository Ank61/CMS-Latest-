import React from 'react';
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import Layout from "../../../Common/Layout/layout";
import axios from "../../../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import 'froala-editor/js/plugins/char_counter.min.js';
import toast, { Toaster } from 'react-hot-toast';
import "../AboutUs/aboutUsAdmin.css";
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
import DivModule from '../AboutUs/Features/divModule';
import ButtonModule from '../AboutUs/Features/buttonModule';
import BackgroundModule from '../AboutUs/Features/backgroundModule';
import CodeIcon from '@mui/icons-material/Code';
import MetaTagModal from '../AboutUs/Features/metaTagModal';
import BoltIcon from '@mui/icons-material/Bolt';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import { SelectChangeEvent } from '@mui/material/Select';
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
import { Typeahead } from 'react-bootstrap-typeahead';
import Select from 'react-select';
import CachedIcon from '@mui/icons-material/Cached';
import {Jodit} from "jodit"; 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import calender from "../";
import ArticleIcon from '@mui/icons-material/Article';
import calender from "../../../../Images/calendar.png";
import bold from "../../../../Images/bold-option.png";
import indent from "../../../../Images/indent.png";
import outdent from "../../../../Images/indent (3).png";
import underline from "../../../../Images/underline.png";
import italic from "../../../../Images/italic-font.png";
//import { faStrikethrough, fas } from '@fortawesome/free-solid-svg-icons';
import strike from "../../../../Images/strikethrough-text-option-interface-symbol.png";
import line from "../../../../Images/minus-sign-of-a-line-in-horizontal-position.png";
import table from "../../../../Images/table (1).png";
import { mobile } from 'jodit/types/plugins/mobile/mobile';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { switchClasses } from '@mui/material';


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
    required?: boolean | undefined
}
interface emptyEdit {
    path: String
    name: String
}
interface patternaData{
    div1 : boolean;
    div2 : boolean;
    div3 : boolean;
    div4 : boolean;
    div5 : boolean;
}

function EmptyEdit(props: emptyEdit) {
    const [moduleDetails, setModuleDetails] = useState<moduleDetail>()
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
    const [formOuter, setFormOuter] = React.useState('div');
    const [intialLabel, setInitialLabel] = useState("")
    const [intialPlaceholder, setInitialPlaceholder] = useState("")
    const [intialRequired, setIntialReqiured] = useState(false)
    const [intialValidation, setIntialValidation] = useState<string>("")
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
    const [editorContent, setEditorContent] = useState<string>('');
    const editorRef= useRef<HTMLTextAreaElement>(null);
    const [editorInstance, setEditorInstance] = useState<Jodit | null>(null);
    const [formData , setFormData] = useState<string>('')
    //States for the from Dynamic
    const [ insideDiv1 , setInsideDiv1] =useState<boolean>(false)
    const [ insideDiv2 , setInsideDiv2] =useState<boolean>(false)
    const [ div1Data , setDiv1Data] = useState<boolean>(false)
    const [ div2Data , setDiv2Data] = useState<boolean>(false)
    const [ finalDataDivisionModule , setFinalDataDivisionModule] =useState<number>(0)
    const [pattern , setPattern] = useState<number>(2)
    const [pattherData,setPatternData] = useState<patternaData>({div1 : false , div2: false , div3 : false , div4 : false , div5 : false})
    



    const handlePatternSelected = (event : any)=>{
    const divName = event.target.value;
    if(divName.match("div1")){
        const firstDiv = editorContent.indexOf("div1")
        const lastDivTag = editorContent.indexOf("</div>" , firstDiv) 
        console.log("This is the div 1index" , editorContent, firstDiv  ,lastDivTag , editorContent.slice(firstDiv , lastDivTag) )
        setPatternData({div1 : true , div2: false , div3 : false , div4 : false , div5 : false})
    }
    else if(divName.match("div2")){
        setPatternData({div1 : false , div2: true , div3 : false , div4 : false , div5 : false})
    }
    else{
        setPatternData({div1 : false , div2: false , div3 : false , div4 : false , div5 : false})
    }
    }
    var lastMatchingItem: Item;
    // var  editor :any ;
    const options = [
        { value: 'Email', label: 'Email' },
        { value: 'Password', label: 'Password' },
        { value: 'Number', label: 'Number' },
    ];
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const froalaEditorMain = (newContent: string) => {
        setEditorContent(newContent);
        const obj = {
            moduleId: `${id}`,
            data: `${newContent}`
        }
        window.localStorage.setItem("Preview", JSON.stringify(obj))
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!anchorEl) {
            setAnchorEl(event.currentTarget);
            a11yProps(0)
            // setCurrentPosition(editorReff.current)
            // var editor = editorReff.current?.getEditor()
            // var selection = editor.selection.get()
            // setSelectionIndex(selection)
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
        const login = window.localStorage.getItem("Login")
        if (!login) {
            navigate("/admin")
        }
        else {
            const obj = {
                name: props.name
            }
            axios.post(`${networkConstant.URL.editPage}`, obj).then(response => {
                if (response.data === "Logout") {
                    toast.error("Session expired")
                    setTimeout(() => {
                        navigate("/admin")
                    }, 1000)
                } else {
                    setModuleDetails(response.data[0].Modules[`${id}`])
                    const data = response.data[0].Modules[`${id}`].data;
                    if(editorRef.current){
                       const editor = Jodit.make(editorRef.current
                            ,
                             {
                            zIndex: 0,
                            readonly: false,
                            activeButtonsInReadOnly: ['source', 'fullsize', 'print', 'about', 'dots'],
                            toolbarButtonSize: 'medium',
                            theme: 'default',
                            saveModeInCookie: false,
                            spellcheck: true,
                            editorCssClass: 'editorStyling',
                            triggerChangeEvent: true,
                            width: 'auto',
                            height: 'auto',
                            minHeight: 460,
                            direction: '',
                            language: 'auto',
                            debugLanguage: false,
                            i18n: 'en',
                            tabIndex: -1,
                            toolbar: true,
                            enter: "P",
                            useSplitMode: false,
                            colors: {
                                greyscale:  ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
                                palette:    ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
                                full: [
                                    '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
                                    '#DD7E6B', '#EA9999', '#F9CB9C', '#FFE599', '#B6D7A8', '#A2C4C9', '#A4C2F4', '#9FC5E8', '#B4A7D6', '#D5A6BD',
                                    '#CC4125', '#E06666', '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#6D9EEB', '#6FA8DC', '#8E7CC3', '#C27BA0',
                                    '#A61C00', '#CC0000', '#E69138', '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#3D85C6', '#674EA7', '#A64D79',
                                    '#85200C', '#990000', '#B45F06', '#BF9000', '#38761D', '#134F5C', '#1155CC', '#0B5394', '#351C75', '#733554',
                                    '#5B0F00', '#660000', '#783F04', '#7F6000', '#274E13', '#0C343D', '#1C4587', '#073763', '#20124D', '#4C1130'
                                ]
                            },
                            colorPickerDefaultTab: 'background',
                            imageDefaultWidth: 300,
                            removeButtons: [],
                            disablePlugins: [],
                            extraButtons: [
                                // {
                                //     name: 'insertDate',
                                //     iconURL: 'http://xdsoft.net/jodit/logo.png',
                                //     exec: function (edit:any) {
                                //         edit.s.insertHTML(new Date().toDateString());
                                //     }
                                // }
                            ],
                            sizeLG: 900,
                            sizeMD: 700,
                            sizeSM: 400,
                            buttons: [
                                {
                                    name: 'bold',
                                    iconURL: bold,
                                    tooltip: 'Bold',
                                    exec: function (editor : any) {
                                        editor.execCommand('bold');
                                    }
                                },
                                {
                                    name: 'strikethrough',
                                    iconURL: strike,
                                    tooltip: 'Strikethrough',
                                    exec: function (editor : any) {
                                        editor.execCommand('strikethrough');
                                    }
                                }
                                ,
                                {
                                    name: 'outdent',
                                    iconURL: underline,
                                    tooltip: 'Underline',
                                    className: 'custom-button',
                                    exec: function (editor : any) {
                                        editor.execCommand('underline');
                                    }
                                },
                                {
                                    name: 'italic',
                                    iconURL: italic,
                                    tooltip: 'Italic',
                                    exec: function (editor : any) {
                                        editor.execCommand('italic');
                                    }
                                }
                                , '|',
                                'ul',
                                'ol', '|',
                                {
                                    name: 'outdent',
                                    iconURL: outdent,
                                    tooltip: 'Outdent Line',
                                    exec: function (editor : any) {
                                        editor.execCommand('outdent');
                                    }
                                }
                                ,
                                {
                                    name: 'indent',
                                    iconURL: indent,
                                    tooltip: 'Indent Line',
                                    exec: function (editor : any) {
                                        editor.execCommand('indent');
                                    }
                                }
                                ,  '|',
                                'font',
                                'fontsize',
                                'brush',
                                'paragraph', '|',
                                'image',
                                'video',
                                {
                                    name: 'table',
                                    iconURL: table,
                                    tooltip: 'Insert Table',
                                    exec: function (editor : any) {
                                        var tableHTML = `<table>
                        <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        </tr>
                        <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        </tr>
                        </table>`;
                        editor.s.insertHTML( tableHTML);
                                    }
                                }
                                ,
                                'link', '|',
                                'align', 'undo', 'redo', '|',
                                 '|',
                                {
                                    name: 'insertDate',
                                    iconURL: calender,
                                    tooltip: 'Insert Date',
                                    exec: function (edit:any) {
                                        edit.s.insertHTML(new Date().toDateString());
                                    }
                                },
                                {
                                    name: 'Hr',
                                    iconURL:line ,
                                    tooltip: 'Insert line',
                                    exec: function (edit:any) {
                                        edit.s.insertHTML('<hr/>');
                                    }
                                }
                            ],
                            buttonsXS: [
                                'bold',
                                'image', '|',
                                'brush',
                                'paragraph', '|',
                                'align', '|',
                                'undo', 'redo', '|',
                                'eraser',
                                'dots'
                            ],
                            events: {
                                afterCommand: function (command:string, value:any) {
                                    if (command === 'justifyLeft' || command === 'justifyCenter' || command === 'justifyRight') {
                                      editor.s.focus();
                                      editor.execCommand('formatBlock', false, 'div');
                                      editor.execCommand(command, false, value);
                                    }
                                  }
                            },
                        });
                        editor.events.on('change', () => {
                            setEditorContent(editor.value);
                          });
                          editor.value = data;
                          setEditorInstance(editor);
                    }
                    setTitle(response.data[0].title)
                    setDescription(response.data[0].description)
                    const obj = {
                        moduleId: `${id}`,
                        data: `${editorContent}`
                    }
                    window.localStorage.setItem("Preview", JSON.stringify(obj))
                }
            }).catch(err => console.log(err))
        }
    }, [])

    function handleUpdate() {
        // const converted = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        const obj = {
            moduleId: moduleDetails?.moduleId,
            moduleName: `${moduleDetails?.moduleName}`,
            data: `${editorContent}`,
            collectionName: `${props.name}`
        }
        console.log("update clicked", obj)
        axios.post(`${networkConstant.URL.update}`, obj)
            .then(response => {
                console.log(response.data)
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
        const obj =
        {
            moduleId: moduleDetails?.moduleId,
            collectionName: `${props.name}`
        };
        axios.post(`${networkConstant.URL.deleteModule}`, obj).then(response => {
            console.log(response)
            toast.success("Deleted successfully")
            setTimeout(() => { navigate(`/admin${props.path}`) }, 700)
        }
        ).catch(err => console.log(err))
    }
    const closeDivModule = (newData: string) => {
        if (editorInstance) {
            editorInstance.value =editorContent+ newData;
            setEditorContent(editorContent+newData);
          }
    }
    const closeDiv = () => {
        setModal(false)
    }
    const closeButtonModule = (newData: string) => {
        console.log(newData)
        if (editorInstance) {
            editorInstance.value =editorContent+ newData;
            setEditorContent(editorContent+newData);
          }
    }
    const closeButtonModuleDiv = () => {
        setModalButton(false);
    }
    const closeBackgroundModule = () => {
        setBackgroundImageModal(false)
    }
    const closeBackground = (newData: string) => {
        // const editor = cursorPosition?.getEditor();
        // if (!editor) return;
        // const div = `${newData}`;
        // editor.html.insert(div, selectionIndex);
        if (editorInstance) {
            editorInstance.value =editorContent+ newData;
            setEditorContent(editorContent+newData);
          }
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
    const getDivModule =(data : any)=>{
        console.log("This data from div Module" , data)
        //Do some opertion to solve the part
        setPattern(2)
    }
    const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target?.value);
    }
    const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    // const editorReff = useRef<FroalaEditor>(null);
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
        setMultipleLabel((prev) => [...prev, { item: items, label: value, placeholder: constantPlaceholder, required: lastMatchingItem?.required ? true : false }])
        setConstantLabel(value)
        setConstantItem(items)
    }
    const handleDynamicPlaceholder = (placeholder: string, items: number) => {
        setMultipleLabel((prev) => [...prev, { item: items, label: constantLabel, placeholder: placeholder, required: multipleLabel[items - 1]?.required ? true : false }])
        setConstantItem(items)
        setConstantPlaceholder(placeholder)
    }
    const handleSubmitButton = () => {
        setShowSubmitButton(!showSubmitButton)
        setFinalForm(lastObjects)
    }
    const handleWindowChange = () => {
        const obj = {
            moduleId: `${id}`,
            data: `${editorContent}`
        }
        window.localStorage.setItem("Preview", JSON.stringify(obj))
        window.open(`http://${window.location.host}${props.path}/preview`, '_blank');
    }
    const handleFormData = () => {
        let result: any;
        switch (finalForm?.length) {
            case 1:
                result = `<div style="height : 200px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder='${intialPlaceholder}' required='${intialRequired}'></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label}, ${finalForm[0].validations}' ></input></div> <button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button><div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 2:
                result = `<div style="height : 300px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder='${intialPlaceholder}' required='${intialRequired}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button><div>&nbsp; &nbsp;<p>  </p>`
                break;
            case 3:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control"  id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} required=${finalForm[2].required}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 4:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 5:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[4].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 6:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 7:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[6].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[6].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 8:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[6].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[6].placeholder}></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[7].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[7].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>&nbsp; &nbsp;<p>  </p>`;
                break;
            case 9:
                result = `<div style="height : 500px ; border : 1px solid #dee2e6;width :300px;"><div style="display:flex;flex-direction :row ; margin-top : 13px">${intialLabel}<input type="text" class="form-control" id='${intialLabel} ${intialValidation}' style="width : 50% ;height : 30px;font-size : 12px ;margin-left : 20px" placeholder=${intialPlaceholder} required=${intialRequired} ></input></div><div style="display:flex;flex-direction :row ; margin-top : 13px">${finalForm[0].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder='${finalForm[0].placeholder === undefined ? "" : finalForm[0].placeholder}' required='${finalForm[0].required}' id='${finalForm[0].label} ${finalForm[0].validations}' ></input></div><div style="display:flex;flex-direction :row">${finalForm[1].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[1].placeholder} required=${finalForm[1].required}></input></div><div style="display:flex;flex-direction :row">${finalForm[2].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[2].placeholder} ></input></div><div style="display:flex;flex-direction :row">${finalForm[3].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[3].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[4].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[5].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[6].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[6].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[7].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[7].placeholder}></input></div><div style="display:flex;flex-direction :row">${finalForm[8].label}<input type="text" class="form-control" style="width : 50% ;font-size : 12px ;height : 30px;margin-left : 20px" placeholder=${finalForm[8].placeholder}></input></div><button class='btn btn-primary submitButton' id="postIt" style="font-size : 12px ; margin-top : 20px">${buttonText ? buttonText : "Submit"}</button></div>`;
                break;
        }
        //We have got the form data
        //Now we have to take the present input and find the present index of the special charachtar that present state
        // console.log("This sis defalt state" , editorContent , "indexof div 1" , editorContent.indexOf("Div 1" ) )
        setFormData(result)
        if (editorInstance) {
            editorInstance.value =editorContent+ result;
            setEditorContent(editorContent+result);
          }
        setFormModal(false)
    }
    var lastObjects: any;
    const handleCheckBoxForm = (value: any, items: number, index: number) => {
        setMultipleLabel((prev) => [...prev, { item: items, label: lastMatchingItem?.label, placeholder: lastMatchingItem?.placeholder, required: value.target.checked }])
    }
    const handleMultiSelect = (event: any) => {
        let classString = "";
        event.map((item: any, index: number) => {
            classString += " " + item.value;
        });
        setIntialValidation(classString)
    };
    const handleMultiSelectDynamic = (event: any, index: any) => {
        let classString = "";
        event.map((item: any, index: number) => {
            classString += " " + item.value;
        });
        setMultipleLabel((prev) => [...prev, { item: index, label: lastMatchingItem?.label, placeholder: lastMatchingItem?.placeholder, required: lastMatchingItem?.required, validations: classString }])
    }
    const handleCache = () => {
        axios.get(`${networkConstant.URL.caches}`).then((response) => {
            if (response.data !== "logout") {
                toast.success("Cache cleared")
            }
        }).catch(err => console.log(err))
    }
    function handleLivePage() {
        //window.open(`http://${window.location.host}/user${props.path}`, '_blank');
        navigate(`/user${props.path}`);
    }
    const handleChangeTextArea=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
            setEditorContent(event.target.value);
    }
    //editor.setEditorValue('<p>start</p>')

   
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
                        {/* <button style={!checkSize? {border:'none', backgroundColor : '#f5f5f5',marginRight : 7} : {opacity: '0.1',border:'none', backgroundColor : '#f5f5f5',marginRight : 7}} onClick={()=>setCheckSize(false)}><LaptopIcon/></button>
                <button style={!checkSize?{opacity: '0.1',border:'none', backgroundColor : '#f5f5f5',marginRight :20} :{border:'none', backgroundColor : '#f5f5f5',marginRight :20}} onClick={()=>setCheckSize(true)}><SmartphoneIcon/></button> */}
                        <button className='updateButton' onClick={() => handleLivePage()}><ArticleIcon style={{ height: 20 }} /> Live Page</button>
                        <button className='developerButton' style={{ color: '#ef0b60' }} onClick={handleBootstrap}><BoltIcon style={{ height: 21, color: '#ef0b60' }} />Developer</button>
                        <button className='developerButton' onClick={handleCache}><CachedIcon style={{ height: 18 }} /> Clear Cache</button>
                        <button className='updateButton' onClick={() => setTagModal(true)}><CodeIcon style={{ height: 21 }} /> Meta Tag</button>
                        <button className="updateButton" onClick={handleWindowChange}><VisibilityIcon style={{ height: 21 }} />Preview</button>
                        <button className="updateButton" onClick={() => handleUpdate()}><SendIcon style={{ height: 20 }} /> Update</button>
                        <button className="updateButton" onClick={() => handleDelete()}><DeleteIcon style={{ height: 21 }} /></button>
                    </div>
                </div>
                <div style={{ marginLeft: 10, marginRight: 10 }}>
                    {/* <FroalaEditor
                        tag='textarea'
                        model={editorContent}
                        onModelChange={froalaEditorMain}
                        ref={editorReff}
                        config={{
                            charCounterCount: true,
                            height: 410,
                            width: '100%',
                            autoFocus: true,
                            pluginsEnabled: ['fontFamily', 'fontSize', 'colors', 'textColor', 'image', "getPDF", "codeView", "inlineStyle", "inlineClass", "link", "video", "emoticons", "wordPaste", "embedly", "fontAwesome", "draggable", "lists", "paragraphStyle", "paragraphFormat", "quote", "align", "insertHTMLButton", "table"],
                            toolbarButtons: ['insertHTML', 'align', "quote", "draggable", "fontAwesome", "embedly", "wordPaste", "emoticons", "insertVideo", "insertLink", "inlineClass", "inlineStyle", "html", "getPDF", 'insertImage', 'backgroundColor', 'textColor', 'color', 'fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', 'paragraphFormat', 'formatOL', 'formatUL', 'outdent', 'indent', 'insertLink', 'insertFile', 'insertTable', 'specialCharacters', 'selectAll', 'clearFormatting', 'print', 'help', 'html', 'undo', 'redo', 'trackChanges', 'markdown', "insertHR", 'uploadFile'],
                        }} 
                    /> */}
<textarea id="editor" value={editorContent} ref={editorRef}></textarea>
{/* <div>{JSON.stringify(editorContent)}</div> */}
                </div>
                <DivModule showing={modal} getData={getDivModule} onHiding={closeDivModule} closeDiv={closeDiv} />
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
                                <div className='backgroundButton' style={{ width: '80%', cursor: 'pointer' }}>
                                    <label>CSS</label>
                                    <CloseIcon style={{ marginLeft: '100%' }} onClick={() => setDeveloperModal(false)}></CloseIcon>
                                </div>
                                <textarea className="form-control" placeholder='Enter CSS Code' rows={22} cols={82} style={{ fontSize: 12, marginLeft: 10, width: 'auto', boxShadow: 'none' }} onChange={(e) => setDeveloperCSS(e.target.value)} />
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
                                        {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}> */}
                                        {/* <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={formOuter}
                                                onChange={handleChangeForm}
                                                label="Age"
                                                style={{ fontSize: 14, width: '80%', backgroundColor: 'white' }}
                                            >
                                                <MenuItem value="div" style={{ fontSize: 13 }}>Div</MenuItem>
                                            </Select> */}
                                        {/* </FormControl> */}
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
                                                                {/* <button className="formButtonClick" style={{ marginLeft: '30%', width: 'auto', height: 25, marginTop: '13%', border: '1px solid #f71701' }} onClick={() => setShowMore(false)}>
                                                                    <RemoveIcon style={{ fontSize: 17, color: '#f71701' }} />
                                                                </button> */}
                                                                <div style={{ position: 'relative' }}>
                                                                    <CloseIcon style={{ fontSize: 17, color: '#f71701', position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => setShowMore(false)} />
                                                                </div>
                                                                <div className='backgroundButton' style={{ fontSize: 12, marginTop: 12 }}>
                                                                    <div style={{ marginTop: 14 }}> <Checkbox defaultChecked size="small" checked={intialRequired} onClick={() => setIntialReqiured(!intialRequired)} /></div>
                                                                    <label style={{ marginTop: 24 }}>Required</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Select
                                                            // defaultValue={[options[2], options[3]]}
                                                            closeMenuOnSelect={true}
                                                            isMulti
                                                            name="colors"
                                                            options={options}
                                                            onChange={handleMultiSelect}
                                                            className="basic-multi-select selectMultiple"
                                                            classNamePrefix="apply validation"
                                                            styles={{}}
                                                        />
                                                    </div>
                                                    {/* <div className='backgroundButton' style={{ fontSize: 12, marginTop: 12 }}>
                                                        <div style={{ marginTop: 14 }}> <Checkbox defaultChecked size="small" checked={intialRequired} onClick={() => setIntialReqiured(!intialRequired)} /></div>
                                                        <label style={{ marginTop: 24 }}>Required</label>
                                                    </div> */}
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
                                                                    {/* <button className="formButtonClick" style={{ marginLeft: '30%', width: 'auto', height: 25, marginTop: '13%' }} onClick={(e) => handleRemove(e, item)}> */}
                                                                    <div style={{ position: 'relative' }}>
                                                                        <CloseIcon style={{ fontSize: 17, color: '#f71701', position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={(e) => handleRemove(e, item)} />
                                                                        {/* </button> */}
                                                                    </div>
                                                                    <div className='backgroundButton' style={{ fontSize: 12, marginTop: 12 }}>
                                                                        <div style={{ marginTop: 14 }}> <Checkbox defaultChecked size="small" onClick={(e) => handleCheckBoxForm(e, item, index)} /></div>
                                                                        <label style={{ marginTop: 24 }}>Required</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Select
                                                                // defaultValue={[options[2], options[3]]}
                                                                isMulti
                                                                name="colors"
                                                                options={options}
                                                                onChange={(e) => handleMultiSelectDynamic(e, item)}
                                                                className="basic-multi-select selectMultiple"
                                                                classNamePrefix="apply validation"
                                                                styles={{}}
                                                            />
                                                        </div>
                                                    </div>
                                                )) : ""}
                                                {formArray.length > 0 ?
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }} >
                                                        <button className='btn btn-primary' onClick={(e) => handleChange(e, 1)} style={{ fontSize: 12, width: '80%' }}> Next <KeyboardArrowRightIcon style={{ fontSize: 21 }} ></KeyboardArrowRightIcon></button>
                                                    </div>
                                                    : ""}
                                            </>
                                            : ""}
                                    </TabPanel>
                                    <TabPanel value={value} index={1}>
                                        <div className=''>
                                        <label style={{fontSize : 15}}>Select where to apply module : </label>
                                        {pattern===2 ? 
                                            <>
                                                <Grid container justifyContent="center" spacing={2} style={{ marginLeft: 2, width: '100%',marginTop : 8}}>
                                                        <Grid key={1} item>
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#ffffff',fontSize : 14 , paddingTop :0, paddingBottom :5,paddingLeft:2,fontWeight:600 }} >Div 1  {pattherData.div1 ? <div style={{width :'80%',height:'70%',backgroundColor:'#e6fcfc',fontWeight:400,marginTop:18,fontSize : 12,paddingTop:19,paddingLeft:10 }}>Form</div> : ""}</Paper>
                                                        </Grid>
                                                        <Grid key={2} item>
                                                            <Paper sx={{ height: 130, width: 80, border: '1px solid #77aadc', backgroundColor: '#ffffff',fontSize : 14, paddingTop :0, paddingBottom :5,paddingLeft:2,fontWeight:600 }} >Div 2{pattherData.div2 ? <div style={{width :'80%',height:'70%',backgroundColor:'#e6fcfc',fontWeight:400,marginTop:18,fontSize : 12,paddingTop:19,paddingLeft:10 }}>Form</div> : ""}</Paper>
                                                        </Grid>
                                                    </Grid>
                                        <div style={{ display: 'flex', justifyContent: 'center',marginTop :'3%' }}>
                                            <FormControl >
                                                <RadioGroup
                                                    row
                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                    name="row-radio-buttons-group"
                                                    onChange={handlePatternSelected}
                                                >
                                                    <FormControlLabel value="div1" control={<Radio style={{fontSize :12}} size ="small"/>}  label={<span style={{ fontSize: 14 }}>Div 1</span>} />
                                                    <FormControlLabel value="div2" control={<Radio size ="small"/>} label={<span style={{ fontSize: 14 }}>Div 2</span>} />
                                                    <FormControlLabel value="Other" control={<Radio size ="small"/>} label={<span style={{ fontSize: 14 }}>Apply below</span>} />
                                                </RadioGroup>
                                            </FormControl>
                                            </div>
                                            </> : "No pattern exists!"}
                                            <div className='backgroundButton' style={{ fontSize: 14, marginTop: '6%', alignSelf: 'center' }}>
                                                <button className="btn btn-primary" style={{alignSelf: 'center', fontSize: 13, marginLeft: '10%' }} onClick={handleSubmitButton}>Add Submit Button</button>
                                                {showSubmitButton ? <><h6 style={{ marginTop: 7 ,marginLeft : 20,fontSize : 14}}>Add Text :</h6>
                                                <input type="text" className='form-control' placeholder='Change text' style={{ fontSize: 12, marginLeft: '2%',width : '30%',height : 30 }} onChange={(e) => setButtonText(e.target.value)}></input>
                                                </>:  ""}
                                                </div>
                                             {/* Apply all the shapes here*/}
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
                                <div style={{ height: 460, width: 550, marginLeft: 10, borderTop: '1px solid #e1e1e1',marginTop:15 }} className='column'>
                                    {showMore ?
                                        <div className="backgroundButton" style={{ marginTop: 30, fontSize: 14 }}>
                                            <h6 style={{ fontSize: 13, marginRight: 'auto' }}>{JSON.stringify(intialLabel)}</h6>
                                            {intialRequired ? <h6 style={{ color: 'red' }}>*</h6> : ""}
                                            <input type="text" className='form-control' style={{ height: 30, width: '60%', marginLeft: 60, fontSize: 12 }} placeholder={JSON.stringify(intialPlaceholder)}></input>
                                        </div> : ""}
                                    {formArray ? formArray.map((items, index) => {
                                        const filteredArray = multipleLabel.filter(obj => obj.item === constantItem);
                                        lastMatchingItem = filteredArray[filteredArray.length - 1];
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
                                                {lastObjects[index]?.required ? <div style={{ color: 'red' }}>*</div> : ""}
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
export default EmptyEdit;