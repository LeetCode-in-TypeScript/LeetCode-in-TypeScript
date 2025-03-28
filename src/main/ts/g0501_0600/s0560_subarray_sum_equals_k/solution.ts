// #Medium #Top_100_Liked_Questions #Array #Hash_Table #Prefix_Sum #Data_Structure_II_Day_5_Array
// #Big_O_Time_O(n)_Space_O(n) #2025_03_28_Time_14_ms_(87.34%)_Space_67.32_MB_(18.02%)

function subarraySum(nums: number[], k: number): number {
    let tempSum: number = 0
    let ret: number = 0
    const sumCount: Map<number, number> = new Map()
    sumCount.set(0, 1)
    for (const num of nums) {
        tempSum += num
        if (sumCount.has(tempSum - k)) {
            ret += sumCount.get(tempSum - k)!
        }
        if (sumCount.has(tempSum)) {
            sumCount.set(tempSum, sumCount.get(tempSum)! + 1)
        } else {
            sumCount.set(tempSum, 1)
        }
    }
    return ret
}

export { subarraySum }
