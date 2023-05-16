import React, { useEffect, useState } from "react";
import axios from "../../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import Helmet from 'react-helmet';
import parse, { domToReact } from 'html-react-parser';
import "../CSS/about.css"
import networkConstant from "../../Common/API/uri_constant";
import toast, { Toaster } from 'react-hot-toast';

function UserPage(props) {
  const [data, setData] = useState()
  const [title, setTitle] = useState("Initial Title")
  const [description, setDescription] = useState("Initial Description")
  const navigate = useNavigate()
  const [allInputs, setAllInputs] = useState("");
  const [globalRedIput , setGlobalRedInput] = useState(false)
 // const [InputArray, setInputArray] = useState([])

  var Array = []
  let numInputs = 0;
  var isEmptyOrWhitespace;
  var ShowError=0;
  var EmailPresent=false;
  // var GlobalRedInput;
  //Regex constants
  const handleClick = (e, route) => {
    navigate(route)
  }
  const handleClickNotfocus = (e, route) => {
    navigate(route)
  }
  const handleSubmitButton = (e) => {
    const checkFields = document.querySelectorAll("input");
    if(globalRedIput===true){ 
    //one of the input is red
    toast.error("Invalid Input")
    }
    else{
    checkFields.forEach((input, index) => {
      const regex = /^\s*$/;
      isEmptyOrWhitespace = regex.test(input.value);
      if (isEmptyOrWhitespace===true) {
        var elementId = document.getElementById(input.id);
        elementId.style.backgroundColor = "red";
        ShowError=1;
        toast.error("Invalid Input")
        return
      }
      })
      if(ShowError===0){
      console.log("Reached")
      var getAllString = allInputs.split(';');
        var fullString = allInputs;
        var getItem, lastOccurrenceIndex, getStartingIndex, finalFirst, splitFinal;
        console.log(numInputs)
        for (let i = 0; i <numInputs; i++){
          if (i === 0) {
            getItem = 3;
            getStartingIndex = getAllString[getItem];
            lastOccurrenceIndex = fullString.lastIndexOf(getStartingIndex);
            finalFirst = fullString.slice(lastOccurrenceIndex);
            splitFinal = finalFirst.split(";");
            Array.push(splitFinal[0]);
          } else {
            getStartingIndex = splitFinal.slice(i);
            lastOccurrenceIndex = fullString.lastIndexOf(getStartingIndex[0 + i]);
            finalFirst = fullString.slice(lastOccurrenceIndex);
            splitFinal = finalFirst.split(";");
            Array.push(splitFinal[0]);
          }
        }
        axios.post(networkConstant.URL.submitButton, Array).then(response => toast.success("Submitted Successfully!")).catch(err => console.log(err))
        const inputFields = document.querySelectorAll("input");
        inputFields.forEach(input => {
          input.value = '';
        });
      }
    }
  }
  const handleRequiredInput = (e, id,attribs) => {
    let intialArrayOfId = attribs.id.split("  ")
        let finalArrayOfId = intialArrayOfId.slice(1);
        finalArrayOfId.map((item,index)=>{
        EmailPresent=false
        if(item==='Email'){
          EmailPresent=true
          }
          else{
            console.log("False hit",item)
            EmailPresent = false;
          }
        })
    if(EmailPresent){
      const Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      var checkEmail = Email.test(e.target.value)
      if(checkEmail===true){
        let element = document.getElementById(id)
        element.style.backgroundColor = "white";
        setGlobalRedInput(false)
        setAllInputs((prev) => prev + ';' + e.target.value)
      }
      else{
        var element = document.getElementById(id)
        element.style.backgroundColor = "red";
        setGlobalRedInput(true)
      }
    }
    setAllInputs((prev) => prev + ';' + e.target.value)
  }
  const options = {
    replace: ({ attribs, children }) => {
      if (!attribs) {
        return;
      }
      if (attribs.id === 'buttonRoute') {
        return React.createElement(
          'button',
          {
            onClick: (e) => handleClick(e, attribs.value),
            className: attribs.class,
          },
          domToReact(children, options)
        )
      }
      if (attribs.class === 'NonFocus') {
        return React.createElement(
          'button',
          {
            onClick: (e) => handleClickNotfocus(e, attribs.value),
          },
          domToReact(children, options)
        )
      }
      if (attribs.id === "postIt") {
        return React.createElement(
          'button',
          {
            onClick: (e) => handleSubmitButton(e),
            className: attribs.class,
            style: { fontSize: 13, marginTop: 20, marginLeft: '40%', marginRight: '40%' }
          },
          domToReact(children, options)
        )
      }
      if (attribs.required === "true") {
        numInputs++
        return <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '7%' }}>
          <input type="text" className="form-control" placeholder={attribs.placeholder!==""?attribs.placeholder:"Enter value"} onChange={(e) => handleRequiredInput(e, attribs.id,attribs)} style={{ height: 30, marginRight: '10%', width: 'auto',fontSize : 13}} id={attribs.id}></input>
        </div>
      }
      if (attribs.class === 'prettify') {
        return React.createElement(
          'span',
          { style: { color: 'hotpink' } },
          domToReact(children, options)
        );
      }
    }
  };
  const reactElement = parse(`${data}`, options)
  useEffect(() => {
    debugger;
    axios.post(`${networkConstant.URL.editPageAllData}`,props)
      .then(response => {
        if (response.data === "Logout") {
          navigate("/admin")
        } else {
          console.log(response.data)
          setTitle(response.data.rest[0].title)
          setDescription(response.data.rest[0].description)
          setData(response.data.data)
        }
      })
      .catch(err => console.log(err))
  }
    , [])

  return (
    <div>
      <Toaster/>
      <Helmet
        title={`${title}`}
        meta={[
          {
            name: `description`,
            content: description,
          }
        ]} />
      {/* <Header /> */}
      {reactElement}
      {/* {data? <div dangerouslySetInnerHTML={{ __html: data }}></div> : ""} */}
      {/* {JSON.stringify(data)} */}
    </div>
  )
}
export default UserPage;