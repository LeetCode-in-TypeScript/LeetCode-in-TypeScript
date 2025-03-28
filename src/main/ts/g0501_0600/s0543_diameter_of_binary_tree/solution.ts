// #Easy #Top_100_Liked_Questions #Depth_First_Search #Tree #Binary_Tree #Level_2_Day_7_Tree
// #Udemy_Tree_Stack_Queue #Big_O_Time_O(n)_Space_O(n)
// #2025_03_28_Time_1_ms_(87.16%)_Space_63.47_MB_(59.51%)

function diameterOfBinaryTree(root: TreeNode | null): number {
    let ans = 0
    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return 0
        }
        let left = dfs(node.left)
        let right = dfs(node.right)
        ans = Math.max(ans, left + right)

        return Math.max(left, right) + 1
    }
    dfs(root)
    return ans
}

export { diameterOfBinaryTree }
