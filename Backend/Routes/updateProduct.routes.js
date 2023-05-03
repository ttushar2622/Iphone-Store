const express = require("express");
const updateProductsRouter = express.Router();
var jwt = require("jsonwebtoken");

updateProductsRouter.patch("/update/:postID", async(req,res)=>{
    const { postID } = req.params;
    const data = req.body;
    // console.log(postID,payload)
    try {
      await PostModel.findByIdAndUpdate({ _id: postID }, data);
      res.status(200).send({ msg: "post details has been updated" });
    } catch (error) {
      res.status(400).send({ msg: err.message });
    }
})

module.exports = { updateProductsRouter };
