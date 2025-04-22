let user =require("../Collection/User")
let main_func={
    home:async function(req,res,next){
        res.send("Welcome to home page");
        res.end();
    },
    registur_user:async function(req,res){
        try {
            let user_data=new user(req.body);
            let create= await user_data.save();
            res.status(200).json({msg:"User Created Successfully",data:create});
        } catch (error) {
            res.status(501).json({msg: error.message});
        } 
    }

}

module.exports=main_func;