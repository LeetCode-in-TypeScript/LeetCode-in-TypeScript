// #Medium #Top_100_Liked_Questions #String #Stack #Recursion #Level_1_Day_14_Stack #Udemy_Strings
// #Big_O_Time_O(n)_Space_O(n) #2023_10_04_Time_51_ms_(81.02%)_Space_43_MB_(55.52%)

function decodeString(s: string): string {
    let stack: string[] = []
    for (const l of s) {
        if (l !== ']') {
            stack.push(l)
            continue
        }
        parse()
    }
    function parse(): void {
        let word: string = ''
        while (stack[stack.length - 1] !== '[' && stack.length !== 0) {
            word = stack[stack.length - 1] + word
            stack.pop()
        }
        stack.pop()
        const vov = '0123456789'
        let counter = stack.pop()
        while (vov.includes(stack[stack.length - 1])) {
            counter = stack.pop() + counter
        }
        word = word.repeat(Number(counter))
        stack.push(word)
    }
    return stack.join('')
}

export { decodeString }
