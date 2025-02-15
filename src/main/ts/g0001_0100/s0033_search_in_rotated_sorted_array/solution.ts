// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Binary_Search
// #Algorithm_II_Day_1_Binary_Search #Binary_Search_I_Day_11 #Level_2_Day_8_Binary_Search
// #Udemy_Binary_Search #Top_Interview_150_Binary_Search #Big_O_Time_O(log_n)_Space_O(1)
// #2023_09_27_Time_43_ms_(98.54%)_Space_44.3_MB_(31.85%)

function search(nums: number[], target: number): number { //NOSONAR
    let lowEnd: number = 0
    let highEnd: number = nums.length - 1
    while (lowEnd <= highEnd) {
        let half: number = Math.floor(lowEnd + (highEnd - lowEnd) / 2)
        if (target === nums[half]) {
            return half
        }
        if (nums[lowEnd] <= nums[half]) {
            if (target < nums[half] && target >= nums[lowEnd]) {
                highEnd = half
            } else {
                lowEnd = half + 1
            }
        } else if (target >= nums[half] && target <= nums[highEnd]) {
            lowEnd = half + 1
        } else {
            highEnd = half
        }
    }
    return -1
}

export { search }
