const express = require("ex");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");


mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    }
);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});