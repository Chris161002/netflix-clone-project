const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     max: 50, 
//   },
//   likedMovies: Array,
// });

// module.exports = mongoose.model("users", userSchema);


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  })

module.exports = mongoose.model('user_details', userSchema)
