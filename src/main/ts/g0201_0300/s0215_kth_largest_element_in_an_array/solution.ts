// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Sorting #Heap_Priority_Queue
// #Divide_and_Conquer #Quickselect #Data_Structure_II_Day_20_Heap_Priority_Queue
// #Top_Interview_150_Heap #Big_O_Time_O(n*log(n))_Space_O(log(n))
// #2023_10_09_Time_148_ms_(54.45%)_Space_51.5_MB_(73.60%)

function findKthLargest(nums: number[], k: number): number {
    nums.sort((prev, next) => next - prev)
    return nums[k - 1]
}

export { findKthLargest }
