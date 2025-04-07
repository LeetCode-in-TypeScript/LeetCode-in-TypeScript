// #Medium #Top_Interview_Questions #Array #Dynamic_Programming #Greedy #Dynamic_Programming_I_Day_7
// #Udemy_Arrays #Top_Interview_150_Array/String
// #2025_04_07_Time_0_ms_(100.00%)_Space_54.88_MB_(71.79%)

function maxProfit(prices: number[]): number {
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max += prices[i] - prices[i - 1]
        }
    }
    return max
}

export { maxProfit }
