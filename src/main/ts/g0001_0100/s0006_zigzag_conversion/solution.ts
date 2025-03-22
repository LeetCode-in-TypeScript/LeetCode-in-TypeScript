// #Medium #String #Top_Interview_150_Array/String
// #2025_03_22_Time_2_ms_(99.08%)_Space_60.88_MB_(31.04%)

function convert(s: string, numRows: number): string {
    if (numRows < 2) {
        return s
    }
    const width = numRows * 2 - 2
    let result: string = ''
    let i
    let j
    for (let row = 0; row < numRows; row++) {
        i = row
        j = width - 2 * row
        while (i < s.length) {
            if (j > 0) {
                result += s[i]
            }
            i += j
            j = width - j
        }
    }
    return result
}

export { convert }
