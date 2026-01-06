// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Backtracking
// #LeetCode_75_Backtracking #Algorithm_II_Day_11_Recursion_Backtracking
// #Udemy_Backtracking/Recursion #Top_Interview_150_Backtracking #Big_O_Time_O(4^n)_Space_O(n)
// #2025_03_22_Time_0_ms_(100.00%)_Space_56.27_MB_(8.55%)

function letterCombinations(digits: string): string[] {
    if (digits.length === 0) {
        return []
    }
    const letters: string[] = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const ans: string[] = []
    const sb: string[] = []
    findCombinations(0, digits, letters, sb, ans)
    return ans
}

function findCombinations(start: number, nums: string, letters: string[], curr: string[], ans: string[]): void {
    if (curr.length === nums.length) {
        ans.push(curr.join(''))
        return
    }
    for (let i = start; i < nums.length; i++) {
        const n = Number.parseInt(nums.charAt(i))
        for (let j = 0; j < letters[n].length; j++) {
            const ch = letters[n].charAt(j)
            curr.push(ch)
            findCombinations(i + 1, nums, letters, curr, ans)
            curr.pop()
        }
    }
}

export { letterCombinations }
