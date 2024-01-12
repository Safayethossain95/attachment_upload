const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

  images: [
    {
      type: String,
      required: false,
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
