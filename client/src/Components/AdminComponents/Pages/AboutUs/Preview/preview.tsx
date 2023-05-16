import { useEffect, useState } from "react";
import axios from "../../../../Common/SecureInstance/axiosInstance";
import networkConstant from "../../../../Common/API/uri_constant";
import { useParams } from "react-router";
import '../../../../UserComponents/CSS/about.css';
import toast, { Toaster } from 'react-hot-toast';
import Header from "../../../../Common/Header/header";
import parse, { domToReact } from 'html-react-parser';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TabletMacIcon from '@mui/icons-material/TabletMac';

function Preview() {
    const [data, setData] = useState<string>()
    const [checkSize, setCheckSize] = useState<boolean>(false)
    const [tabSelected,setTabSelected] = useState(false)
    let { id } = useParams();
    var Id: number;
    var parsedData: string = ''
    useEffect(() => {
        let object = window.localStorage.getItem("Preview")
        if (object) {
            var obj = JSON.parse(object)
            Id = obj.moduleId;
        }
        axios.get(`${networkConstant.URL.userAboutUs}`).then(response => {
            const filterIt = response.data.rest[0].Modules
            const FinalItem = filterIt[Id]
            var dataFinal = filterIt.filter((item: any, index: number) => item !== FinalItem)
            const insertNew = {
                data: obj.data
            }
            dataFinal.splice(Id, 0, insertNew)
            dataFinal.map((item: any) => {
                parsedData = parsedData + item.data
            })
            console.log(dataFinal, parsedData)
            setData(parsedData)
        }).catch(err => console.log(err))
    }, [])
const handleTab=()=>{
    setTabSelected(!tabSelected)
    setCheckSize(false)
}
    const reactElement = parse(`${data}`);
    return (
        <div style={{marginBottom : 25}}>
            <div className="previewTab">
                Preview
                <button style={!checkSize && !tabSelected ? { border: 'none', backgroundColor: '#848484', marginLeft: '7%', color: 'white' } : { opacity: '0.5', border: 'none', backgroundColor: '#848484', marginLeft: '7%', color: 'white' }} onClick={() => {setCheckSize(false);  setTabSelected(false)}}><LaptopIcon /></button>
                <button style={tabSelected && !checkSize  ?  { border: 'none', backgroundColor: '#848484', marginLeft: '1%', color: 'white' } : { opacity: '0.5', border: 'none', backgroundColor: '#848484', marginLeft: '1%', color: 'white' }} onClick={handleTab}><TabletMacIcon/></button>
                <button style={!checkSize && !tabSelected ? { opacity: '0.5', border: 'none', backgroundColor: '#848484', marginLeft: '1%', color: 'white' } : { border: 'none', backgroundColor: '#848484', marginLeft: '1%', color: 'white' }} onClick={() => {setCheckSize(true);;  setTabSelected(false)}}><SmartphoneIcon /></button>
            </div>
            <div className= 'flexDiv'>
            <div className={` previewLaptop ${checkSize ? "previewMobile" : ""} ${tabSelected ? "previewTablet":""}`}>
                <Toaster />
                <Header />
                {reactElement}
            </div>
            </div>
        </div>
    )
}
export default Preview;