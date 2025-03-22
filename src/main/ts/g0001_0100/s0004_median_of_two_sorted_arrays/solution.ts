// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Array #Binary_Search #Divide_and_Conquer
// #Top_Interview_150_Binary_Search #Big_O_Time_O(log(min(N,M)))_Space_O(1)
// #AI_can_be_used_to_solve_the_task #2025_03_22_Time_3_ms_(82.74%)_Space_59.34_MB_(44.01%)

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = nums1.concat(nums2)
    nums.sort((a, b) => a - b)
    const len = nums.length
    if (len % 2 === 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2
    } else {
        return nums[Math.floor(len / 2)]
    }
}

export { findMedianSortedArrays }
