// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Bit_Manipulation
// #Data_Structure_II_Day_1_Array #Algorithm_I_Day_14_Bit_Manipulation #Udemy_Integers
// #Big_O_Time_O(N)_Space_O(1) #2023_10_05_Time_56_ms_(85.48%)_Space_45.6_MB_(63.32%)

function singleNumber(nums: number[]): number {
    let ans = 0
    for (let num of nums) {
        ans ^= num
    }
    return ans
}

export { singleNumber }
