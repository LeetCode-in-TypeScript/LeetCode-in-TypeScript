// #Hard #Top_Interview_Questions #String #Hash_Table #Breadth_First_Search
// #Graph_Theory_I_Day_12_Breadth_First_Search #Top_Interview_150_Graph_BFS
// #2025_04_07_Time_41_ms_(95.63%)_Space_63.50_MB_(82.78%)

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0

    const queue = [beginWord]
    let steps = 1

    while (queue.length > 0) {
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift()!

            // Try changing each letter
            for (let pos = 0; pos < word.length; pos++) {
                for (let charCode = 97; charCode <= 122; charCode++) {
                    // 'a' to 'z'
                    const newChar = String.fromCodePoint(charCode)
                    if (newChar === word[pos]) continue

                    const newWord = word.slice(0, pos) + newChar + word.slice(pos + 1)

                    if (newWord === endWord) return steps + 1

                    if (wordSet.has(newWord)) {
                        queue.push(newWord)
                        wordSet.delete(newWord)
                    }
                }
            }
        }

        steps++
    }

    return 0
}

export { ladderLength }
