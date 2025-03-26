// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Bit_Manipulation
// #Data_Structure_II_Day_1_Array #Algorithm_I_Day_14_Bit_Manipulation #Udemy_Integers
// #Top_Interview_150_Bit_Manipulation #Big_O_Time_O(N)_Space_O(1)
// #2025_03_26_Time_1_ms_(78.27%)_Space_58.44_MB_(41.08%)

function singleNumber(nums: number[]): number {
    let ans = 0
    for (let num of nums) {
        ans ^= num
    }
    return ans
}

export { singleNumber }
