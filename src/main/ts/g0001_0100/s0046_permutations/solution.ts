// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Backtracking
// #Algorithm_I_Day_11_Recursion_Backtracking #Level_2_Day_20_Brute_Force/Backtracking
// #Udemy_Backtracking/Recursion #Top_Interview_150_Backtracking #Big_O_Time_O(n*n!)_Space_O(n+n!)
// #2025_03_23_Time_1_ms_(84.44%)_Space_60.84_MB_(26.93%)

function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const permuteRecursive = (nums: number[], index: number, result: number[][]) => {
        if (index >= nums.length) {
            result.push([...nums])
        }
        for (let i = index; i < nums.length; i++) {
            ;[nums[index], nums[i]] = [nums[i], nums[index]]
            permuteRecursive(nums, index + 1, result)
            ;[nums[index], nums[i]] = [nums[i], nums[index]]
        }
    }
    permuteRecursive(nums, 0, result)
    return result
}

export { permute }
