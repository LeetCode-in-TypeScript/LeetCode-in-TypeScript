// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Dynamic_Programming
// #Backtracking #Algorithm_II_Day_11_Recursion_Backtracking #Udemy_Backtracking/Recursion
// #Top_Interview_150_Backtracking #Big_O_Time_O(2^n)_Space_O(n)
// #2025_03_22_Time_1_ms_(72.82%)_Space_56.97_MB_(44.53%)

function generateParenthesis(n: number): string[] {
    const sb: string[] = []
    const ans: string[] = []
    return generate(sb, ans, n, n)
}

function generate(sb: string[], str: string[], open: number, close: number): string[] {
    if (open === 0 && close === 0) {
        str.push(sb.join(''))
        return str
    }
    if (open > 0) {
        sb.push('(')
        generate(sb, str, open - 1, close)
        sb.pop()
    }
    if (close > 0 && open < close) {
        sb.push(')')
        generate(sb, str, open, close - 1)
        sb.pop()
    }
    return str
}

export { generateParenthesis }
