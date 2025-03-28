// #Hard #Top_100_Liked_Questions #Array #Heap_Priority_Queue #Sliding_Window #Queue
// #Monotonic_Queue #Udemy_Arrays #Big_O_Time_O(n*k)_Space_O(n+k)
// #2025_03_28_Time_26_ms_(99.07%)_Space_86.22_MB_(58.38%)

function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = []
    // Maintain indices in the deque
    const deque: number[] = []
    for (let i = 0; i < nums.length; i++) {
        // Remove indices that are out of the window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift()
        }
        // Remove indices of smaller elements as they are no longer candidates for maximum
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop()
        }
        // Add the current index to the deque
        deque.push(i)
        // Add the maximum element for the current window to the result
        if (i >= k - 1) {
            result.push(nums[deque[0]])
        }
    }
    return result
}

export { maxSlidingWindow }
