// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming
// #Data_Structure_I_Day_3_Array #Dynamic_Programming_I_Day_7 #Level_1_Day_5_Greedy #Udemy_Arrays
// #Top_Interview_150_Array/String #Big_O_Time_O(N)_Space_O(1)
// #2025_03_26_Time_1_ms_(96.44%)_Space_65.83_MB_(26.02%)

function maxProfit(prices: number[]): number {
    let buyPrice = prices[0]
    let maxProfit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buyPrice) {
            buyPrice = prices[i]
        }
        if (prices[i] - buyPrice > maxProfit) {
            maxProfit = prices[i] - buyPrice
        }
    }
    return maxProfit
}

export { maxProfit }
