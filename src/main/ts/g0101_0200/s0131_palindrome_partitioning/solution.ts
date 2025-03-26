// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Dynamic_Programming
// #Backtracking #Big_O_Time_O(N*2^N)_Space_O(2^N*N)
// #2025_03_26_Time_13_ms_(94.96%)_Space_82.19_MB_(40.76%)

function partition(s: string): string[][] {
    const ans: string[][] = []
    const memo = Array.from({ length: s.length }).map(() => new Array(s.length))
    const track = (cur, start) => {
        if (start === s.length) {
            ans.push(cur.slice())
            return
        }
        for (let i = start; i < s.length; i++) {
            if (memo[start][i]) continue

            if (isPalindrome(s, start, i, memo)) {
                cur.push(s.substring(start, i + 1))
                track(cur, i + 1)
                cur.pop()
            }
        }
    }
    track([], 0)
    return ans
}

function isPalindrome(str: string, l: number, r: number, memo: boolean[][]) {
    while (l < r) {
        if (str[l] !== str[r]) {
            memo[l][r] = true
            return false
        }
        l++
        r--
    }
    return true
}

export { partition }
