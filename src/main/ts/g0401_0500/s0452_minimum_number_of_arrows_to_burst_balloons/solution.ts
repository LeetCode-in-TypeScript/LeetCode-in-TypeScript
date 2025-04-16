// #Medium #Array #Sorting #Greedy #LeetCode_75_Intervals #Top_Interview_150_Intervals
// #2025_04_15_Time_75_ms_(98.54%)_Space_79.44_MB_(62.20%)

function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) {
        return 0
    }
    points.sort((a, b) => a[1] - b[1])
    let minArrows = 1
    let end = points[0][1]
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            minArrows++
            end = points[i][1]
        }
    }
    return minArrows
}

export { findMinArrowShots }
