const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");




app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});