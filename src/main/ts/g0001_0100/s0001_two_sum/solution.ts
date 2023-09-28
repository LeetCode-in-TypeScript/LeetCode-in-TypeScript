// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table
// #Data_Structure_I_Day_2_Array #Level_1_Day_13_Hashmap #Udemy_Arrays #Big_O_Time_O(n)_Space_O(n)
// #2023_09_28_Time_54_ms_(91.72%)_Space_45.5_MB_(22.26%)

function twoSum(numbers: number[], target: number): number[] {
    const indexMap: Map<number, number> = new Map()
    for (let i = 0; i < numbers.length; i++) {
        const requiredNum: number = target - numbers[i]
        if (indexMap.has(requiredNum)) {
            return [indexMap.get(requiredNum)!, i]
        }
        indexMap.set(numbers[i], i)
    }
    return [-1, -1]
}

export { twoSum }
