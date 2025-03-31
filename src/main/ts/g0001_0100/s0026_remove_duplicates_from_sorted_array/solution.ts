// #Easy #Top_Interview_Questions #Array #Two_Pointers #Udemy_Two_Pointers
// #Top_Interview_150_Array/String #2025_03_31_Time_0_ms_(100.00%)_Space_58.42_MB_(57.44%)

function removeDuplicates(nums: number[]): number {
    let n = nums.length
    let i = 0
    let j = 1
    if (n <= 1) {
        return n
    }
    while (j <= n - 1) {
        if (nums[i] !== nums[j]) {
            nums[i + 1] = nums[j]
            i++
        }
        j++
    }
    return i + 1
}

export { removeDuplicates }
