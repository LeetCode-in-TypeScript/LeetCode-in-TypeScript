// #Medium #Array #Bit_Manipulation #Top_Interview_150_Bit_Manipulation
// #2025_04_07_Time_0_ms_(100.00%)_Space_59.11_MB_(24.16%)

function singleNumber(nums: number[]): number {
    let ones = 0
    let twos = 0
    for (const num of nums) {
        ones = (ones ^ num) & ~twos
        twos = (twos ^ num) & ~ones
    }
    return ones
}

export { singleNumber }
