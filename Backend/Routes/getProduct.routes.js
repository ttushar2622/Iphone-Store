const express = require("express");
const getProductsRouter = express.Router();
var jwt = require("jsonwebtoken");


getProductsRouter.get("/",async(req,res)=>{
    const token = req.headers.authorization;
    // console.log(token);
    const decoded = jwt.verify(token, "shhhhh");
  
    try {
      if (decoded) {
        const posts = await PostModel.find({ userID: decoded.userID });
        res.status(200).send(posts);
      }
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
})

module.exports={getProductsRouter}