// #Hard #Array #String #Simulation #Top_Interview_150_Array/String
// #2025_04_05_Time_0_ms_(100.00%)_Space_55.70_MB_(38.14%)

function mySqrt(x: number): number {
    let low = 1
    let high = x
    let lowest = 0
    while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const pow = mid * mid
        if(pow > x) {
            high = mid - 1
        } else if(pow < x) {
            low = mid + 1
            lowest = mid
        } else {
            return mid
        }
    }
    return lowest
}

export { mySqrt }
