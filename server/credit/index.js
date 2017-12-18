exports.credit = function credit(router) {
    const Credit = require('../models/Credit')
    const User = require('../models/User')

    router.get("/credits", async (ctx) => {
        const credits = await Credit.find({})
    
        ctx.response.body = credits
    })

    router.get("/credit/:nickname", async (ctx) => {
        const nickname = ctx.request.query.nickname
        const user = await User.find({nickname: nickname})
        console.log(user[0].id)
        const credits = await Credit.find({creditor: user[0].id})
        console.log(credits)
        ctx.response.body = credits
    })

    router.get("/credit/active/:nickname", async (ctx) => {
        const nickname = ctx.request.query.nickname
        const credits = await Credit.find({user: nickname, active: true})
        ctx.response.body = credits
    })
    
    router.post("/credit", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
        
        let credit = new Credit({
            user: body.user,
            creditor: body.creditor,
            quantity: body.quantity,
            active: false 
        })

        credit.save()

        ctx.response.body = body
    })

    router.put("/credit", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
        
        await Credit.update({'user': body.user, 'creditor': body.creditorID}, {$set: {'active': true}})

        body.requests = await Credit.find({'user': body.user, 'creditor': body.creditorID})

        console.log(body.requests)

        ctx.response.body = body
    })
}
