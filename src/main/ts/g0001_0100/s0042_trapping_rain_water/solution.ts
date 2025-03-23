// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming #Two_Pointers
// #Stack #Monotonic_Stack #Dynamic_Programming_I_Day_9 #Udemy_Two_Pointers
// #Top_Interview_150_Array/String #Big_O_Time_O(n)_Space_O(1)
// #2025_03_23_Time_0_ms_(100.00%)_Space_57.78_MB_(55.13%)

function trap(height: number[]): number {
    let result = 0
    let left = 1
    let right = height.length - 2
    let leftMax = height[left - 1]
    let rightMax = height[right + 1]
    while (left <= right) {
        if (leftMax < rightMax) {
            leftMax = Math.max(leftMax, height[left])
            result += leftMax - height[left]
            left++
        } else {
            rightMax = Math.max(rightMax, height[right])
            result += rightMax - height[right]
            right--
        }
    }
    return result
}

export { trap }
