// plugins
const Koa = require('koa')
const Router = require('koa-router')
const BodyParser = require('koa-body-parser')
const serve = require('koa-static')

// connection to db
const connection = require('./connection/connection')

// server configures
const PORT = 3000

// models
const User = require('./models/User')

// app consts
const app = new Koa()
const router = new Router()

// usages
app.use(BodyParser())

router.get("/users", async (ctx) => {
    const users = await User.find({})

    ctx.response.body = users
})

router.post("/users", async (ctx) => {
    const body = ctx.request.body,
        user = new User({
            id: body.id,
            name: body.name,
            password: body.password
        })

    user.save()

    ctx.response.body = ctx.request.body
})

router.put("/user/:id", async (ctx) => {
    const body = ctx.request.body

    await User.update({'id': body.id}, {$set: {'name': body.name, 'password': body.password}})

    ctx.response.body = ctx.request.body
})

router.delete("/user/:id", async (ctx) => {
    const body = ctx.request.body

    await User.remove({'id': body.id})

    ctx.response.body = ctx.request.body
})


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, function() {
    console.log('Server started')
})
