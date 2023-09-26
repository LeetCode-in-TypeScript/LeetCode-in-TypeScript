// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Dynamic_Programming
// #Data_Structure_II_Day_9_String #Algorithm_II_Day_14_Dynamic_Programming
// #Dynamic_Programming_I_Day_17 #Udemy_Strings #Big_O_Time_O(n)_Space_O(n)
// #2023_08_26_Time_480_ms_(35.37%)_Space_48.5_MB_(55.10%)

function longestPalindrome(s: string): string {
    let max = 0
    let res = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (s.slice(i, j).length > max && isPalindrome(s.slice(i, j))) {
                max = s.slice(i, j).length
                res = s.slice(i, j)
            }
        }
    }
    return res
}

const isPalindrome = (s: string): boolean => {
    let i = 0
    let j = s.length - 1
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

export { longestPalindrome }
