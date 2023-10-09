// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Prefix_Sum
// #Data_Structure_II_Day_5_Array #Udemy_Arrays #Big_O_Time_O(n^2)_Space_O(n)
// #2023_10_09_Time_89_ms_(64.48%)_Space_55.4_MB_(36.71%)

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
