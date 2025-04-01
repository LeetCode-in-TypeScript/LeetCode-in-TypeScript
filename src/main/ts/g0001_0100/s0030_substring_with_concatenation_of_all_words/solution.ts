// #Hard #String #Hash_Table #Sliding_Window #Top_Interview_150_Sliding_Window
// #2025_04_01_Time_13_ms_(97.44%)_Space_63.70_MB_(46.03%)

function findSubstring(s: string, words: string[]): number[] {
    let ans: number[] = [];
    let n1 = words[0].length;
    let n2 = s.length;
    let map1 = new Map<string, number>();

    for (let ch of words) {
        map1.set(ch, (map1.get(ch) ?? 0) + 1);
    }

    for (let i = 0; i < n1; i++) {
        let left = i;
        let j = i;
        let c = 0;
        let map2 = new Map<string, number>();

        while (j + n1 <= n2) {
            let word1 = s.substring(j, j + n1);
            j += n1;

            if (map1.has(word1)) {
                map2.set(word1, (map2.get(word1) ?? 0) + 1);
                c++;

                while ((map2.get(word1) ?? 0) > (map1.get(word1) ?? 0)) {
                    let word2 = s.substring(left, left + n1);
                    map2.set(word2, (map2.get(word2) ?? 0) - 1);
                    left += n1;
                    c--;
                }

                if (c === words.length) {
                    ans.push(left);
                }
            } else {
                map2.clear();
                c = 0;
                left = j;
            }
        }
    }
    return ans;
}

export { findSubstring }
