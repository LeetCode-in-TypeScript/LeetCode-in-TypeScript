// #Medium #String #Hash_Table #Math #Top_Interview_150_Array/String
// #2025_03_31_Time_3_ms_(93.02%)_Space_61.86_MB_(54.05%)

function intToRoman(num: number): string {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let result = ''
    let i = 0
    while (num > 0) {
        if (num >= values[i]) {
            result += symbols[i]
            num -= values[i]
        } else {
            i++
        }
    }
    return result
}

export { intToRoman }
