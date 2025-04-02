// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Sorting #Heap_Priority_Queue
// #Divide_and_Conquer #Quickselect #Data_Structure_II_Day_20_Heap_Priority_Queue
// #Top_Interview_150_Heap #Big_O_Time_O(n*log(n))_Space_O(log(n))
// #2025_03_26_Time_4_ms_(99.64%)_Space_66.28_MB_(62.13%)

function findKthLargest(nums: number[], k: number): number {
    const countingLen = 2e4 + 1
    const counting = new Int32Array(countingLen)
    for (const num of nums) {
        counting[num + 1e4]++
    }
    for (let i = countingLen - 1; i >= 0; i--) {
        k -= counting[i]
        if (k <= 0) {
            return i - 1e4
        }
    }
}

export { findKthLargest }
