// #Hard #String #Math #Stack #Recursion #Top_Interview_150_Stack
// #2025_04_12_Time_6_ms_(96.62%)_Space_57.57_MB_(89.85%)

function calculate(s: string): number {
    let i = 0

    function helper(ca: string[]): number {
        let num = 0
        let prenum = 0
        let isPlus = true
        while (i < ca.length) {
            const c = ca[i]
            if (c !== ' ') {
                if (c >= '0' && c <= '9') {
                    num = num * 10 + parseInt(c)
                } else if (c === '+') {
                    prenum += num * (isPlus ? 1 : -1)
                    isPlus = true
                    num = 0
                } else if (c === '-') {
                    prenum += num * (isPlus ? 1 : -1)
                    isPlus = false
                    num = 0
                } else if (c === '(') {
                    i++
                    num = helper(ca)
                } else if (c === ')') {
                    prenum += num * (isPlus ? 1 : -1)
                    return prenum
                }
            }
            i++
        }
        return prenum + num * (isPlus ? 1 : -1)
    }
    return helper(s.split(''))
}

export { calculate }
