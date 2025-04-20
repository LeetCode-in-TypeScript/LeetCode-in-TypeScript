// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Greedy
// #Algorithm_II_Day_13_Dynamic_Programming #Dynamic_Programming_I_Day_4
// #Top_Interview_150_Array/String #Big_O_Time_O(n)_Space_O(1)
// #2025_03_23_Time_1_ms_(84.27%)_Space_58.46_MB_(28.93%)

function jump(nums: number[]): number {
    let minJump = 0,
        farthest = 0,
        currentEnd = 0
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i])
        // If we've reached the end of the current jump range
        if (i === currentEnd) {
            minJump++
            currentEnd = farthest
            if (currentEnd >= nums.length - 1) {
                break
            }
        }
    }
    return minJump
}

export { jump }
