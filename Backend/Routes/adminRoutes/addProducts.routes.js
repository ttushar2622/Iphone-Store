const express = require("express");
const { postModel } = require("../../Models/post.model");
const addproductRouter = express.Router();
var jwt = require("jsonwebtoken");



addproductRouter.post("/add", async (req, res) => {
    try {
      const payload = req.body;
      // console.log(payload);
      const new_post = new postModel(payload);
      await new_post.save();
      res.status(200).send({ msg: "A new product has been added" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });

  module.exports={addproductRouter}