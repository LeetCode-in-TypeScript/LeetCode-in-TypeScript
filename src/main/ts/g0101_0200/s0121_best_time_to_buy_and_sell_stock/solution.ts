// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming
// #Data_Structure_I_Day_3_Array #Dynamic_Programming_I_Day_7 #Level_1_Day_5_Greedy #Udemy_Arrays
// #Big_O_Time_O(N)_Space_O(1) #2023_10_05_Time_56_ms_(99.56%)_Space_52.3_MB_(13.22%)

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
