// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Greedy #Two_Pointers
// #Algorithm_II_Day_4_Two_Pointers #Top_Interview_150_Two_Pointers #Big_O_Time_O(n)_Space_O(1)
// #2023_08_28_Time_57_ms_(98.23%)_Space_50.9_MB_(84.15%)

function maxArea(height: number[]): number {
    let maxArea = -1
    let left = 0
    let right = height.length - 1
    while (left < right) {
        if (height[left] < height[right]) {
            maxArea = Math.max(maxArea, height[left] * (right - left))
            left++
        } else {
            maxArea = Math.max(maxArea, height[right] * (right - left))
            right--
        }
    }
    return maxArea
}

export { maxArea }
