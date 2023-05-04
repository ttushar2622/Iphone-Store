const express = require("express");
const deleteProductsRouter = express.Router();
var jwt = require("jsonwebtoken");
const { postModel } = require("../../Models/post.model");

deleteProductsRouter.delete("/delete/:postID", async(req,res)=>{
    const { postID } = req.params;
    // console.log(postID);
    try {
      await postModel.findByIdAndDelete({ _id: postID });
      res.status(200).send({ msg: "post has been deleted" });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
})

module.exports = { deleteProductsRouter };
