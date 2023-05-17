const localhost = "http://localhost:8080"
const netlify = "https://mernbackend-e89k.onrender.com"
const networkConstant = {
    URL :{
        login : `${netlify}/login`,
        aboutUS : `${netlify}/aboutUs`,
        createAboutUs : `${netlify}/aboutUs/createModule`,
        updateAboutUs : `${netlify}/aboutUs/update`,
        deleteAboutUs : `${netlify}/aboutUs/delete`,
        submitButton : `${netlify}/aboutUs/submitData`,
        header : `${netlify}/header`,
        updateHeader : `${netlify}/header/update`,
        metaData :  `${netlify}/aboutUs/meta`,
        //User_Components_API
        userAboutUs : `${netlify}/aboutUs/allData`,
        dashboard  : `${netlify}/dashboard`,
        caches : `${netlify}/cache`,
        //Dynamic Bakcend Routes
        createNewPage : `${netlify}/newPage`,
        empty : `${netlify}/empty`,
        editPage : `${netlify}/editPage`,
        editPageAllData : `${netlify}/editPage/allData`,
        editPageDelete : `${netlify}/newPage/delete`,
        editPageUpdate : `${netlify}/newPage/update`,
        editPageUpdateModule : `${netlify}/newPage/updateModule`,
        deleteModule : `${netlify}/deleteDynamic`,
        newModule : `${netlify}/newModule`,
        update : `${netlify}/update`,
        //Extra
        getLocal : `${netlify}`
    } 
}
export default networkConstant;