const mongoose = require("mongoose")
const express = require('express')
const http = require('http');
const app = express()


const cors = require('cors')

app.use(cors({
    origin:'*'
}));



mongoose.connect('mongodb+srv://mern:mern@cluster0.ujhuxyr.mongodb.net/filesupload')
.then(async ()=>{
    console.log('Database Connected')
})
.catch((e)=>{
    console.log(e)
})


const post_route = require('./routes/postRoute')
app.use('/api',post_route)

app.listen(8000, function(){
    console.log("Server is running");
    
})