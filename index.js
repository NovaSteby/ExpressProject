//1. import express
var express = require('express');
require('./connection');
const user = require('./model/user');
// 2.initialization
var app = express()


// middleware
app.use(express.json()) //to accept json format



// 3.api
app.get('/',(req,res)=>{
    res.send("Hello Nova Polwin")
})
app.get('/login',(req,res)=>{
    res.send("Loged in sucessfully!!")
})
// to add data to db
app.post('/add',async(req,res)=>{
    try {
        console.log(req.body);
        await user(req.body).save() //save the data to model 
        res.send({message:"data added successfully!!"})
    } catch (error) {
        console.log(error)
    }
})
//to view data in the db
app.get('/view',async(req,res)=>{
    try {
        const data = await user.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
//to delete the data from database
app.delete('/remove/:id' ,async(req,res)=>{
    try {
        var data = await user.findByIdAndDelete(req.params.id)
        res.send({message:"deleted"})
    } catch (error) {
        console.log(error)
    }
})
//to updatethe data from database
app.put('/edit/:id',async(req,res)=>{
    try {
        var data = await user.findByIdAndUpdate(req.params.id,req.body);
        res.send({message:"updated",data})

    } catch (error) {
        console.log(error)
    }
})

// 4.port allocation
app.listen(3000,()=>{
    console.log("port is up and running")
})