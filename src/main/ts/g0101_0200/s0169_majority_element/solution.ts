// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Sorting #Counting
// #Divide_and_Conquer #Data_Structure_II_Day_1_Array #Udemy_Famous_Algorithm
// #Top_Interview_150_Array/String #Big_O_Time_O(n)_Space_O(1)
// #2025_03_26_Time_0_ms_(100.00%)_Space_60.31_MB_(17.26%)

function majorityElement(arr: number[]): number {
    let count = 1
    let majority = arr[0]
    // For Potential Majority Element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === majority) {
            count++
        } else if (count > 1) {
            count--
        } else {
            majority = arr[i]
        }
    }
    // For Confirmation
    count = 0
    for (let j of arr) {
        if (j === majority) {
            count++
        }
    }
    if (count >= Math.floor(arr.length / 2) + 1) {
        return majority
    }
    return -1
}

export { majorityElement }
