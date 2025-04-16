// #Easy #String #Dynamic_Programming #Two_Pointers #LeetCode_75_Two_Pointers
// #Dynamic_Programming_I_Day_19 #Level_1_Day_2_String #Udemy_Two_Pointers
// #Top_Interview_150_Two_Pointers #2025_04_14_Time_0_ms_(100.00%)_Space_56.51_MB_(36.22%)

function isSubsequence(s: string, t: string): boolean {
    let i = 0
    let j = 0
    const m = s.length
    const n = t.length
    if (m === 0) {
        return true
    }
    while (j < n) {
        if (s[i] === t[j]) {
            i++
            if (i === m) {
                return true
            }
        }
        j++
    }
    return false
}

export { isSubsequence }
