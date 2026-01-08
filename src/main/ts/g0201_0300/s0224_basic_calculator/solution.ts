// #Hard #String #Math #Stack #Recursion #Top_Interview_150_Stack
// #2025_04_12_Time_6_ms_(96.62%)_Space_57.57_MB_(89.85%)

function calculate(s: string): number {
    let i = 0

    function helper(ca: string[]): number {
        let result = 0
        let num = 0
        let sign = 1

        while (i < ca.length) {
            const c = ca[i]

            if (c === ' ') {
                i++
                continue
            }

            if (c >= '0' && c <= '9') {
                num = num * 10 + (c.codePointAt(0)! - 48)
            } else if (c === '+' || c === '-') {
                result += sign * num
                sign = c === '+' ? 1 : -1
                num = 0
            } else if (c === '(') {
                i++
                num = helper(ca)
            } else if (c === ')') {
                return result + sign * num
            }

            i++
        }

        return result + sign * num
    }

    return helper(s.split(''))
}

export { calculate }
