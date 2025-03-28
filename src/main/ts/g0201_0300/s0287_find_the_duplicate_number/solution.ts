// #Medium #Top_100_Liked_Questions #Array #Binary_Search #Two_Pointers #Bit_Manipulation
// #Binary_Search_II_Day_5 #Big_O_Time_O(n)_Space_O(n)
// #2025_03_28_Time_5_ms_(88.65%)_Space_67.23_MB_(32.75%)

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
