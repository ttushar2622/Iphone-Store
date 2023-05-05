const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    image: Array,
    video: String,
    price: Number,
    category: String
  },
  { versionKey: false }
);

const postModel = mongoose.model("post", postSchema);

module.exports = { postModel };
