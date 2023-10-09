// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Sorting #Counting
// #Divide_and_Conquer #Data_Structure_II_Day_1_Array #Udemy_Famous_Algorithm
// #Big_O_Time_O(n)_Space_O(1) #2023_10_09_Time_50_ms_(96.16%)_Space_46.1_MB_(46.90%)

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
