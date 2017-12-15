const mongoose = require('mongoose')
const Schema = mongoose.Schema

const voteSchema = new Schema({
  nickname: String,
  id: String
})

const Vote = mongoose.model('Vote', voteSchema)

module.exports = Vote
