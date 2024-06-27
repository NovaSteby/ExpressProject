const mongoose = require('mongoose') //requiring mongoose
const schema =  mongoose.Schema({ //give schema for data
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number
})

const userModel = mongoose.model("user",schema); //create model
module.exports=userModel; //exporting schema