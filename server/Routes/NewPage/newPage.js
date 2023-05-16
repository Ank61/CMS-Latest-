const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cookieparser = require('cookie-parser');
app.use(cookieparser());
 const aboutUsModal = require("../../Modals/UserRoutes/missionModal");
const { body, validationResult, param, check } = require('express-validator');
const fs = require('fs');
const storageModal = require("../../Modals/UserRoutes/pageStorage")

app.post("/",async(request,response)=>{
    const {collectionName,path} = request.body;
    const schema = mongoose.Schema;
    const newSchema = new schema({
        Modules: [{
            moduleName: {
                type: String,
                unique :true,
            },
            data: {
                type: String
            },
            updatedData: {
                type: String
            },
            moduleId : {
                type: Number,
                required :true,
                unique :true,
            }
        }],
        title : {
            type:String
        },
        description :{
            type : String
        },
        formData : {
            type : [String]
        },
        pagePath : {
            type : String
        }
    })
    const newPage = mongoose.model(`${collectionName}`, newSchema);
    const user =  new newPage({
        Modules: [{moduleName : 'Module 1',
        data: '',
        updatedData:'',
        moduleId: 1}],
        title : '',
        description : '',
        formData : [''],
        pagePath : `${path}`
      });      
    await user.save().then(async (response)=>{
        const result = await storageModal.create({ data: collectionName });
        return response.status(200).send("Created new User")
    }
    ).catch(err=>console.log(err))
});
module.exports = app;