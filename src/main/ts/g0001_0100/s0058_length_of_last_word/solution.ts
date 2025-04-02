// #Easy #String #Programming_Skills_II_Day_6 #Udemy_Arrays #Top_Interview_150_Array/String
// #2025_04_02_Time_0_ms_(100.00%)_Space_56.32_MB_(7.86%)

function lengthOfLastWord(s: string): number {
    let len = 0
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i]
        if (ch === ' ' && len > 0) {
            break
        } else if (ch !== ' ') {
            len++
        }
    }
    return len
}

export { lengthOfLastWord }
