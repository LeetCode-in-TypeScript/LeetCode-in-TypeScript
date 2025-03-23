// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Sorting
// #Data_Structure_II_Day_2_Array #Level_2_Day_17_Interval #Udemy_2D_Arrays/Matrix
// #Top_Interview_150_Intervals #Big_O_Time_O(n_log_n)_Space_O(n)
// #2025_03_23_Time_7_ms_(87.99%)_Space_66.00_MB_(36.16%)

function merge(intervals: number[][]): number[][] {
    let result = []
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length; i++) { //NOSONAR
        let len = result.length
        if (len > 0 && intervals[i][0] <= result[len - 1][1]) {
            if (result[len - 1][0] >= intervals[i][0]) {
                result[len - 1][0] = intervals[i][0]
            }
            if (result[len - 1][1] <= intervals[i][1]) {
                result[len - 1][1] = intervals[i][1]
            }
        } else {
            result.push(intervals[i])
        }
    }
    return result
}

export { merge }
