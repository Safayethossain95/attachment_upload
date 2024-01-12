const express = require('express')
const post_route = express()

const bodyParser = require('body-parser')

post_route.use(bodyParser.json())
post_route.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer')

const path = require('path')

post_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname,'../public/postImages'),function(error,success){
            if(error){
                console.log(error)
            }
        })
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,success){
            if(error){
                console.log(error)
            }
        })
    }
})

const upload = multer({storage:storage}).array('images');

const postController = require('../controller/postController')

post_route.post('/upload',upload,postController.createPost)

post_route.get('/get-uploads',postController.getPosts)

post_route.get('/check',(req,res)=>{
    res.send("this is awesome")
})

module.exports = post_route