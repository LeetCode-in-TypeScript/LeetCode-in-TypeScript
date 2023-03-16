// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Sliding_Window
// #Algorithm_I_Day_6_Sliding_Window #Level_2_Day_14_Sliding_Window/Two_Pointer #Udemy_Strings
// #2023_03_16_Time_95_ms_(70.71%)_Space_49.1_MB_(49.42%)

function lengthOfLongestSubstring(s: string): number {
    const hash: { [key: string]: number } = {}
    let maxLength = 0
    let length = 0
    let start = 0

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (hash[char] !== undefined && hash[char] >= start) {
            start = hash[char] + 1
            length = i - start
        }
        length++
        hash[char] = i
        maxLength = Math.max(maxLength, length)
    }
    return maxLength
}

export { lengthOfLongestSubstring }
