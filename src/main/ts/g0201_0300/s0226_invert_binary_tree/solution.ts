// #Easy #Top_100_Liked_Questions #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree
// #Data_Structure_I_Day_12_Tree #Level_2_Day_6_Tree #Udemy_Tree_Stack_Queue
// #Top_Interview_150_Binary_Tree_General #Big_O_Time_O(n)_Space_O(n)
// #2025_03_28_Time_0_ms_(100.00%)_Space_55.85_MB_(47.98%)

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
