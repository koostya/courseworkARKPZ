let response = 'success',
    count = 0

const counter = setInterval(function () {
    if (count == 10) {
        response = 'fail'
        count++
    } else {
        console.log(response)
        count++
    }
}, 1000)
