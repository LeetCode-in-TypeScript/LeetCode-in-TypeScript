// #Hard #Top_100_Liked_Questions #String #Dynamic_Programming #Stack #Big_O_Time_O(n)_Space_O(1)
// #2023_09_26_Time_56_ms_(89.31%)_Space_43.9_MB_(100.00%)

function longestValidParentheses(s: string): number {
    let open = 0
    let close = 0
    let max = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++
        } else {
            close++
        }

        if (open === close) {
            max = Math.max(max, open + close)
        } else if (close > open) {
            open = 0
            close = 0
        }
    }

    open = 0
    close = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            open++
        } else {
            close++
        }

        if (open === close) {
            max = Math.max(max, open + close)
        } else if (open > close) {
            open = 0
            close = 0
        }
    }

    return max
}

export { longestValidParentheses }
