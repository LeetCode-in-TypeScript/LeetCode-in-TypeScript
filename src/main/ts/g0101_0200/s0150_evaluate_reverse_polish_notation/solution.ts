// #Medium #Top_Interview_Questions #Array #Math #Stack #Programming_Skills_II_Day_3
// #Top_Interview_150_Stack #2025_04_08_Time_1_ms_(97.48%)_Space_60.14_MB_(28.30%)

function evalRPN(tokens: string[]): number {
    const numberStack: number[] = []
    const isOperator = (val: string): boolean => val === '+' || val === '-' || val === '*' || val === '/'
    for (let token of tokens) {
        if (isOperator(token)) {
            const right = numberStack.pop() as number
            const left = numberStack.pop() as number

            if (token === '+') numberStack.push(left + right)
            else if (token === '-') numberStack.push(left - right)
            else if (token === '*') numberStack.push(left * right)
            else if (token === '/') {
                const result = left / right
                numberStack.push(result < 0 ? Math.ceil(result) : Math.floor(result))
            }
        } else numberStack.push(+token)
    }
    return numberStack.pop() || 0
}

export { evalRPN }
