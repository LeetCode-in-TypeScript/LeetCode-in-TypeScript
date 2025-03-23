// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Sorting #Two_Pointers
// #Data_Structure_II_Day_2_Array #Udemy_Arrays #Big_O_Time_O(n)_Space_O(1)
// #2025_03_23_Time_0_ms_(100.00%)_Space_56.04_MB_(26.80%)

const sortColors = (nums: number[]) => {
    let i = 0
    let num2s = 0
    while (i < nums.length) {
        const num = nums.shift()
        if (num === 0) nums.splice(nums.length - i, 0, 0)
        else if (num === 1) nums.splice(nums.length - num2s, 0, 1)
        else {
            num2s++
            nums.push(2)
        }
        i++
    }
}

export { sortColors }
