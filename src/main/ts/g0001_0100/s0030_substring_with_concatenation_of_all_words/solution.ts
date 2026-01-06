// #Hard #String #Hash_Table #Sliding_Window #Top_Interview_150_Sliding_Window
// #2025_04_01_Time_13_ms_(97.44%)_Space_63.70_MB_(46.03%)

function findSubstring(s: string, words: string[]): number[] {
    if (words.length === 0) return []

    const result: number[] = []
    const wordLen = words[0].length
    const totalLen = words.length * wordLen
    const limit = s.length

    const target = buildFreqMap(words)

    for (let offset = 0; offset < wordLen; offset++) {
        scanWindow(s, offset, wordLen, totalLen, limit, target, result)
    }

    return result
}

function buildFreqMap(words: string[]): Map<string, number> {
    const map = new Map<string, number>()
    for (const w of words) {
        map.set(w, (map.get(w) ?? 0) + 1)
    }
    return map
}

function scanWindow(
    s: string,
    start: number,
    wordLen: number,
    totalLen: number,
    limit: number,
    target: Map<string, number>,
    result: number[],
): void {
    let left = start
    let count = 0
    const window = new Map<string, number>()

    for (let right = start; right + wordLen <= limit; right += wordLen) {
        const word = s.substring(right, right + wordLen)

        if (!target.has(word)) {
            window.clear()
            count = 0
            left = right + wordLen
            continue
        }

        window.set(word, (window.get(word) ?? 0) + 1)
        count++

        shrinkWindowIfNeeded(s, word, window, target, wordLen, () => {
            const removed = s.substring(left, left + wordLen)
            window.set(removed, (window.get(removed) ?? 0) - 1)
            left += wordLen
            count--
        })

        if (count * wordLen === totalLen) {
            result.push(left)
        }
    }
}

function shrinkWindowIfNeeded(
    _s: string,
    word: string,
    window: Map<string, number>,
    target: Map<string, number>,
    _wordLen: number,
    shrink: () => void,
): void {
    while ((window.get(word) ?? 0) > (target.get(word) ?? 0)) {
        shrink()
    }
}

export { findSubstring }
