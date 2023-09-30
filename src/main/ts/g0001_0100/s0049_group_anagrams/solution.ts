// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #String #Hash_Table #Sorting
// #Data_Structure_II_Day_8_String #Programming_Skills_II_Day_11 #Udemy_Strings
// #Big_O_Time_O(n*k_log_k)_Space_O(n) #2023_09_30_Time_93_ms_(97.29%)_Space_52_MB_(99.08%)

function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return [strs]
    const map = new Map()
    function getKey(str: string): string {
        const charCount = Array(26).fill(0)
        for (const char of str) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        return charCount.join('#')
    }
    for (const str of strs) {
        const key = getKey(str)
        if (map.has(key)) {
            map.get(key).push(str)
        } else {
            map.set(key, [str])
        }
    }
    return Array.from(map.values())
}

export { groupAnagrams }
