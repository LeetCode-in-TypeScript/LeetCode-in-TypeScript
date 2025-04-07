// #Medium #Top_Interview_Questions #Array #Greedy #Top_Interview_150_Array/String
// #2025_04_07_Time_0_ms_(100.00%)_Space_66.31_MB_(63.11%)

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let index = 0
    let total = 0
    let current = 0
    for (let i = 0; i < gas.length; i++) {
        const balance = gas[i] - cost[i]
        total += balance
        current += balance
        if (current < 0) {
            index = i + 1
            current = 0
        }
    }
    return total >= 0 ? index : -1
}

export { canCompleteCircuit }
