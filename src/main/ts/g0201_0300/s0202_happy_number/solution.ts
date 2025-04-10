// #Easy #Top_Interview_Questions #Hash_Table #Math #Two_Pointers #Algorithm_II_Day_21_Others
// #Programming_Skills_I_Day_4_Loop #Level_2_Day_1_Implementation/Simulation
// #Top_Interview_150_Hashmap #2025_04_10_Time_0_ms_(100.00%)_Space_55.45_MB_(83.98%)

function isHappy(n: number): boolean {
    let a = n
    let rem: number
    let sum = 0
    if (a === 1 || a === 7) {
        return true
    } else if (a > 1 && a < 10) {
        return false
    } else {
        while (a !== 0) {
            rem = a % 10
            sum += rem * rem
            a = Math.floor(a / 10)
        }
        return sum === 1 ? true : isHappy(sum)
    }
}

export { isHappy }
