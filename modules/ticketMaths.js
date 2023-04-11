const moment = require('moment')
require('countdown')


function getTotal(ticks) {
    let total = 0;
    for (let i in ticks) {
        total += ticks[i].trip[0].price
    }
    return total;
}

function getTime(ticks) {
    let now = moment()
    let date = new Date('2023-04-12T09:22:40.228+00:00')
    let dur = moment.duration(date - now).humanize()
    console.log(dur)  
}


module.exports = { getTotal, getTime }