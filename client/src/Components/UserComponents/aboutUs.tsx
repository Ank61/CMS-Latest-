import { useEffect, useState } from "react";
import axios from "../Common/SecureInstance/axiosInstance";
import { useNavigate } from "react-router";
import  Helmet  from 'react-helmet';
import Header from "../Common/Header/header";
import parse,{ HTMLReactParserOptions, Element, domToReact } from 'html-react-parser'; 
import './about.css'




function AboutUs(){
    const [data,setData] = useState()
    const [metaTag , setMetaTag] = useState<string>("This is new page")
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8080/aboutUs/allData")
        .then(response=>{
            console.log(response.data)
            if (response.data == "Logout") {
                navigate("/admin")
            } else {
            setData(response.data)
            }
        })
        .catch(err=>console.log(err))
    }
    ,[])


      
const htmlString = '<div><span>Hello, world!</span></div>';

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode.type === 'tag') {
    }
  }
};

    // const options: HTMLReactParserOptions = {
    //     replace: (node) => {
    //         console.log(node)
    //       if (node instanceof Element && node.attribs && node.attribs.id) {
    //         console.log('ID:', node.attribs.id);
    //       }
    //       return undefined;
    //     },
    //   };
    //   const html = data? data :"";
    //   const parsedHtml = parse(html, options);
    //   console.log("This is final" , parsedHtml)
 
    // function handleMeta(){
    //     setMetaTag("This is about us page")
    // }
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
      <div  className="AboutUsMainDiv"> 
      <br></br> 
        {/* {data? <div dangerouslySetInnerHTML={{ __html: data }}></div> : ""} */}
        </div>
        {parse(htmlString, options)}
    </div>
)
}
export default AboutUs;