// #Medium #Array #Two_Pointers #Udemy_Arrays #Top_Interview_150_Array/String
// #2025_04_05_Time_40_ms_(99.63%)_Space_59.84_MB_(30.62%)

function removeDuplicates(nums: number[]): number {
    let i = 0
    let k = 0
    let count = 0
    while (i < nums.length - 1) {
        count++
        if (count <= 2) {
            nums[k++] = nums[i]
        }
        if (nums[i] !== nums[i + 1]) {
            count = 0
        }
        i++
    }
    count++
    if (count <= 2) {
        nums[k++] = nums[i]
    }
    return k
}

export { removeDuplicates }
