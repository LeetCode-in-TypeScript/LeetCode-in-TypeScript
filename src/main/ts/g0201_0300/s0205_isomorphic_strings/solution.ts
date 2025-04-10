// #Easy #String #Hash_Table #Level_1_Day_2_String #Top_Interview_150_Hashmap
// #2025_04_10_Time_3_ms_(96.02%)_Space_56.62_MB_(65.86%)

function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false
    }
    const mapS = new Map<string, string>()
    const mapT = new Map<string, string>()
    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i]) || mapT.has(t[i])) {
            if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) {
                return false
            }
        } else {
            mapS.set(s[i], t[i])
            mapT.set(t[i], s[i])
        }
    }
    return true
}

export { isIsomorphic }
