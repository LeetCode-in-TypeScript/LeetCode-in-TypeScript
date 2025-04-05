// #Hard #Array #String #Simulation #Top_Interview_150_Array/String
// #2025_04_05_Time_0_ms_(100.00%)_Space_55.70_MB_(38.14%)

function fullJustify(words: string[], maxWidth: number): string[] {
    const output: string[] = []
    let sb: string[] = []
    let lineTotal = 0
    let numWordsOnLine = 0
    let startWord = 0
    for (let i = 0; i < words.length - 1; i++) {
        lineTotal += words[i].length
        numWordsOnLine++
        if (lineTotal + numWordsOnLine + words[i + 1].length > maxWidth) {
            sb = []
            if (numWordsOnLine === 1) {
                sb.push(words[i])
                while (lineTotal++ < maxWidth) {
                    sb.push(' ')
                }
            } else {
                const spaces = Math.floor((maxWidth - lineTotal) / (numWordsOnLine - 1))
                let extraSp = (maxWidth - lineTotal) % (numWordsOnLine - 1)

                for (let j = startWord; j < startWord + numWordsOnLine - 1; j++) {
                    sb.push(words[j])
                    sb.push(' '.repeat(spaces + (extraSp-- > 0 ? 1 : 0)))
                }
                sb.push(words[startWord + numWordsOnLine - 1])
            }
            output.push(sb.join(''))
            startWord = i + 1
            numWordsOnLine = lineTotal = 0
        }
    }

    // Handle last line
    sb = []
    lineTotal = 0
    for (let i = startWord; i < words.length; i++) {
        lineTotal += words[i].length
        sb.push(words[i])
        if (lineTotal < maxWidth) {
            sb.push(' ')
            lineTotal++
        }
    }
    while (lineTotal < maxWidth) {
        sb.push(' ')
        lineTotal++
    }
    output.push(sb.join(''))

    return output
}

export { fullJustify }
