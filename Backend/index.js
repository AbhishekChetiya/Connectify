import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./Constant.js";
import dotenv from "dotenv"
import { app } from "./App.js";


dotenv.config({
    path:'./env'
});
const connection = async  ()=>{
    try{
         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
         app.on("error",(error)=>{
            console.log("ERROR: ", error)
            throw error;
         })
         app.listen( (process.env.PORT || 3000) , () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    }
    catch(error){
        console.log("App Listen At Port", `${process.env.PORT}`)
            console.log("ERROR: ", error);
            throw error
    }
};
connection();

export {app}