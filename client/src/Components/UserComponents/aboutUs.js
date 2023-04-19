import React,{ useEffect, useState } from "react";
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
const handleClick =(e ,route )=>{
  console.log("button clicked" , e.target.value);
  navigate(route)
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
            if (response.data ==="Logout") {
                navigate("/admin")
            } else {
              console.log(response.data.rest[0].title)
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