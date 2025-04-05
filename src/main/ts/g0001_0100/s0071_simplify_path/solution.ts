// #Medium #String #Stack #Top_Interview_150_Stack
// #2025_04_05_Time_0_ms_(100.00%)_Space_58.31_MB_(30.21%)

function simplifyPath(path: string): string {
    const stack = []
    const mod = path.split('/').filter((element) => element.length)
    for (const element of mod) {
        if (element === '..') {
            stack.pop()
        } else if (element === '.') {
            continue
        } else {
            stack.push(element)
        }
    }
    return '/'.concat(stack.join('/'))
}

export { simplifyPath }
