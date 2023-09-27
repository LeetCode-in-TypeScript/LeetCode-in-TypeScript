// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Binary_Search
// #Algorithm_II_Day_1_Binary_Search #Binary_Search_I_Day_5 #Big_O_Time_O(log_n)_Space_O(1)
// #2023_09_27_Time_45_ms_(98.05%)_Space_44.5_MB_(54.86%)

function searchRange(nums: number[], target: number): number[] { //NOSONAR
    let first = -1
    let last = -1
    let left1 = 0
    let left2 = left1
    let right1 = nums.length - 1
    let right2 = right1

    while (left1 <= right1 || left2 <= right2) {
        if (left1 <= right1) {
            let mid1 = Math.floor((left1 + right1) / 2)
            if (nums[mid1] == target) {
                first = mid1
                right1 = mid1 - 1
            } else if (nums[mid1] < target) {
                left1 = mid1 + 1
            } else {
                right1 = mid1 - 1
            }
        }

        if (left2 <= right2) {
            let mid2 = Math.floor((left2 + right2) / 2)
            if (nums[mid2] == target) {
                last = mid2
                left2 = mid2 + 1
            } else if (nums[mid2] < target) {
                left2 = mid2 + 1
            } else {
                right2 = mid2 - 1
            }
        }
    }
    return [first, last]
}

export { searchRange }
