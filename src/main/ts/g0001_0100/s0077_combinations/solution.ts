// #Medium #Backtracking #Algorithm_I_Day_11_Recursion_Backtracking #Top_Interview_150_Backtracking
// #2025_04_05_Time_46_ms_(96.14%)_Space_128.25_MB_(74.09%)

function combine(n: number, k: number): number[][] {
    const ans: number[][] = []
    const backtrack = (curr: number[], j: number) => {
        if (curr.length == k) {
            ans.push([...curr])
            return
        }
        for (let i = j; i <= n; i++) {
            curr.push(i)
            backtrack(curr, i + 1)
            curr.pop()
        }
    }
    backtrack([], 1)
    return ans
}

export { combine }
