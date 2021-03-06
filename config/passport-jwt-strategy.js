const passport=require('passport');

const JWTStrategy=require('passport-jwt').Strategy;

const ExtractJWT=require('passport-jwt').ExtractJwt;

const User=require('../models/user');

let opts={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:"userApi",
};

passport.use(
    new JWTStrategy(opts,function(jwtPayLoad,done){
        console.log(opts,jwtPayLoad);

        User.findById(jwtPayLoad._id,function(req,res){
            if(err){
                console.log("Error in finding the user from JWT");
                return;
            }
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    })
);

module.exports=passport;