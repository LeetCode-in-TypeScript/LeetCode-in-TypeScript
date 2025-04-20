// #Medium #Top_100_Liked_Questions #Array #Backtracking #Algorithm_II_Day_10_Recursion_Backtracking
// #Level_2_Day_20_Brute_Force/Backtracking #Udemy_Backtracking/Recursion
// #Top_Interview_150_Backtracking #Big_O_Time_O(2^n)_Space_O(n+2^n)
// #2025_03_22_Time_1_ms_(98.17%)_Space_61.61_MB_(21.40%)

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    const path: number[] = []
    const comFunct = (index: number, sum: number) => {
        if (sum === target) {
            result.push([...path])
            return
        }
        if (sum > target) return
        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i])
            comFunct(i, sum + candidates[i])
            path.pop()
        }
    }
    comFunct(0, 0)
    return result
}

export { combinationSum }
