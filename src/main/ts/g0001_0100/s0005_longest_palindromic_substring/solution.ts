// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Dynamic_Programming
// #Data_Structure_II_Day_9_String #Algorithm_II_Day_14_Dynamic_Programming
// #Dynamic_Programming_I_Day_17 #Udemy_Strings
// #2023_03_16_Time_660_ms_(36.76%)_Space_48.7_MB_(52.92%)

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
