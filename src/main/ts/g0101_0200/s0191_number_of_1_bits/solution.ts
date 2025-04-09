// #Easy #Top_Interview_Questions #Bit_Manipulation #Algorithm_I_Day_13_Bit_Manipulation
// #Programming_Skills_I_Day_2_Operator #Udemy_Bit_Manipulation #Top_Interview_150_Bit_Manipulation
// #2025_04_09_Time_0_ms_(100.00%)_Space_55.90_MB_(75.68%)

function hammingWeight(n: number): number {
    let sum = 0
    n = n >>> 0
    while (n > 0) {
        sum += n % 2
        n = Math.floor(n / 2)
    }
    return sum
}

export { hammingWeight }
