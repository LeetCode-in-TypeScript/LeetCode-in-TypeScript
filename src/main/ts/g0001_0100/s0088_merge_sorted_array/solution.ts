// #Easy #Top_Interview_Questions #Array #Sorting #Two_Pointers #Data_Structure_I_Day_2_Array
// #Top_Interview_150_Array/String #2025_04_05_Time_0_ms_(100.00%)_Space_58.16_MB_(62.07%)

/**
 * Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1
    let j = nums1.length - 1
    let p2 = n - 1
    while (p2 >= 0) {
        if (i >= 0 && nums1[i] > nums2[p2]) {
            nums1[j--] = nums1[i--]
        } else {
            nums1[j--] = nums2[p2--]
        }
    }
}

export { merge }
