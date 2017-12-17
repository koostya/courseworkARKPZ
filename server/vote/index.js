exports.vote = function vote(router) {
    const User = require('../models/User'),
          Vote = require('../models/Vote')      

    router.post("/vote", async (ctx) => {
        let body = JSON.parse(ctx.request.body)
        
        const votes = await Vote.find({nickname: body.nickname, id: body.id})
        const users = await User.find({nickname: body.nickname})

        if (votes.length === 0 && users[0].id !== body.id) {
            await User.update({'id': body.id}, {$set: {rating: body.rating}})

            let vote = new Vote({
                nickname: body.nickname,
                id: body.id
            })

            vote.save()

            body.alreadyVoted = false
            ctx.response.body = body
        } else {
            body.alreadyVoted = true

            ctx.response.body = body
        }
    })
}