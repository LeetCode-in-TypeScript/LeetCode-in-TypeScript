// #Hard #Top_Interview_Questions #String #Hash_Table #Breadth_First_Search
// #Graph_Theory_I_Day_12_Breadth_First_Search #Top_Interview_150_Graph_BFS
// #2025_04_07_Time_41_ms_(95.63%)_Space_63.50_MB_(82.78%)

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0

    const queue: string[] = [beginWord]
    let steps = 1

    while (queue.length > 0) {
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const word = queue.shift()!

            if (processNextWords(word, endWord, wordSet, queue)) {
                return steps + 1
            }
        }

        steps++
    }

    return 0
}

function processNextWords(
    word: string,
    endWord: string,
    wordSet: Set<string>,
    queue: string[]
): boolean {
    for (let pos = 0; pos < word.length; pos++) {
        if (tryAllReplacements(word, pos, endWord, wordSet, queue)) {
            return true
        }
    }
    return false
}


function tryAllReplacements(
    word: string,
    pos: number,
    endWord: string,
    wordSet: Set<string>,
    queue: string[],
): boolean {
    for (let c = 97; c <= 122; c++) {
        const char = String.fromCodePoint(c)
        if (char === word[pos]) continue

        const newWord = replaceChar(word, pos, char)

        if (newWord === endWord) return true

        if (wordSet.has(newWord)) {
            queue.push(newWord)
            wordSet.delete(newWord)
        }
    }
    return false
}

function replaceChar(word: string, index: number, char: string): string {
    return word.slice(0, index) + char + word.slice(index + 1)
}

export { ladderLength }
