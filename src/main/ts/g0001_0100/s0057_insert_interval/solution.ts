// #Medium #Array #Level_2_Day_17_Interval #Top_Interview_150_Intervals
// #2025_04_02_Time_0_ms_(100.00%)_Space_58.54_MB_(66.77%)

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const n = intervals.length
    let l = 0
    let r = n - 1
    while (l < n && newInterval[0] > intervals[l][1]) {
        l++
    }
    while (r >= 0 && newInterval[1] < intervals[r][0]) {
        r--
    }
    const res: number[][] = new Array(l + n - r).fill(0).map(() => new Array(2))
    for (let i = 0; i < l; i++) {
        res[i] = [...intervals[i]]
    }
    res[l] = [
        Math.min(newInterval[0], l === n ? newInterval[0] : intervals[l][0]),
        Math.max(newInterval[1], r === -1 ? newInterval[1] : intervals[r][1])
    ]
    for (let i = l + 1, j = r + 1; j < n; i++, j++) {
        res[i] = intervals[j]
    }
    return res
}

export { insert }
