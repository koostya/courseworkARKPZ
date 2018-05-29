exports.iot = function iot(router) {
    const User = require('../models/User')
    const Credit = require('../models/Credit')

    router.get("/iot", async (ctx) => {
        const nickname = ctx.request.query.nickname,
              creditorID = ctx.request.query.creditorID,
              body = {}

        const credit = await Credit.findOne({creditor: creditorID})
        body.credit = credit
        ctx.response.body = body
    })
}
