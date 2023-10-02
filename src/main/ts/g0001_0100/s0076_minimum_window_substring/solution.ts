// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Sliding_Window
// #Level_2_Day_14_Sliding_Window/Two_Pointer #Big_O_Time_O(s.length())_Space_O(1)
// #2023_10_02_Time_82_ms_(82.17%)_Space_46.2_MB_(81.89%)

function minWindow(s: string, t: string): string { //NOSONAR
    const map: Map<string, number> = new Map()
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
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
