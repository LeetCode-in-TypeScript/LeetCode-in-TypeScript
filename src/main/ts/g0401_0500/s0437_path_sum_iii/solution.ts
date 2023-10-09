// #Medium #Top_100_Liked_Questions #Depth_First_Search #Tree #Binary_Tree #Level_2_Day_7_Tree
// #Big_O_Time_O(n)_Space_O(n) #2023_09_30_Time_68_ms_(86.71%)_Space_47.3_MB_(98.10%)

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
