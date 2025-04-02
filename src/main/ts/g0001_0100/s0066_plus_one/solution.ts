// #Easy #Top_Interview_Questions #Array #Math #Programming_Skills_II_Day_3 #Udemy_Arrays
// #Top_Interview_150_Math #2025_04_02_Time_0_ms_(100.00%)_Space_55.60_MB_(44.68%)

function plusOne(digits: number[]): number[] {
    let num = 1
    let carry = 0
    let sum
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === digits.length - 1) {
            sum = digits[i] + carry + num
        } else {
            sum = digits[i] + carry
        }
        carry = Math.floor(sum / 10)
        digits[i] = sum % 10
    }
    if (carry !== 0) {
        return [carry, ...digits]
    }
    return digits
}

export { plusOne }
