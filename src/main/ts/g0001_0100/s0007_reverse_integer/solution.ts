// #Medium #Top_Interview_Questions #Math #Udemy_Integers
// #2023_08_25_Time_56_ms_(95.68%)_Space_43.8_MB_(99.70%)

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
