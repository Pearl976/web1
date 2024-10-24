const mongoose = require("mongoose")
const pSchema=new mongoose.Schema({
    pid:Number,
    pname:String,
    pprice:Number,
    pdesc:String,
    pcat:String,
    pimg:String
})
module.exports=mongoose.model("product",pSchema)
