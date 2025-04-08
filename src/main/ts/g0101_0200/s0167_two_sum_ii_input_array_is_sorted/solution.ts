// #Medium #Array #Binary_Search #Two_Pointers #Algorithm_I_Day_3_Two_Pointers
// #Binary_Search_I_Day_7 #Top_Interview_150_Two_Pointers
// #2025_04_08_Time_0_ms_(100.00%)_Space_56.49_MB_(68.78%)

function twoSum(numbers: number[], target: number): number[] {
    let i = 0
    let j = numbers.length - 1
    while (i < j) {
        const sum = numbers[i] + numbers[j]
        if (sum === target) {
            return [i + 1, j + 1]
        } else if (sum < target) {
            i++
        } else {
            j--
        }
    }
    return []
}

export { twoSum }
