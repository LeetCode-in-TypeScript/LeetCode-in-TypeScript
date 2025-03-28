// #Easy #Dynamic_Programming #Bit_Manipulation #Udemy_Bit_Manipulation
// #Big_O_Time_O(num)_Space_O(num) #2025_03_28_Time_1_ms_(89.22%)_Space_62.26_MB_(53.31%)

function countBits(n: number): number[] {
    const bits: number[] = [0]
    for (let i = 1; i <= n; i++) {
        bits[i] = bits[Math.floor(i / 2)] + (i % 2)
    }
    return bits
}

export { countBits }
