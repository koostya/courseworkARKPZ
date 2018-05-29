let response = 'success',
count = 0

const nickname = 'mms',
  creditorID = '1527580907161'

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
        if (json.credit) {
            if (json.credit.active === true) {
                console.log(`User ${json.credit.user} confirmed your request`)
            } else {
                console.log(`User ${json.credit.user} didn't confirm your request yet`)
            }
        } else {
            console.log(`You have no credit requests yet`)
        }
    })
}, 1000)
