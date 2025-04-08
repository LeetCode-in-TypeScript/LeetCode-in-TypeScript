// #Medium #Top_Interview_Questions #Array #Binary_Search #Algorithm_II_Day_2_Binary_Search
// #Binary_Search_II_Day_12 #Top_Interview_150_Binary_Search
// #2025_04_08_Time_0_ms_(100.00%)_Space_55.40_MB_(60.85%)

function findPeakElement(nums: number[]): number {
    let start = 0
    let end = nums.length - 1
    while (start < end) {
        const mid = start + Math.floor((end - start) / 2)
        if (nums[mid + 1] > nums[mid]) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return start
}

export { findPeakElement }
