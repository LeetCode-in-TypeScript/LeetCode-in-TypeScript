// #Hard #Array #String #Simulation #Top_Interview_150_Array/String
// #2025_04_05_Time_0_ms_(100.00%)_Space_55.70_MB_(38.14%)

function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = []
    let start = 0
    let lineLen = 0

    for (let i = 0; i < words.length; i++) {
        if (lineLen + words[i].length + (i - start) > maxWidth) {
            result.push(justifyLine(words, start, i - 1, lineLen, maxWidth))
            start = i
            lineLen = 0
        }
        lineLen += words[i].length
    }

    result.push(leftJustify(words, start, words.length - 1, maxWidth))
    return result
}

function leftJustify(
    words: string[],
    start: number,
    end: number,
    maxWidth: number
): string {
    let line = words.slice(start, end + 1).join(' ')
    return padRight(line, maxWidth)
}


function justifyLine(
    words: string[],
    start: number,
    end: number,
    lineLen: number,
    maxWidth: number
): string {
    if (start === end) {
        return padRight(words[start], maxWidth)
    }

    const gaps = end - start
    const totalSpaces = maxWidth - lineLen
    const base = Math.floor(totalSpaces / gaps)
    let extra = totalSpaces % gaps

    let line = ''
    for (let i = start; i < end; i++) {
        line += words[i]
        line += ' '.repeat(base + (extra-- > 0 ? 1 : 0))
    }
    return line + words[end]
}

function padRight(text: string, width: number): string {
    return text + ' '.repeat(width - text.length)
}


export { fullJustify }
