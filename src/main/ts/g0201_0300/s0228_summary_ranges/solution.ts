// #Easy #Array #Top_Interview_150_Intervals #2025_04_12_Time_0_ms_(100.00%)_Space_55.25_MB_(57.62%)

function summaryRanges(nums: number[]): string[] {
    const ranges: string[] = []
    const n = nums.length
    if (n === 0) {
        return ranges
    }
    let a = nums[0]
    let b = a
    let strB = ''
    for (let i = 1; i < n; i++) {
        if (nums[i] !== b + 1) {
            strB = a.toString()
            if (a !== b) {
                strB += '->' + b.toString()
            }
            ranges.push(strB)
            a = nums[i]
            b = a
            strB = ''
        } else {
            b++
        }
    }
    strB = a.toString()
    if (a !== b) {
        strB += '->' + b.toString()
    }
    ranges.push(strB)
    return ranges
}

export { summaryRanges }
