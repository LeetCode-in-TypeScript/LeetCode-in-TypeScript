// #Easy #String #Math #Bit_Manipulation #Simulation #Programming_Skills_II_Day_5
// #Top_Interview_150_Bit_Manipulation #2025_04_05_Time_0_ms_(100.00%)_Space_58.14_MB_(39.81%)

function addBinary(a: string, b: string): string {
    const aArray = a.split('')
    const bArray = b.split('')
    let sb: string[] = []
    let i = aArray.length - 1
    let j = bArray.length - 1
    let carry = 0
    while (i >= 0 || j >= 0) {
        const digitA = i >= 0 ? parseInt(aArray[i]) : 0
        const digitB = j >= 0 ? parseInt(bArray[j]) : 0
        const sum = digitA + digitB + carry
        sb.push((sum % 2).toString())
        carry = Math.floor(sum / 2)
        i--
        j--
    }
    if (carry !== 0) {
        sb.push(carry.toString())
    }
    return sb.reverse().join('')
}

export { addBinary }
