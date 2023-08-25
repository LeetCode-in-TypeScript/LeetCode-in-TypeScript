// #Easy #Math #Udemy_Integers #2023_08_25_Time_137_ms_(88.64%)_Space_50.5_MB_(99.43%)

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
