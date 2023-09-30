// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming #Greedy
// #Algorithm_II_Day_12_Dynamic_Programming #Dynamic_Programming_I_Day_4 #Udemy_Arrays
// #Big_O_Time_O(n)_Space_O(1) #2023_09_30_Time_58_ms_(91.95%)_Space_47.4_MB_(70.79%)

function canJump(nums: number[]): boolean {
    let availableSteps = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (availableSteps === 0) {
            return false
        }
        availableSteps = Math.max(availableSteps - 1, nums[i])
        if (nums.length - 1 <= i + availableSteps) {
            return true
        }
    }
    return true
}

export { canJump }
