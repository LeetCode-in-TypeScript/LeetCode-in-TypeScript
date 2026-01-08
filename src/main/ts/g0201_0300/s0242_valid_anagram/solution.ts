// #Easy #String #Hash_Table #Sorting #Data_Structure_I_Day_6_String
// #Programming_Skills_I_Day_11_Containers_and_Libraries #Udemy_Strings #Top_Interview_150_Hashmap
// #2025_04_12_Time_4_ms_(97.99%)_Space_57.08_MB_(80.13%)

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    let counts = new Array(26).fill(0)
    for (let i = 0; i < s.length; ++i) {
        counts[s.codePointAt(i)! - 'a'.codePointAt(0)!]++
        counts[t.codePointAt(i)! - 'a'.codePointAt(0)!]--
    }
    return counts.every((c) => c === 0)
}

export { isAnagram }
