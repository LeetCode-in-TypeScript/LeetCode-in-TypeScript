// #Medium #String #Dynamic_Programming #Big_O_Time_O(n^2)_Space_O(n)
// #2025_03_28_Time_5_ms_(100.00%)_Space_56.80_MB_(51.20%)

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
