// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #String #Hash_Table #Sorting
// #Data_Structure_II_Day_8_String #Programming_Skills_II_Day_11 #Udemy_Strings
// #Big_O_Time_O(n*k_log_k)_Space_O(n) #2023_09_30_Time_93_ms_(97.29%)_Space_52_MB_(99.08%)

function groupAnagrams(strs: string[]): string[][] {
    if (strs.length === 1) return [strs]
    const map = new Map()
    for (const str of strs) {
        const sorted = str.split('').sort().join('')

        if (map.has(sorted)) {
            map.get(sorted).push(str)
        } else {
            map.set(sorted, [str])
        }
    }
    return Array.from(map.values()).sort((a, b) => a.length - b.length)
}

export { groupAnagrams }
