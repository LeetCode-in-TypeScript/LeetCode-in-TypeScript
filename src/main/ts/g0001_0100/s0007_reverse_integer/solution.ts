// #Medium #Top_Interview_Questions #Math #Udemy_Integers
// #2025_03_22_Time_53_ms_(83.14%)_Space_58.56_MB_(6.02%)

function reverse(x: number): number {
    let remaining = Math.abs(x)
    let power = Math.floor(Math.log10(remaining))
    let reversed = 0
    while (remaining > 0) {
        const digit = remaining % 10
        remaining = (remaining - digit) / 10
        reversed += digit * 10 ** power--
        if (reversed > 2 ** 31 - 1) return 0
    }
    return x > 0 ? reversed : -reversed
}

export { reverse }
