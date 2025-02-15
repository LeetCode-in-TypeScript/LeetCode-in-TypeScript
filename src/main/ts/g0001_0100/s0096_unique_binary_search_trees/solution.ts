// #Medium #Dynamic_Programming #Math #Tree #Binary_Tree #Binary_Search_Tree
// #Dynamic_Programming_I_Day_11 #Big_O_Time_O(n)_Space_O(1)
// #2023_10_03_Time_45_ms_(96.00%)_Space_42.9_MB_(25.33%)

function numTrees(n: number): number {
    const uniqueCount = new Array(n + 1).fill(0)
    uniqueCount[0] = 1
    uniqueCount[1] = 1
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            uniqueCount[i] += uniqueCount[j - 1] * uniqueCount[i - j]
        }
    }
    return uniqueCount[n]
}

export { numTrees }
