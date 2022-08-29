const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")



mongoose
    .connect("mongodb+srv://mhlengi:Somahhashi1993@cluster0.ptwzupp.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    }
);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});