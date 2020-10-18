const express=require("express");
const router=express.Router();

const postApi=require("../../../controllers/api/v1/postControllerApi");

const passport=require('passport');
router.get('/',postApi.index);  

router.post('/createjob',passport.authenticate('jwt',{session:false}),postApi.create);


router.delete('/:id',passport.authenticate('jwt',{session:false}),postApi.destroy);
module.exports=router;