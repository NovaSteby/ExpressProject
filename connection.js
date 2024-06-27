// 1.import mongoose
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://novasteby:novapolwin@cluster0.zmbukcr.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log(error);
})