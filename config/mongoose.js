const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/job");

const db=mongoose.connection;

db.on("error",console.error.bind(console,"error"));

db.once("open",function(){
    console.log("Successfully connected to database");
});

module.exports=db;