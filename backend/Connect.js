let mongo = require("mongoose")

require("dotenv").config()

let db_url = process.env.URL;

let databasekakame=async function(){
    mongo.connect(db_url).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((e)=>{
        console.log(e)
    })
}
module.exports=databasekakame;