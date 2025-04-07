// #Medium #String #Dynamic_Programming #Top_Interview_150_Multidimensional_DP
// #2025_04_05_Time_43_ms_(97.65%)_Space_58.17_MB_(61.77%)

function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s3.length !== s1.length + s2.length) {
        return false
    }
    const cache: boolean[][] = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1).fill(null))
    return isInterleaveHelper(s1, s2, s3, 0, 0, 0, cache)
}

function isInterleaveHelper(
    s1: string,
    s2: string,
    s3: string,
    i1: number,
    i2: number,
    i3: number,
    cache: boolean[][],
): boolean {
    if (cache[i1][i2] !== null) {
        return cache[i1][i2]
    }
    if (i1 === s1.length && i2 === s2.length && i3 === s3.length) {
        return true
    }
    let result = false
    if (i1 < s1.length && s1.charAt(i1) === s3.charAt(i3)) {
        result = isInterleaveHelper(s1, s2, s3, i1 + 1, i2, i3 + 1, cache)
    }
    if (i2 < s2.length && s2.charAt(i2) === s3.charAt(i3)) {
        result = result || isInterleaveHelper(s1, s2, s3, i1, i2 + 1, i3 + 1, cache)
    }
    cache[i1][i2] = result
    return result
}

export { isInterleave }
