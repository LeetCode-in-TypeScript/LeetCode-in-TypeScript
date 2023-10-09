// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Tree #Binary_Tree
// #Binary_Search_Tree #Data_Structure_II_Day_17_Tree #Level_2_Day_9_Binary_Search_Tree
// #Big_O_Time_O(n)_Space_O(n) #2023_10_09_Time_54_ms_(97.22%)_Space_47.7_MB_(99.80%)

/*
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
function kthSmallest(root: TreeNode | null, k: number): number {
    let cur = root
    while (cur !== null) {
        if (cur.left !== null) {
            const left = cur.left
            cur.left = null
            let rightmost = left
            while (rightmost.right !== null) rightmost = rightmost.right
            rightmost.right = cur
            cur = left
        } else if (--k !== 0) {
            cur = cur.right
        } else {
            break
        }
    }
    return cur.val
}

export { kthSmallest }
