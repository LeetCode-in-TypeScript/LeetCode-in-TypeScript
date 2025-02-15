// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Tree #Binary_Tree
// #Binary_Search_Tree #Data_Structure_I_Day_14_Tree #Level_1_Day_8_Binary_Search_Tree
// #Udemy_Tree_Stack_Queue #Top_Interview_150_Binary_Search_Tree #Big_O_Time_O(N)_Space_O(log(N))
// #2023_10_03_Time_51_ms_(98.35%)_Space_47.3_MB_(61.68%)

import { TreeNode } from '../../com_github_leetcode/treenode'

function dfs(node: TreeNode | null, lowerBound: number, upperBound: number): boolean {
    if (!node) return true
    if (node.val <= lowerBound) return false
    if (node.val >= upperBound) return false
    return dfs(node.left, lowerBound, node.val) && dfs(node.right, node.val, upperBound)
}

function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity)
}

export { isValidBST }
