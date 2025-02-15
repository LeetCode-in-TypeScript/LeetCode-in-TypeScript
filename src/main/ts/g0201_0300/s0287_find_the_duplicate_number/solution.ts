// #Medium #Top_100_Liked_Questions #Array #Binary_Search #Two_Pointers #Bit_Manipulation
// #Binary_Search_II_Day_5 #Big_O_Time_O(n)_Space_O(n)
// #2023_10_06_Time_60_ms_(98.11%)_Space_53.5_MB_(50.00%)

function findDuplicate(nums: number[]): number {
    const arr: number[] = new Array(nums.length + 1).fill(0)
    for (const num of nums) {
        arr[num] += 1
        if (arr[num] === 2) {
            return num
        }
    }
    return 0
}

export { findDuplicate }
