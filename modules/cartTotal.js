function getTotal(ticks) {
    let total = 0;
    for (let i in ticks) {
        total += ticks[i].trip[0].price
    }
    return total;
}

module.exports = { getTotal }