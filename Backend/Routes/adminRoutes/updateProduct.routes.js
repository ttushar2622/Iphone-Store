const express = require("express");
const updateProductsRouter = express.Router();
var jwt = require("jsonwebtoken");
const { postModel } = require("../../Models/post.model");

updateProductsRouter.patch("/update/:postID", async(req,res)=>{
    const { postID } = req.params;
    const data = req.body;
    // console.log(postID,payload)
    try {
      await postModel.findByIdAndUpdate({ _id: postID }, data);
      res.status(200).send({ msg: "post details has been updated" });
    } catch (error) {
      res.status(400).send({ msg: err.message });
    }
})

module.exports = { updateProductsRouter };
