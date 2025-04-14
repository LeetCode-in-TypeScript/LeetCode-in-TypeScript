// #Medium #String #Hash_Table #Breadth_First_Search #Graph_Theory_I_Day_12_Breadth_First_Search
// #Top_Interview_150_Graph_BFS #2025_04_14_Time_0_ms_(100.00%)_Space_55.27_MB_(71.43%)

function minMutation(startGene: string, endGene: string, bank: string[]): number {
    const isInBank = (set: Set<string>, cur: string): string[] => {
        const res: string[] = []
        for (const each of set) {
            let diff = 0
            for (let i = 0; i < each.length; i++) {
                if (each[i] !== cur[i]) {
                    diff++
                    if (diff > 1) break
                }
            }
            if (diff === 1) {
                res.push(each)
            }
        }
        return res
    }
    const set = new Set(bank)
    const queue: string[] = [startGene]
    let step = 0
    while (queue.length > 0) {
        const curSize = queue.length
        for (let i = 0; i < curSize; i++) {
            const cur = queue.shift()!
            if (cur === endGene) {
                return step
            }
            for (const next of isInBank(set, cur)) {
                queue.push(next)
                set.delete(next)
            }
        }
        step++
    }
    return -1
}

export { minMutation }
