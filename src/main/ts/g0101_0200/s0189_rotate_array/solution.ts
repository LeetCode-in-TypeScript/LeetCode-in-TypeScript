// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Math #Two_Pointers
// #Algorithm_I_Day_2_Two_Pointers #Udemy_Arrays #Top_Interview_150_Array/String
// #Big_O_Time_O(n)_Space_O(1) #2025_03_26_Time_1_ms_(86.17%)_Space_64.71_MB_(43.34%)

/*
 Do not return anything, modify nums in-place instead.
 */
function reverse(nums: number[], l: number, r: number): void {
    while (l <= r) {
        const temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
        l++
        r--
    }
}

function rotate(nums: number[], k: number): void {
    const n = nums.length
    const t = n - (k % n)
    reverse(nums, 0, t - 1)
    reverse(nums, t, n - 1)
    reverse(nums, 0, n - 1)
}

export { rotate }
