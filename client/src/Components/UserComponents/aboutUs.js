import React,{ useEffect, useState } from "react";
import axios from "../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import  Helmet  from 'react-helmet';
import Header from "../Common/Header/header";
import parse, { domToReact } from 'html-react-parser';
import './about.css';
import networkConstant from "../Common/API/uri_constant";
const html = `
  <div>
  <button id=button1>Button1</button>
  <button id=button2>Button 2</button>
  <button id=button3 value="/home">Button 3</button>
  </div>
`;



function AboutUs(){
    const [data,setData] = useState()
    const [metaTag , setMetaTag] = useState("This is new page")
    const navigate = useNavigate()
    //const htmlString = '<div><p id="new">Hello, world!</p><div onClick="/thirdDiv"></div><div onClick="/secondDiv"></div></div>';
const handleClick =(e ,route )=>{
  console.log("button clicked" , e.target.value);
  navigate(route)
}
const options = {
  replace: ({ attribs, children }) => {
    console.log(attribs)
    if (!attribs) {
      return;
    }

    if (attribs.id === 'buttonRoute') {
      return React.createElement(
        'button',
       { onClick: (e)=>handleClick(e,attribs.value),
      className : attribs.class},
        domToReact(children, options)
      );
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
            console.log(response.data)
            if (response.data ==="Logout") {
                navigate("/admin")
            } else {
            setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    }
    ,[])



return (
    <div>
          <Helmet 
        title = {"This is new title for About page"}
        meta={[
        {
          name: `description`,
          content: metaTag,
        } 
      ]}/>
      <Header/> 
        {/* {data? <div dangerouslySetInnerHTML={{ __html: data }}></div> : ""} */}
        {/* </div> */}
        {reactElement}
    </div>
)
}
export default AboutUs;