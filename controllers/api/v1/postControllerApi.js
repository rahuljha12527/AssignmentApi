const Post=require('../../../models/post');

module.exports.create=async function(req,res){
    try{
      let post=await Post.create({
          content:req.body.content,
          user:req.user._id
      });

      if(req.xhr){
          return res.status(200).json({
              data:{
                  post:post
              },
              message:"Job Post created"
          })
      }

      return res.direct("back");
    }catch(err){

    }
}

module.exports.index=async function(req,res){

    let posts=await Post.find({})
       .sort('createdAt')
       .populate('user')
       
       return res.json(200,{
           message:"List of Job",
           posts:posts
       })
}


module.exports.destroy=async function(req,res){
    try{
      let post=await Post.findById(req.params.id);

      if(post.user==req.user.id){
          post.remove();

          return res.json(200,{
              message:"job deleted Successfully"
          });
      }else{
          return res.json(401,{
              message:"You cannot delete this message"
          });
      }  

    }catch(err){
        console.log("***********",err);
        return res.json(500,{
            message:"Internal Server error"
        })
    }
}