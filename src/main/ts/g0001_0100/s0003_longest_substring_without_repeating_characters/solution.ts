// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Sliding_Window
// #Algorithm_I_Day_6_Sliding_Window #Level_2_Day_14_Sliding_Window/Two_Pointer #Udemy_Strings
// #Top_Interview_150_Sliding_Window #Big_O_Time_O(n)_Space_O(1) #AI_can_be_used_to_solve_the_task
// #2023_09_28_Time_65_ms_(90.77%)_Space_44.9_MB_(95.29%)

function lengthOfLongestSubstring(s: string): number {
    const lastIndices: number[] = new Array(256).fill(-1)
    let maxLen: number = 0
    let curLen: number = 0
    let start: number = 0
    for (let i = 0; i < s.length; i++) {
        const cur: string = s.charAt(i)
        const charCode: number = cur.charCodeAt(0)
        if (lastIndices[charCode] < start) {
            lastIndices[charCode] = i
            curLen++
        } else {
            const lastIndex: number = lastIndices[charCode]
            start = lastIndex + 1
            curLen = i - start + 1
            lastIndices[charCode] = i
        }
        if (curLen > maxLen) {
            maxLen = curLen
        }
    }
    return maxLen
}

export { lengthOfLongestSubstring }
