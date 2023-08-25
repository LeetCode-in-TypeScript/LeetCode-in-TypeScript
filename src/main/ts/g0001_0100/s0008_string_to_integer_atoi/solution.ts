// #Medium #Top_Interview_Questions #String #2023_08_25_Time_56_ms_(99.01%)_Space_44_MB_(98.27%)

function myAtoi(s: string): number {
    s = s.trim()
    if (s.length === 0) return 0
    let result = parseInt(s) || 0
    if (-1 * 2 ** 31 <= result && result <= 2 ** 31 - 1) {
        return result
    } else if (result < -1 * 2 ** 31) {
        return -1 * 2 ** 31
    } else {
        return 2 ** 31 - 1
    }
}

export { myAtoi }
