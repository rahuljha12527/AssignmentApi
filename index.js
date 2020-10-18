const express=require('express');
const app=express();

const port=8000;
const passport=require('passport');
const passportJwt=require('passport-jwt');

const bodyParser=require("body-parser");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use("/",require("./routes"));



app.listen(port,function(err){
    if(err){
        console.log(`Error ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});