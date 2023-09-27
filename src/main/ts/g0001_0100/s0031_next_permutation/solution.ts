// #Medium #Top_100_Liked_Questions #Array #Two_Pointers #Big_O_Time_O(n)_Space_O(1)
// #2023_09_26_Time_47_ms_(99.30%)_Space_45_MB_(20.98%)

/*
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let swapperIndex: number | null = null

    for (let ind = nums.length - 1; ind >= 0 && swapperIndex == null; ind--) {
        if (nums[ind] > nums[ind - 1]) {
            swapperIndex = ind - 1
        }
    }

    if (swapperIndex == null) nums.sort((a, b) => a - b)
    else {
        nums.splice(swapperIndex + 1, nums.length, ...nums.slice(swapperIndex + 1, nums.length).sort((a, b) => a - b))
        let indToBringForward = swapperIndex + 1
        while (nums[indToBringForward] <= nums[swapperIndex]) ++indToBringForward
        let swappedNumber = nums[swapperIndex]
        nums[swapperIndex] = nums[indToBringForward]
        nums[indToBringForward] = swappedNumber
    }
}

export { nextPermutation }
