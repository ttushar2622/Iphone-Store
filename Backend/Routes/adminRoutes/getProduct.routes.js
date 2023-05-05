const express = require("express");
const getProductsRouter = express.Router();
var jwt = require("jsonwebtoken");
const { postModel } = require("../../Models/post.model");

getProductsRouter.get("/", async (req, res) => {
  const token = req.headers.authentication;
  // console.log(token);
  const min = +req.query.min;
  const max = +req.query.max;

  const decoded = jwt.verify(token, "masai");

  if (min && max) {
    try {
      let post=await postModel.find({$and:[{price:{$gt:min}},{price:{$lt:max}}]});
      res.status(200).send(post);
    } catch (err) {
      res.status(400).send({msg: err.message});
      
    }
  } 
  else {
    try {
      if (decoded) {
        const posts = await postModel.find({ userID: decoded.userID });
        res.status(200).send(posts);
      }
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  }
});

module.exports = { getProductsRouter };
