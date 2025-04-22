let express= require('express');
let r= require("./Router/route");
let db =require("./Connect");
let user =require("./Collection/User");
let cors= require("cors")
require("dotenv").config()

let port=process.env.PORT || 3000
let app = express();
// json
app.use(express.json());
// json

// CORS
app.use(cors());
// CORS
app.use("/web/",r);
// datagoincolllection
let send_data=async function(){
    try {
        user.create({
            name:"Owais Alam",
            email:"owais@gmail.com",
            password:"123456",
            age:22
            
        })
        console.log("data added")
    } catch (error) {
        console.log(error)
    }
}
// datagoincolllection

db().then(()=>{
    // send_data();
    app.listen(port,()=>{
        console.log(`server is running on port http://localhost:${port}/web`);
    })
}).catch((e)=>{
    console.log(e);
})