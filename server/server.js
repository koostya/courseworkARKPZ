// plugins
const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-body-parser')
const serve = require('koa-static')
const send = require('koa-send')
const cors = require('@koa/cors')

// connection to db
const connection = require('./connection/connection')

// server configures
const PORT = 3001

// models
const User = require('./models/User')
const Vote = require('./models/Vote')

// app consts
const app = new Koa()
const router = new Router()

// usages
app.use(BodyParser())
app.use(cors())

require('./user/index').user(router)
require('./vote/index').vote(router)

app.use(router.routes())
app.use(router.allowedMethods())


app.listen(PORT, function() {
    console.log('Server started')
})
