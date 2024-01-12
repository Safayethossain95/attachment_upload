const Post = require('../models/postModel')
const createPost = async(req,res)=>{
    const filenames = req.files.map(file => file.filename);
    try{
        const post = new Post ({
            images: filenames,
            
        })
        const postData = await post.save()

        res.status(200).send({success:true,msg:'Posted files',data:filenames.length})
    }catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
}

const getPosts= async(req,res)=>{
    try{
        const posts = await Post.find({})
        const numberOfFiles = posts.reduce((total, post) => total + post.images.length, 0);
        const customIds = posts.map(post => post.customId);
        res.status(200).send({
            success: true,
            msg: 'Number of Files in Posted Data',
            data: numberOfFiles,
            customid: customIds
        });
        

    }catch(error){
        res.status(400).send({success:false,msg:error.message})
    }
}


module.exports={
    createPost,
    getPosts
}