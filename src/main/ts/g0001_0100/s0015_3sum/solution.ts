// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Sorting #Two_Pointers
// #Data_Structure_II_Day_1_Array #Algorithm_II_Day_3_Two_Pointers #Udemy_Two_Pointers
// #Top_Interview_150_Two_Pointers #Big_O_Time_O(n*log(n))_Space_O(n^2)
// #2025_03_22_Time_30_ms_(91.56%)_Space_74.61_MB_(11.14%)

function threeSum(nums: number[]): number[][] { //NOSONAR
    nums.sort((a, b) => a - b)
    const len = nums.length
    const result: number[][] = []
    let l: number
    let r: number
    for (let i = 0; i < len - 2; i++) {
        l = i + 1
        r = len - 1
        while (r > l) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum < 0) {
                l++
            } else if (sum > 0) {
                r--
            } else {
                const list: number[] = [nums[i], nums[l], nums[r]]
                result.push(list)
                while (l < r && nums[l + 1] === nums[l]) {
                    l++
                }
                while (r > l && nums[r - 1] === nums[r]) {
                    r--
                }
                l++
                r--
            }
        }
        while (i < len - 1 && nums[i + 1] === nums[i]) {
            i++ //NOSONAR
        }
    }
    return result
}

export { threeSum }
