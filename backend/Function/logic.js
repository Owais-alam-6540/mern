let user =require("../Collection/User")
let brcypt = require("bcrypt")
let main_func={
    home:async function(req,res){
        res.send("Welcome to home page");
        res.end();
    },
    registur_user:async function(req,res){
        try {
            let {name,email,password,age}=req.body;
            let check_email= await user.findout({email:email});
            if (check_email) {
                return res.status(409).json({msg:"Email Already exist"})
            } else {
                let bry_pswd=brcypt.hashSync(password,15)
                let user_data=new user({name,email,password:bry_pswd,age})
                let create=await user_data.save();
            res.status(200).json({msg:"User Created Successfully",data:create});
            }
        } catch (error) {
            res.status(501).json({msg: error.message});
        } 
    }

}

module.exports=main_func;