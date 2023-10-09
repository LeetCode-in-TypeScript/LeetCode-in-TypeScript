// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming
// #Algorithm_I_Day_12_Dynamic_Programming #Dynamic_Programming_I_Day_3
// #Level_2_Day_12_Dynamic_Programming #Udemy_Dynamic_Programming #Big_O_Time_O(n)_Space_O(n)
// #2023_10_09_Time_51_ms_(77.29%)_Space_42.7_MB_(62.58%)

function rob(nums: number[]): number {
    const n = nums.length
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return nums[0]
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1])
    }
    const profit: number[] = new Array(n)
    profit[0] = nums[0]
    profit[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < n; i++) {
        profit[i] = Math.max(profit[i - 1], nums[i] + profit[i - 2])
    }
    return profit[n - 1]
}

export { rob }
