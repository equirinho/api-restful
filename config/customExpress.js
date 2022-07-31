const express = require ('express')
const consign = require ('consign');
const cors = require ( 'cors');
const passport = require ('passport');

module.exports=()=>{
    const app = express()
    app.use(express.json())
    app.use(cors())
    consign()
        .include('routers')
        .include ('libs')
        .into(app)
    return app
};