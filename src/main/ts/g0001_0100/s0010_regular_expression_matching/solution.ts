// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #String #Dynamic_Programming #Recursion
// #Udemy_Dynamic_Programming #2023_08_25_Time_69_ms_(92.65%)_Space_45.9_MB_(50.61%)

function isMatch(s: string, p: string): boolean {
    const result = new Array(s.length + 1)
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(p.length + 1).fill(false)
    }
    result[0][0] = true
    for (let j = 1; j < result[0].length; j++) {
        const pChar = p[j - 1]
        if (pChar === '*') {
            result[0][j] = result[0][j - 2]
        }
    }
    for (let i = 1; i < result.length; i++) {
        for (let j = 1; j < result[0].length; j++) {
            const sChar = s[i - 1]
            const pChar = p[j - 1]
            if (sChar === pChar || pChar === '.') {
                result[i][j] = result[i - 1][j - 1]
            } else if (pChar === '*') {
                const prevCharMatch = sChar === p[j - 2] || p[j - 2] === '.' ? result[i - 1][j] : false
                result[i][j] = result[i][j - 2] || prevCharMatch
            }
        }
    }
    return result[result.length - 1][result[0].length - 1]
}

export { isMatch }
