const express = require("express");
const app = express();
const mongoose = require("mongoose");



mongoose
    .connect("")
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    }
);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});