// #Easy #Array #Two_Pointers #Top_Interview_150_Array/String
// #2025_03_31_Time_0_ms_(100.00%)_Space_56.09_MB_(20.94%)

function removeElement(nums: number[], val: number): number {
    let k = 0

    for (const num of nums) {
        if (num !== val) {
            nums[k++] = num
        }
    }

    return k
}

export { removeElement }
