// #Easy #Math #Udemy_Integers #Top_Interview_150_Math
// #2025_03_22_Time_3_ms_(99.14%)_Space_64.18_MB_(50.40%)

function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }
    let rev: number = 0
    let localX: number = x
    while (localX > 0) {
        rev *= 10
        rev += localX % 10
        localX = Math.floor(localX / 10)
    }
    return rev === x
}

export { isPalindrome }
