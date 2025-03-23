// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Array #Stack #Monotonic_Stack
// #Big_O_Time_O(n_log_n)_Space_O(log_n) #2025_03_23_Time_15_ms_(72.81%)_Space_72.66_MB_(37.28%)

function largestRectangleArea(heights: number[]): number {
    let stack = []
    let nextSmall = new Array(heights.length).fill(heights.length)
    let prevSmall = new Array(heights.length).fill(-1)
    for (let i = 0; i < heights.length; i++) {
        while (stack.length !== 0 && heights[stack[stack.length - 1]] > heights[i]) {
            nextSmall[stack[stack.length - 1]] = i
            stack.pop()
        }
        if (stack.length !== 0) {
            prevSmall[i] = stack[stack.length - 1]
        }
        stack.push(i)
    }
    let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
        let currentArea = heights[i] * (nextSmall[i] - prevSmall[i] - 1)
        maxArea = Math.max(maxArea, currentArea)
    }
    return maxArea
}

export { largestRectangleArea }
