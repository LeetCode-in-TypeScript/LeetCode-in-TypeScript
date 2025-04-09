// #Easy #Top_Interview_Questions #Bit_Manipulation #Divide_and_Conquer
// #Algorithm_I_Day_14_Bit_Manipulation #Udemy_Bit_Manipulation #Top_Interview_150_Bit_Manipulation
// #2025_04_09_Time_34_ms_(99.74%)_Space_57.96_MB_(41.00%)

function reverseBits(n: number): number {
    let reversed = 0
    for (let i = 0; i < 32; i++) {
        reversed <<= 1
        reversed = reversed | (n & 1)
        n >>>= 1
    }
    return reversed >>> 0
}

export { reverseBits }
