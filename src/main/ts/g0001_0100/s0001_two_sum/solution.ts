// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table
// #Data_Structure_I_Day_2_Array #Level_1_Day_13_Hashmap #Udemy_Arrays #Big_O_Time_O(n)_Space_O(n)
// #2023_08_26_Time_51_ms_(97.89%)_Space_44.5_MB_(70.23%)

interface ITemp {
    [key: number]: number
}

function twoSum(nums: number[], target: number): number[] {
    const temp: ITemp = {}
    for (let i = 0; i < nums.length; i++) {
        const tag = target - nums[i]
        if (temp[tag] >= 0) {
            return [temp[tag], i]
        }
        temp[nums[i]] = i
    }
}

export { twoSum }
