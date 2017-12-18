let response = 'success',
count = 0

const nickname = 'kostyan',
  creditorID = '123'

const fetch = require('isomorphic-fetch')

const counter = setInterval(function () {
    fetch(`http://localhost:3001/iot?nickname=${nickname}&creditorID=${creditorID}`, {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        },
        body: undefined
    }).then((res) => {
        return res.json()
    }).then((json) => {
        if (json.credit.active === true) {
            console.log(`User ${json.credit.user} confirmed your request`)
        }
    })
}, 1000)
