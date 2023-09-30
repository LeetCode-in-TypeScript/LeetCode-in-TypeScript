// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Udemy_Arrays
// #Big_O_Time_O(n)_Space_O(n) #2023_09_29_Time_55_ms_(98.51%)_Space_49.8_MB_(60.20%)

function firstMissingPositive(nums: number[]): number {
    let i = 0
    while (i < nums.length) {
        let correctIndex = nums[i] - 1
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIndex]) {
            ;[nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]
        } else {
            i++
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
}

export { firstMissingPositive }
