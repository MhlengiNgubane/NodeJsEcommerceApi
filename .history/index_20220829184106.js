const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    }
);

// allow to take json files
app.use(express.json());

app.use("/api/us", 

);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});