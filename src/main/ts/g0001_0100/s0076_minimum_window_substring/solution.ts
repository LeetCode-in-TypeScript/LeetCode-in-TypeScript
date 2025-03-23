// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Sliding_Window
// #Level_2_Day_14_Sliding_Window/Two_Pointer #Top_Interview_150_Sliding_Window
// #Big_O_Time_O(s.length())_Space_O(1) #2025_03_23_Time_20_ms_(90.35%)_Space_58.72_MB_(57.91%)

function minWindow(s: string, t: string): string { //NOSONAR
    const map: Map<string, number> = new Map()
    for (const char of t) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }
    let minStartIdx = -Infinity,
        minEndIdx = Infinity
    let remainingChars = t.length
    let startIdx = 0
    for (let endIdx = 0; endIdx < s.length; endIdx++) {
        const endChar = s[endIdx]
        if (map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1)
            if (map.get(endChar) >= 0) {
                remainingChars--
            }
        }
        while (remainingChars === 0) {
            if (minEndIdx - minStartIdx > endIdx - startIdx) {
                minStartIdx = startIdx
                minEndIdx = endIdx
            }
            const startChar = s[startIdx]
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1)
            }
            if (map.get(startChar) > 0) {
                remainingChars++
            }
            startIdx++
        }
    }
    return minStartIdx === -Infinity ? '' : s.slice(minStartIdx, minEndIdx + 1)
}

export { minWindow }
