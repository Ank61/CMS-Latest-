const express = require("express")
const bodyparser = require('body-parser')
const cors = require("cors")
const path = require('path')
const mongoose = require('mongoose')
require("dotenv").config();
const fs = require('fs');

const app = express()
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({origin: 'http://localhost:3000' , methods: ['GET', 'PUT', 'POST'],
allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
exposedHeaders: ['Content-Range', 'X-Content-Range'],
credentials: true}))
const MONGO_KEY = process.env.MONGO_URL

mongoose.connect(MONGO_KEY, {
    dbName: 'CMS'
}).then((res) => {
    console.log('Database connected successfully',)
}).catch((error) => {
    console.log("Error occured while connecting",error)
})

let login = require("./Routes/AdminRoutes/login")
let mission = require("./Routes/UserRoutes/aboutUs")
let header = require("./Routes/UserRoutes/header")

app.use("/login" , login)
app.use("/aboutUs" , mission)
app.use("/header" , header)
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
const port = process.env.PORT || process.env.BACKEND_PORT;
app.listen(port,()=> {
    console.log("Server running on the port",port)
})