// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming
// #Dynamic_Programming_I_Day_6 #Level_2_Day_13_Dynamic_Programming #Udemy_Dynamic_Programming
// #Big_O_Time_O(N)_Space_O(1) #2023_10_08_Time_53_ms_(87.50%)_Space_44.6_MB_(63.86%)

function maxProduct(nums: number[]): number {
    let cMin = 1
    let cMax = 1
    let max = nums[0]
    for (const num of nums) {
        let tempMin = cMin
        cMin = Math.min(cMax * num, cMin * num, num)
        cMax = Math.max(cMax * num, tempMin * num, num)
        max = Math.max(max, cMax)
    }
    return max
}

export { maxProduct }
