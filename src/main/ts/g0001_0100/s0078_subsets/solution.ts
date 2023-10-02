// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Bit_Manipulation #Backtracking
// #Algorithm_II_Day_9_Recursion_Backtracking #Udemy_Backtracking/Recursion
// #Big_O_Time_O(2^n)_Space_O(n*2^n) #2023_10_02_Time_50_ms_(94.61%)_Space_44.8_MB_(75.83%)

const subsets = (nums: number[]): number[][] => {
    const sets: number[][] = [[]]
    for (const num of nums) sets.push(...sets.map((set) => [...set, num]))
    return sets
}

export { subsets }
