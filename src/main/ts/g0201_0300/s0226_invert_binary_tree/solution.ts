// #Easy #Top_100_Liked_Questions #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree
// #Data_Structure_I_Day_12_Tree #Level_2_Day_6_Tree #Udemy_Tree_Stack_Queue
// #Big_O_Time_O(n)_Space_O(n) #2023_10_09_Time_52_ms_(81.65%)_Space_44.2_MB_(79.49%)

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null
    }
    const temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
}

export { invertTree }
