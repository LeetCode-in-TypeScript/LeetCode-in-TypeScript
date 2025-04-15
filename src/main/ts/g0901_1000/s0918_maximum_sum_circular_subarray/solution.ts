// #Medium #Array #Dynamic_Programming #Divide_and_Conquer #Queue #Monotonic_Queue
// #Medium #Array #Dynamic_Programming #Divide_and_Conquer #Queue #Monotonic_Queue
// #Dynamic_Programming_I_Day_5 #Top_Interview_150_Kadane's_Algorithm
// #2025_04_15_Time_2_ms_(91.04%)_Space_61.54_MB_(85.07%)

function maxSubarraySumCircular(nums: number[]): number {
    let total = 0
    let maxSum = nums[0],
        curMax = 0
    let minSum = nums[0],
        curMin = 0
    for (let num of nums) {
        curMax = Math.max(num, curMax + num)
        maxSum = Math.max(maxSum, curMax)
        curMin = Math.min(num, curMin + num)
        minSum = Math.min(minSum, curMin)
        total += num
    }
    if (maxSum < 0) {
        return maxSum
    }
    return Math.max(maxSum, total - minSum)
}

export { maxSubarraySumCircular }
