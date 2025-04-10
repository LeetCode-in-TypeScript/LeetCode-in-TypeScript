// #Medium #Array #Binary_Search #Prefix_Sum #Sliding_Window #Algorithm_II_Day_5_Sliding_Window
// #Binary_Search_II_Day_1 #Top_Interview_150_Sliding_Window
// #2025_04_10_Time_2_ms_(88.11%)_Space_59.64_MB_(83.02%)

function minSubArrayLen(target: number, nums: number[]): number {
    let i = 0
    let j = 0
    let sum = 0
    let min = Number.MAX_SAFE_INTEGER
    while (j < nums.length) {
        sum += nums[j]
        if (sum >= target) {
            while (i <= j) {
                if (sum - nums[i] >= target) {
                    sum -= nums[i]
                    i++
                } else {
                    break
                }
            }
            min = Math.min(min, j - i + 1)
        }

        j++
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min
}

export { minSubArrayLen }
