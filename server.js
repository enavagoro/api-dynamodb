const express = require('express');
const app = express();
const cors = require('cors')

var AWS = require("aws-sdk");


app.use(express.json())
app.use(cors());

const port = process.env.PORT || 3000;

//routes
const characterRouteConfig = require('./character/character.route');

//use routes
characterRouteConfig.routesConfig(app)

app.listen(port, ()=>{
    console.log(`server listen in port ${port}`);
})