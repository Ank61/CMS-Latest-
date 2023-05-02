import { useEffect,useState } from "react";
import axios from "../SecureInstance/axiosInstance";
import networkConstant from "../API/uri_constant";
function Header() {
    const [data ,setData] = useState("")
    useEffect(() => {
axios.get(`${networkConstant.URL.header}`).then(response=>{
    setData(response.data[0].data)
}).catch();
    }, [])
    return (
        <>
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </>
    )
}
export default Header;