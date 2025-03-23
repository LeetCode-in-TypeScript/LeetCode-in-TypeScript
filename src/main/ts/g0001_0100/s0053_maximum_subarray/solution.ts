// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming
// #Divide_and_Conquer #Data_Structure_I_Day_1_Array #Dynamic_Programming_I_Day_5
// #Udemy_Famous_Algorithm #Top_Interview_150_Kadane's_Algorithm #Big_O_Time_O(n)_Space_O(1)
// #2025_03_23_Time_0_ms_(100.00%)_Space_65.50_MB_(44.96%)

function maxSubArray(nums: number[]): number {
    let curSum: number = nums[0]
    let maxSum: number = nums[0]
    for (let i = 1; i < nums.length; i++) {
        curSum = Math.max(nums[i], nums[i] + curSum)
        maxSum = Math.max(curSum, maxSum)
    }
    return maxSum
}

export { maxSubArray }
