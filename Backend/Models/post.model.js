const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    image: String,
    price: Number,
    category: String,
    description: String,
  },
  { versionKey: false }
);

const postModel = mongoose.model("post", postSchema);

module.exports = { postModel };
