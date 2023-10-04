// #Easy #Top_100_Liked_Questions #Dynamic_Programming #Bit_Manipulation #Udemy_Bit_Manipulation
// #Big_O_Time_O(num)_Space_O(num) #2023_10_04_Time_69_ms_(86.81%)_Space_49_MB_(78.01%)

function countBits(n: number): number[] {
    const bits: number[] = [0]
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[Math.floor(i / 2)] + (i % 2)
    }
    return bits
}

export { countBits }
