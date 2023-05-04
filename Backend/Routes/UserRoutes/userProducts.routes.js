const jwt = require("jsonwebtoken");
const { postModel } = require("../../Models/post.model");

const getProducts = async (req, res) => {
  const token = req.headers.authentication;
  // console.log(token);
  const decoded = jwt.verify(token, "masai");
 const search=req.query.title;
  try {
    if (decoded) {
      const posts = await postModel.find({ userID: decoded.userID });
      res.status(200).send(posts);
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
};

const searchProduct=async(req,res)=>{
    const item=req.query.title;
    try{
        const post= await postModel.find({title: item});
        res.status(200).send(post);
    }catch(err){
        res.status(400).send({msg: err.message});
    }
}

module.exports = { getProducts, searchProduct };
