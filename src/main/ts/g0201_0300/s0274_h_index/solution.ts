// #Medium #Array #Sorting #Counting_Sort #Top_Interview_150_Array/String
// #2025_04_16_Time_0_ms_(100.00%)_Space_54.06_MB_(91.25%)

function hIndex(citations: number[]): number {
    const len = citations.length
    const freqArray = new Array(len + 1).fill(0)
    for (const citation of citations) {
        freqArray[Math.min(citation, len)]++
    }
    let totalSoFar = 0
    for (let k = len; k >= 0; k--) {
        totalSoFar += freqArray[k]
        if (totalSoFar >= k) {
            return k
        }
    }
    return -1
}

export { hIndex }
