// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Level_2_Day_13_Dynamic_Programming
// #Big_O_Time_O(n*sums)_Space_O(n*sums) #2025_03_28_Time_33_ms_(93.24%)_Space_59.12_MB_(71.50%)

function canPartition(nums: number[]): boolean {
    let sums: number = 0
    for (const num of nums) {
        sums += num
    }
    if (sums % 2 === 1) {
        return false
    }
    sums /= 2
    const dp: boolean[] = new Array(sums + 1).fill(false)
    dp[0] = true
    for (const num of nums) {
        for (let sum = sums; sum >= num; sum--) {
            dp[sum] = dp[sum] || dp[sum - num]
        }
    }
    return dp[sums]
}

export { canPartition }
