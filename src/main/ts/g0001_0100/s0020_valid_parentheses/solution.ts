// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #String #Stack
// #Data_Structure_I_Day_9_Stack_Queue #Udemy_Strings #Top_Interview_150_Stack
// #Big_O_Time_O(n)_Space_O(n) #2025_03_22_Time_1_ms_(86.85%)_Space_59.18_MB_(9.27%)

function isValid(s: string): boolean {
    const stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c)
        } else if (
            (c === ')' && stack.length > 0 && stack[stack.length - 1] === '(') ||
            (c === '}' && stack.length > 0 && stack[stack.length - 1] === '{') ||
            (c === ']' && stack.length > 0 && stack[stack.length - 1] === '[')
        ) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}

export { isValid }
