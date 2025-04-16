// #Medium #Array #Depth_First_Search #Breadth_First_Search #Graph #Union_Find #Shortest_Path
// #LeetCode_75_Graphs/DFS #Top_Interview_150_Graph_General
// #2025_04_16_Time_0_ms_(100.00%)_Space_54.98_MB_(77.31%)

type MapType = Map<string, string>
type RateType = Map<string, number>

function calcEquation(equations: [string, string][], values: number[], queries: [string, string][]): number[] {
    const root: MapType = new Map()
    const rate: RateType = new Map()
    for (const [x, y] of equations) {
        if (!root.has(x)) {
            root.set(x, x)
            rate.set(x, 1.0)
        }
        if (!root.has(y)) {
            root.set(y, y)
            rate.set(y, 1.0)
        }
    }
    for (let i = 0; i < equations.length; ++i) {
        const [x, y] = equations[i]
        union(x, y, values[i], root, rate)
    }
    const result: number[] = []
    for (const [x, y] of queries) {
        if (!root.has(x) || !root.has(y)) {
            result.push(-1.0)
        } else {
            const rootX = findRoot(x, x, 1.0, root, rate)
            const rootY = findRoot(y, y, 1.0, root, rate)
            if (rootX === rootY) {
                result.push(rate.get(x)! / rate.get(y)!)
            } else {
                result.push(-1.0)
            }
        }
    }
    return result
}

function union(x: string, y: string, value: number, root: MapType, rate: RateType): void {
    const rootX = findRoot(x, x, 1.0, root, rate)
    const rootY = findRoot(y, y, 1.0, root, rate)

    if (rootX !== rootY) {
        root.set(rootX, rootY)
        const rateX = rate.get(x)!
        const rateY = rate.get(y)!
        rate.set(rootX, (value * rateY) / rateX)
    }
}

function findRoot(originalX: string, x: string, rateSoFar: number, root: MapType, rate: RateType): string {
    if (root.get(x) === x) {
        root.set(originalX, x)
        rate.set(originalX, rateSoFar * rate.get(x)!)
        return x
    }
    return findRoot(originalX, root.get(x)!, rateSoFar * rate.get(x)!, root, rate)
}

export { calcEquation }
