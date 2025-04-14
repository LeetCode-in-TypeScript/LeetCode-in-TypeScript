// #Easy #String #Hash_Table #Counting #Data_Structure_I_Day_6_String #Top_Interview_150_Hashmap
// #2025_04_14_Time_4_ms_(97.40%)_Space_57.51_MB_(84.32%)

function canConstruct(ransomNote: string, magazine: string): boolean {
    const freq: number[] = new Array(26).fill(0)
    let remaining = ransomNote.length
    for (let i = 0; i < remaining; i++) {
        freq[ransomNote.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < magazine.length && remaining > 0; i++) {
        const index = magazine.charCodeAt(i) - 97
        if (freq[index] > 0) {
            freq[index]--
            remaining--
        }
    }
    return remaining === 0
}

export { canConstruct }
