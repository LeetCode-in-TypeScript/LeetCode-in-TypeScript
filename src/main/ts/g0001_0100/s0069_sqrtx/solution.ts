// #Easy #Top_Interview_Questions #Math #Binary_Search #Binary_Search_I_Day_4
// #Top_Interview_150_Math #2025_04_16_Time_1_ms_(74.84%)_Space_57.85_MB_(56.21%)

function mySqrt(x: number): number {
    let low = 1
    let high = x
    let lowest = 0
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const pow = mid * mid
        if (pow > x) {
            high = mid - 1
        } else if (pow < x) {
            low = mid + 1
            lowest = mid
        } else {
            return mid
        }
    }
    return lowest
}

export { mySqrt }
