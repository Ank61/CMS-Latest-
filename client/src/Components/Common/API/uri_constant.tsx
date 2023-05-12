const localhost = "http://localhost:8080"
const netlify = "https://mernbackend-e89k.onrender.com"
const networkConstant = {
    URL :{
        login : `${localhost}/login`,

        aboutUS : `${localhost}/aboutUs`,
        createAboutUs : `${localhost}/aboutUs/createModule`,
        updateAboutUs : `${localhost}/aboutUs/update`,
        deleteAboutUs : `${localhost}/aboutUs/delete`,
        submitButton : `${localhost}/aboutUs/submitData`,
        header : `${localhost}/header`,
        updateHeader : `${localhost}/header/update`,

        metaData :  `${localhost}/aboutUs/meta`,

        //User_Components_API
        userAboutUs : `${localhost}/aboutUs/allData`,
        dashboard  : `${localhost}/dashboard`,
        caches : `${localhost}/cache`,
    } 
}
export default networkConstant;