// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Level_2_Day_13_Dynamic_Programming
// #Big_O_Time_O(n*sums)_Space_O(n*sums) #2023_09_30_Time_91_ms_(74.38%)_Space_44.7_MB_(83.25%)

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
