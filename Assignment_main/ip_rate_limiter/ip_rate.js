const max_rate = require('express-rate-limit')

const time = 12;
const max_request = 7;

// limiter function

const limiter = max_rate({
    win_ms : time * 60 * 1000,
    max : max_request,
})
module.exports = {limiter}