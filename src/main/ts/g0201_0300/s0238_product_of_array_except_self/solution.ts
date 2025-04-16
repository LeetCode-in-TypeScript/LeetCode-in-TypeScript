// #Medium #Top_100_Liked_Questions #Array #Prefix_Sum #LeetCode_75_Array/String
// #Data_Structure_II_Day_5_Array #Udemy_Arrays #Top_Interview_150_Array/String
// #Big_O_Time_O(n^2)_Space_O(n) #2025_03_28_Time_3_ms_(92.81%)_Space_70.08_MB_(42.74%)

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    const ans: number[] = new Array(n)
    let product = 1
    // Calculate the product of all elements to the left of each element
    for (let i = 0; i < n; i++) {
        ans[i] = product
        product *= nums[i]
    }
    product = 1
    // Calculate the product of all elements to the right of each element
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= product
        product *= nums[i]
    }
    return ans
}

export { productExceptSelf }
