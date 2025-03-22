// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table
// #Data_Structure_I_Day_2_Array #Level_1_Day_13_Hashmap #Udemy_Arrays #Top_Interview_150_Hashmap
// #Big_O_Time_O(n)_Space_O(n) #AI_can_be_used_to_solve_the_task
// #2025_03_22_Time_1_ms_(89.70%)_Space_59.39_MB_(8.75%)

function twoSum(nums: number[], target: number): number[] {
    const indexMap: Map<number, number> = new Map()
    for (let i = 0; i < nums.length; i++) {
        const requiredNum: number = target - nums[i]
        if (indexMap.has(requiredNum)) {
            return [indexMap.get(requiredNum)!, i]
        }
        indexMap.set(nums[i], i)
    }
    return [-1, -1]
}

export { twoSum }
