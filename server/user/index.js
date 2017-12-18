exports.user = function user(router) {
    const User = require('../models/User')

    router.get("/users", async (ctx) => {
        const users = await User.find({})
    
        ctx.response.body = users
    })
    
    router.post("/user", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
        
        let user = new User({
            id: body.id,
            nickname: body.nickname,
            name: body.name,
            surname: body.surname,
            rating: 0,
            description: body.description,
            money: 0,
            password: body.password
        })

        user.save()

        body.rating = 0
        body.userExist = false

        ctx.response.body = body
    })

    router.post("/user/login", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
        
        const users = await User.find({nickname: body.nickname})

        if(users.length == 0) {
            body.userWithSuchNickIsNotDefined = true
            ctx.response.body = body
        } else if(users.length == 1 && users[0].password == body.password) {
            body.userWithSuchNickIsNotDefined = false
            body.userWithSuchPasswordIsNotDefined = false
            ctx.response.body = body
        } else if(users.length == 1 && users[0].password !== body.password) {
            body.userWithSuchNickIsNotDefined = false
            body.userWithSuchPasswordIsNotDefined = true
            ctx.response.body = body
        }
    })

    router.post("/user/registration", async (ctx) => {
        let body = JSON.parse(ctx.request.body)

        const users = await User.find({nickname: body.nickname})

        if (users.length === 0) {
            body.userExist = false
            ctx.response.body = body
        } else {
            body.userExist = true
            ctx.response.body = body
        }
    })

    router.get("/user/:nickname", async (ctx) => {
        let nickname = ctx.request.query.nickname
    
        const user = await User.findOne({nickname: nickname})
    
        ctx.response.body = user
    })
    
    router.put("/user/:nickname", async (ctx) => {
        const body = JSON.parse(ctx.request.body)
    
        await User.update({'nickname': body.nickname}, {$set: {'money': body.money}})
    
        ctx.response.body = ctx.request.body
    })
    
    router.delete("/user/:id", async (ctx) => {
        const body = JSON.parse(ctx.request.body)
    
        await User.remove({'id': body.id})
    
        ctx.response.body = ctx.request.body
    })
}
