const express = require("express")
const router = express.Router();
const Post = require("../models/Post");
const path = require("path");
const fileUpload = require("express-fileupload");

router.use(fileUpload());

router.post("/posts", async(req, res) => {
    const { name, address, likes, description, date } = req.body;
    const { postimage } = req.files;
    postimage.mv("./uploads/"+postimage.name);
    const post = new Post({
        name: name,
        address: address,
        likes: likes,
        description: description,
        postimage: postimage.name,
        date: date
    })
    await post.save().then(()=>{
        res.status(200);
    }).catch((err)=>{
        console.log("Error in saving:",err);
        res.status(400);
    })
})

router.get("/posts", async(req, res) => {
    await Post.find().exec((err, data) => {
        if(err){
            res.status(400)
        }else{
            res.status(200).json(data);
        }
    })
})

router.get("/posts/:fileName", (req, resp) => {
    console.log(`./uploads/${req.params.fileName}`)
    resp.sendFile(path.join(__dirname, `./uploads/${req.params.fileName}`))
})

module.exports = router;