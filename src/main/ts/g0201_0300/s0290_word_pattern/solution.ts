// #Easy #String #Hash_Table #Data_Structure_II_Day_7_String #Top_Interview_150_Hashmap
// #2025_04_12_Time_0_ms_(100.00%)_Space_55.01_MB_(70.10%)

function wordPattern(pattern: string, s: string): boolean {
    const map = new Map<string, string>()
    const words = s.split(' ')
    if (words.length !== pattern.length) {
        return false
    }
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        const word = words[i]
        if (!map.has(char)) {
            if ([...map.values()].includes(word)) {
                return false
            }
            map.set(char, word)
        } else {
            if (map.get(char) !== word) {
                return false
            }
        }
    }
    return true
}

export { wordPattern }
