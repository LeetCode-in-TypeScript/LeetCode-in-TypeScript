// #Medium #Top_Interview_Questions #String #2025_03_22_Time_1_ms_(90.14%)_Space_58.06_MB_(42.36%)

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
