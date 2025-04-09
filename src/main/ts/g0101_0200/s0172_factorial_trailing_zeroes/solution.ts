// #Medium #Top_Interview_Questions #Math #Udemy_Integers #Top_Interview_150_Math
// #2025_04_09_Time_0_ms_(100.00%)_Space_55.76_MB_(76.26%)

function trailingZeroes(n: number): number {
    let base = 5
    let count = 0
    while (n >= base) {
        count += Math.floor(n / base)
        base *= 5
    }
    return count
}

export { trailingZeroes }
