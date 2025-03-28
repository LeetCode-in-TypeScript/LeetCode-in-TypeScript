// #Medium #Top_100_Liked_Questions #String #Hash_Table #Sliding_Window
// #Algorithm_II_Day_5_Sliding_Window #Programming_Skills_II_Day_12
// #Level_1_Day_12_Sliding_Window/Two_Pointer #Big_O_Time_O(n+m)_Space_O(1)
// #2025_03_28_Time_8_ms_(97.80%)_Space_59.42_MB_(72.16%)

function findAnagrams(s: string, p: string): number[] {
    const map: number[] = new Array(26).fill(0)
    for (let i = 0; i < p.length; ++i) {
        map[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }
    const res: number[] = []
    let i: number = 0
    let j: number = 0
    while (i < s.length) {
        const idx: number = s.charCodeAt(i) - 'a'.charCodeAt(0)
        // Add the new character
        map[idx]--
        // If the length is greater than window's length, pop the left character in the window
        if (i >= p.length) {
            map[s.charCodeAt(j++) - 'a'.charCodeAt(0)]++
        }
        let finish: boolean = true
        for (let k = 0; k < 26; k++) {
            // If it is not an anagram of string p
            if (map[k] !== 0) {
                finish = false
                break
            }
        }
        if (i >= p.length - 1 && finish) {
            res.push(j)
        }
        i++
    }
    return res
}

export { findAnagrams }
