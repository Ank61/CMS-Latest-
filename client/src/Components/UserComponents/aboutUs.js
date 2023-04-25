import React,{ useEffect, useState,useRef } from "react";
import axios from "../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import  Helmet  from 'react-helmet';
import Header from "../Common/Header/header";
import parse, { domToReact } from 'html-react-parser';
import './about.css';
import networkConstant from "../Common/API/uri_constant";

function AboutUs(){
    const [data,setData] = useState()
    const [title , setTitle] = useState("Initial Title")
    const [description, setDescription] = useState("Initial Description")
    const navigate = useNavigate()
    const [allInputs , setAllInputs] = useState("");
    const [emptyInputs , setEmptyInputs] = useState(false)


var Array = []
let numInputs = 0;
const inputRefs = [];
const handleClick =(e ,route )=>{
  console.log("button clicked" , e.target.value);
  navigate(route)
}
const handleSubmitButton = (e)=>{
console.log("Clicked" ,allInputs)
var getAllString = allInputs.split(';');
var fullString = allInputs;
var getItem,lastOccurrenceIndex ,getStartingIndex, finalFirst,splitFinal ;
for(let i=0;i<numInputs;i++){
  if(i===0){
    getItem = 3;
    getStartingIndex = getAllString[getItem];
    lastOccurrenceIndex  = fullString.lastIndexOf(getStartingIndex);
    finalFirst = fullString.slice(lastOccurrenceIndex);
    splitFinal = finalFirst.split(";");
    //setFinalArray((prev)=>[...prev, finalArray.push( splitFinal[0])])
   console.log( splitFinal[0]);
   Array.push( splitFinal[0]);
  console.log(splitFinal)
  }else{
    //for i=1 && i=2 and more...
    getStartingIndex = splitFinal.slice(i);
    lastOccurrenceIndex = fullString.lastIndexOf(getStartingIndex[0+i]);
    finalFirst = fullString.slice(lastOccurrenceIndex);
    splitFinal = finalFirst.split(";");
    console.log("In the else part" , splitFinal[0]);
    Array.push( splitFinal[0]);
  }
}
console.log("Final Array" ,Array)
axios.post(networkConstant.URL.submitButton , Array).then(response=>console.log(response)).catch(err=>console.log(err))

const inputFields = document.querySelectorAll("input");
inputFields.forEach(input => {
  input.value = '';
});

}
const handleAllInput = (e)=>{
  setAllInputs((prev)=>prev + ';' +e.target.value)
}
const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) {
      return;
    }
    if (attribs.id === 'buttonRoute') {
      return React.createElement(
        'button',
       { onClick: (e)=>handleClick(e,attribs.value),
      className : attribs.class},
        domToReact(children, options)
      )
    }
    if(attribs.id==="postIt"){
      return React.createElement(
        'button',
        {onClick : (e)=>handleSubmitButton(e),
        className : attribs.class},
        domToReact(children, options)
      )
    }
    if(attribs.class==="form-control"){
      numInputs++;
      return React.createElement(
        'input',
        {onChange : (e)=>handleAllInput(e),
        className : attribs.class},
      )
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

const reactElement = parse(`${data}`, options);

    useEffect(()=>{
        axios.get(`${networkConstant.URL.userAboutUs}`)
        .then(response=>{
            if (response.data ==="Logout") {
                navigate("/admin")
            } else {
              setTitle(response.data.rest[0].title)
              setDescription(response.data.rest[0].description)
              setData(response.data.data)
            }
        })
        .catch(err=>console.log(err))
    }
    ,[])



return (
    <div>
          <Helmet 
        title = {`${title}`}
        meta={[
        {
          name: `description`,
          content: description,
        } 
      ]}/>
      <Header/>
        {reactElement}
        {/* {data? <div dangerouslySetInnerHTML={{ __html: data }}></div> : ""} */}
        {JSON.stringify(data)}
    </div>
)
}
export default AboutUs;