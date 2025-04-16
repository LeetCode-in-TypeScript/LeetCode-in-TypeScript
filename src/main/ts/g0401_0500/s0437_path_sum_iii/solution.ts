// #Medium #Depth_First_Search #Tree #Binary_Tree #LeetCode_75_Binary_Tree/DFS #Level_2_Day_7_Tree
// #Big_O_Time_O(n)_Space_O(n) #2025_03_28_Time_3_ms_(86.41%)_Space_61.43_MB_(43.21%)

function pathSum(root: TreeNode | null, targetSum: number): number {
    let count = 0
    let map = new Map<number, number>()

    function dfs(node: TreeNode | null, currentSum: number): void {
        if (!node) {
            return
        }
        currentSum += node.val
        if (currentSum === targetSum) {
            count++
        }
        count += map.get(currentSum - targetSum) ?? 0
        map.set(currentSum, map.get(currentSum) + 1 || 1)
        dfs(node?.left, currentSum)
        dfs(node?.right, currentSum)
        //remove from hashmap
        map.set(currentSum, map.get(currentSum) - 1)
        if (map.get(currentSum) === 0) {
            map.delete(currentSum)
        }
    }

    dfs(root, 0)
    return count
}

export { pathSum }
