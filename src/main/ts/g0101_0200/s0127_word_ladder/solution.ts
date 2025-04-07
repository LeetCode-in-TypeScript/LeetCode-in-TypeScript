// #Hard #Top_Interview_Questions #String #Hash_Table #Breadth_First_Search
// #Graph_Theory_I_Day_12_Breadth_First_Search #Top_Interview_150_Graph_BFS
// #2025_04_07_Time_41_ms_(95.63%)_Space_63.50_MB_(82.78%)

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet: Set<string> = new Set(wordList)
    if (!wordSet.has(endWord)) {
        return 0
    }
    let beginSet: Set<string> = new Set([beginWord])
    let endSet: Set<string> = new Set([endWord])
    const visited: Set<string> = new Set()
    let len = 1
    const wordLen = beginWord.length
    while (beginSet.size > 0 && endSet.size > 0) {
        if (beginSet.size > endSet.size) {
            ;[beginSet, endSet] = [endSet, beginSet]
        }
        const tempSet: Set<string> = new Set()
        for (const word of beginSet) {
            const chars = word.split('')
            for (let i = 0; i < wordLen; i++) {
                const oldChar = chars[i]
                for (let c = 97; c <= 122; c++) {
                    chars[i] = String.fromCharCode(c)
                    const nextWord = chars.join('')
                    if (endSet.has(nextWord)) {
                        return len + 1
                    }
                    if (!visited.has(nextWord) && wordSet.has(nextWord)) {
                        tempSet.add(nextWord)
                        visited.add(nextWord)
                    }
                }
                chars[i] = oldChar
            }
        }
        beginSet = tempSet
        len++
    }
    return 0
}

export { ladderLength }
