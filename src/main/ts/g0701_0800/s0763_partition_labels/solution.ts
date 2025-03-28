// #Medium #String #Hash_Table #Greedy #Two_Pointers #Data_Structure_II_Day_7_String
// #Big_O_Time_O(n)_Space_O(1) #2025_03_28_Time_4_ms_(86.89%)_Space_58.06_MB_(34.43%)

function partitionLabels(s: string): number[] {
    const map = new Map<string, [number, number]>()
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        if (!map.has(c)) map.set(c, [i, i])
        else map.get(c)[1] = i
    }
    const arr = Array.from(map.values())
    arr.sort((v1, v2) => v1[0] - v2[0])
    let start = 0,
        end = arr[0][1],
        result: number[] = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] < end) end = Math.max(end, arr[i][1])
        else {
            result.push(end - start + 1)
            start = arr[i][0]
            end = arr[i][1]
        }
    }
    result.push(end - start + 1)
    return result
}

export { partitionLabels }
