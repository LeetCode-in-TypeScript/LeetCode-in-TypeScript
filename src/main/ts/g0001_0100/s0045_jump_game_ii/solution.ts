// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Greedy
// #Algorithm_II_Day_13_Dynamic_Programming #Dynamic_Programming_I_Day_4
// #Big_O_Time_O(n)_Space_O(1) #2023_09_30_Time_50_ms_(95.93%)_Space_44.9_MB_(65.88%)

function jump(nums: number[]): number { //NOSONAR
    let minJmp = new Array(nums.length)
    if (nums.length === 1) return 0
    let prevIndex = 0
    minJmp[prevIndex] = 0
    while (prevIndex < nums.length - 1) {
        let nextMaxJmpTo = nums[prevIndex] + prevIndex
        let prevIndexJmp = minJmp[prevIndex]

        let farthestJumpVal = -1
        let farthestJumpIndex = -1
        for (let i = nextMaxJmpTo; ; i--) {
            if (i >= nums.length) {
                continue
            }
            if (i === nums.length - 1) {
                return prevIndexJmp + 1
            }
            if (minJmp[i] != undefined) {
                break
            }
            minJmp[i] = prevIndexJmp + 1
            let curmaxTo = nums[i] + i
            if (farthestJumpVal < curmaxTo) {
                farthestJumpVal = curmaxTo
                farthestJumpIndex = i
            }
        }
        if (farthestJumpIndex === -1) {
            return -1
        }
        prevIndex = farthestJumpIndex
    }
    return minJmp[nums.length - 1]
}

export { jump }
