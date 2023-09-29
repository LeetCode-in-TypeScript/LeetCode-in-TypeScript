// #Medium #Top_100_Liked_Questions #String #Dynamic_Programming #Big_O_Time_O(n^2)_Space_O(n)
// #2023_09_30_Time_60_ms_(89.76%)_Space_43_MB_(93.98%)

function expand(a: string[], l: number, r: number, res: number[]): void {
    while (l >= 0 && r < a.length) {
        if (a[l] !== a[r]) {
            return
        } else {
            res[0]++
            l--
            r++
        }
    }
}

function countSubstrings(s: string): number {
    const a: string[] = s.split('')
    const res: number[] = [0]

    for (let i = 0; i < a.length; i++) {
        expand(a, i, i, res)
        expand(a, i, i + 1, res)
    }

    return res[0]
}

export { countSubstrings }
