const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: String,
  nickname: String,
  name: String,
  surname: String,
  rating: Number,
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User
