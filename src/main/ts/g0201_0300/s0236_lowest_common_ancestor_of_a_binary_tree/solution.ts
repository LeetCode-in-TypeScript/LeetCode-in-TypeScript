// #Medium #Top_100_Liked_Questions #Depth_First_Search #Tree #Binary_Tree
// #LeetCode_75_Binary_Tree/DFS #Data_Structure_II_Day_18_Tree #Udemy_Tree_Stack_Queue
// #Top_Interview_150_Binary_Tree_General #Big_O_Time_O(n)_Space_O(n)
// #2025_03_28_Time_61_ms_(75.97%)_Space_65.98_MB_(36.62%)

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null
    }
    if (root.val === p.val || root.val === q.val) {
        return root
    }
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (left !== null && right !== null) {
        return root
    }
    if (left !== null) {
        return left
    }
    return right
}

export { lowestCommonAncestor }
