// #Hard #Array #Dynamic_Programming #Top_Interview_150_Multidimensional_DP
// #2025_04_07_Time_5_ms_(85.07%)_Space_68.32_MB_(50.75%)

function maxProfit(prices: number[]): number {
    let firstBuy = Infinity
    let secondBuy = Infinity
    let firstSell = 0
    let secondSell = 0
    for (const price of prices) {
        firstBuy = Math.min(firstBuy, price)
        firstSell = Math.max(firstSell, price - firstBuy)
        secondBuy = Math.min(secondBuy, price - firstSell)
        secondSell = Math.max(secondSell, price - secondBuy)
    }
    return secondSell
}

export { maxProfit }
