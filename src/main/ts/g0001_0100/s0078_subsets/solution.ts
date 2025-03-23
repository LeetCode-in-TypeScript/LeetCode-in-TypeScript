// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Bit_Manipulation #Backtracking
// #Algorithm_II_Day_9_Recursion_Backtracking #Udemy_Backtracking/Recursion
// #Big_O_Time_O(2^n)_Space_O(n*2^n) #2025_03_23_Time_0_ms_(100.00%)_Space_58.49_MB_(41.68%)

function subsets(nums: number[]): number[][] {
    const sets: number[][] = [[]]
    for (const num of nums) sets.push(...sets.map((set) => [...set, num]))
    return sets
}

export { subsets }
