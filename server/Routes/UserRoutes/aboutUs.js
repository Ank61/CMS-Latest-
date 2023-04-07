const express = require("express")
const app = express()
const cookieparser = require('cookie-parser');
app.use(cookieparser());
const middleware = require("../../Middleware/middleware")
const aboutUsModal = require("../../Modals/UserRoutes/missionModal");
const { body, validationResult, param, check } = require('express-validator');
const fs = require('fs');

app.get("/", async (request, response) => {
    const data = await aboutUsModal.find({}).clone().catch(err => response.status(400).send("Erro"))
    return response.status(200).send(data)
})

app.post("/update",
    async (request, response) => {
        const fileNameForApply = '../client/src/Components/AdminComponents/Pages/AboutUs/aboutUsAdmin.css';
        const fileNameForUpdate = '../client/src/Components/UserComponents/about.css'
        try{
            console.log(request.body)
            if(request.body.From==="Apply"){//for Apply button module only
            if(request.body.Effect!=='none'){ //that means i tfor hover only
                let stringFirst = '.'+`${request.body.className}` + `${request.body.style}`;
                let stringSecond = '.'+`${request.body.className}` +":hover" + `${request.body.EffectStyle}`;
                let third =  `${stringFirst}` + '\n' + `${stringSecond}` ;
                
                fs.readFile(fileNameForApply, 'utf8', (err, data) => {
                    if (err) throw err;
                    const updatedData = data.startsWith(request.body.className);
                    //if true then only then reeplace otherwise create new
                    if(updatedData){
                        fs.writeFile(fileNameForApply, third, 'utf8', (err) => {
                            if (err) throw err;
                            console.log('Text has been replaced in the file.');
                          });
                    }
                    else{
                        //not found hence create new
                         //fs.writeFileSync(fileNameForApply, `${third}`);
                        // fs.writeFileSync(fileNameForUpdate, `${third}`);
                         fs.appendFile(fileNameForApply,`${third}`, (err) => {
                            if (err) throw err;
                            console.log('Text added to Adminfile.');
                          });
                          fs.appendFile(fileNameForUpdate,`${third}`, (err) => {
                            if (err) throw err;
                            console.log('Text added to userFile');
                          });
                    }
                })

                // fs.writeFileSync(fileNameForApply, `${third}`);
                // fs.writeFileSync(fileNameForUpdate, `${third}`);
                const data = request.body.data;
                const moduleName = request.body.moduleName;
                const moduleId = request.body.moduleId; //will thrw error not foun
                console.log(typeof data , typeof moduleName , typeof moduleId)
                const updatedResponse = await aboutUsModal.findOneAndUpdate(
                    { Modules: { $elemMatch: { moduleId: `${moduleId}` } } },
                    { $set: { 'Modules.$.moduleName': `${moduleName}`, 'Modules.$.data': `${data}` } },
                    { new: true },
                  ).exec();
                return response.status(200).send(updatedResponse)
            }
        }
            else{
                console.log("Reached updated")
                const data = request.body.data;
                const moduleName = request.body.moduleName;
                const moduleId = request.body.moduleId; //will thrw error not foun
                console.log(typeof data , typeof moduleName , typeof moduleId)
                const updatedResponse = await aboutUsModal.findOneAndUpdate(
                    { Modules: { $elemMatch: { moduleId: `${moduleId}` } } },
                    { $set: { 'Modules.$.moduleName': `${moduleName}`, 'Modules.$.data': `${data}` } },
                    { new: true },
                  ).exec();
                return response.status(200).send(updatedResponse)
            }
        }
        catch (err) {
            console.log(err)
            return response.status(200).send("Could not find")
        }
    })
app.post("/createModule",
    async (request, response) => {
        const errors = validationResult(request);
        try {
            if (!errors.isEmpty()) {
                return response.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }
            else {
                const data = request.body.data;
                const moduleName = request.body.moduleName;
                const forModuleId = await aboutUsModal.find({}).clone().catch(err => response.status(400).send("Erro"))
               console.log("tis" , forModuleId)
                if(forModuleId[0].Modules.length>0){
                    console.log("Inseide for module")
                    const totalLengthIndex = forModuleId[0].Modules.length;
                    const lastItemIndex = totalLengthIndex-1;
                    const getModuleId = forModuleId[0].Modules[lastItemIndex]
                    const updatedResponse = await aboutUsModal.findOneAndUpdate({},
                    { $push: { Modules: { moduleName: `${moduleName}`, data: `${data}`, moduleId: `${getModuleId.moduleId +1}` } } },
                    { new: true }
                ).exec()
                return response.status(200).send(updatedResponse)
                }
                else{
                    //create new
                    const updatedResponse = await aboutUsModal.findOneAndUpdate({},
                        { $push: { Modules: { moduleName: `${moduleName}`, data: "", moduleId: 1 } } },
                        { new: true }
                    ).exec()
                // const updatedResponse = new aboutUsModal({Modules : [{
                //     moduleId :1,
                //     data : "",
                //     moduleName : `${moduleName}`
                // }]})
                // await updatedResponse.save();
                return response.status(200).send(updatedResponse);
                }
            }
        }
        catch (err) {
            console.log(err)
            return response.status(400).send(err)
        }
    })

    app.get("/allData" , async(request,response)=>{ // No Middleware Required
        try{
           const availableData = await aboutUsModal.find({}).clone()
           const initial = "";
           const data = await availableData[0].Modules.map(item=>item.data).reduce((accumulator, currentValue) => accumulator + currentValue,initial)
           return response.status(200).send(data)
        }
        catch(err){
            console.log(err)
            return response.status(400).send(err)
        }
    })

    app.post("/delete" , async(request,response)=>{
        try{
        const Id = request.body.moduleId;
        const result = await aboutUsModal.findOneAndUpdate({},
                { $pull: { Modules: { moduleId: Id } } }, 
                { new: true }).exec();
        return response.status(200).send(result)
        }
        catch(err){
            return response.status(400).send(err) 
        }
    })
module.exports = app;