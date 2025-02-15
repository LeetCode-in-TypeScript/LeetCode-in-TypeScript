// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Dynamic_Programming
// #Data_Structure_II_Day_9_String #Algorithm_II_Day_14_Dynamic_Programming
// #Dynamic_Programming_I_Day_17 #Udemy_Strings #Top_Interview_150_Multidimensional_DP
// #Big_O_Time_O(n)_Space_O(n) #2023_09_28_Time_68_ms_(95.34%)_Space_44.5_MB_(96.58%)

function longestPalindrome(s: string): string {
    const newStr: string[] = new Array(s.length * 2 + 1)
    newStr[0] = '#'
    for (let i = 0; i < s.length; i++) {
        newStr[2 * i + 1] = s.charAt(i)
        newStr[2 * i + 2] = '#'
    }
    const dp: number[] = new Array(newStr.length)
    let friendCenter: number = 0
    let friendRadius: number = 0
    let lpsCenter: number = 0
    let lpsRadius: number = 0
    for (let i = 0; i < newStr.length; i++) {
        dp[i] =
            friendCenter + friendRadius > i ? Math.min(dp[2 * friendCenter - i], friendCenter + friendRadius - i) : 1
        while (i + dp[i] < newStr.length && i - dp[i] >= 0 && newStr[i + dp[i]] === newStr[i - dp[i]]) {
            dp[i]++
        }
        if (friendCenter + friendRadius < i + dp[i]) {
            friendCenter = i
            friendRadius = dp[i]
        }
        if (lpsRadius < dp[i]) {
            lpsCenter = i
            lpsRadius = dp[i]
        }
    }
    return s.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2)
}

export { longestPalindrome }
