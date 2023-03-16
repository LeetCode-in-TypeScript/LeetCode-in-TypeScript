// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Array #Binary_Search #Divide_and_Conquer
// #2023_03_16_Time_93_ms_(97.16%)_Space_49.5_MB_(18.04%)

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
