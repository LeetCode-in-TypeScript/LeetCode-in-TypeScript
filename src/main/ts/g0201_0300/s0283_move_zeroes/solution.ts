// #Easy #Top_100_Liked_Questions #Array #Two_Pointers #Algorithm_I_Day_3_Two_Pointers
// #Programming_Skills_I_Day_6_Array #Udemy_Arrays #Big_O_Time_O(n)_Space_O(1)
// #2023_10_06_Time_71_ms_(91.63%)_Space_47.2_MB_(57.52%)

/*
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let firstZero = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const temp = nums[i]
            nums[i] = nums[firstZero]
            nums[firstZero] = temp
            firstZero++
        }
    }
}

export { moveZeroes }
