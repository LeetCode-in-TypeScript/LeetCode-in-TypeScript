// #Easy #Top_100_Liked_Questions #Array #Two_Pointers #Algorithm_I_Day_3_Two_Pointers
// #Programming_Skills_I_Day_6_Array #Udemy_Arrays #Big_O_Time_O(n)_Space_O(1)
// #2025_03_28_Time_1_ms_(82.86%)_Space_62.16_MB_(10.71%)

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
