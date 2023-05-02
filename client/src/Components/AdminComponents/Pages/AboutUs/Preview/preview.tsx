import { useEffect, useState } from "react";
import axios from "../../../../Common/SecureInstance/axiosInstance";
import networkConstant from "../../../../Common/API/uri_constant";
import { useParams } from "react-router";
import '../../../../UserComponents/about.css';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router";
import Helmet from 'react-helmet';
import Header from "../../../../Common/Header/header";
import parse, { domToReact } from 'html-react-parser';

function Preview() {
    const [data, setData] = useState<string>()
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

    const reactElement = parse(`${data}`);
    return (
        <div>
            <div></div>
            <Toaster />
            <Header />
            {reactElement}
        </div>
    )
}
export default Preview;