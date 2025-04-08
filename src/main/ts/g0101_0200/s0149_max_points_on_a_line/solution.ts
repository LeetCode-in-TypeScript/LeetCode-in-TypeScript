// #Hard #Top_Interview_Questions #Array #Hash_Table #Math #Geometry #Algorithm_II_Day_21_Others
// #Top_Interview_150_Math #2025_04_08_Time_9_ms_(97.18%)_Space_61.36_MB_(70.42%)

function maxPoints(points: number[][]): number {
    if (points.length <= 2) {
        return points.length
    }
    const map = new Map<number, number>()
    let result: number = 0
    for (let i = 0; i < points.length; i++) {
        const [x0, y0] = points[i]
        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[j]
            let m: number
            if (x0 === x1) {
                m = Number.MAX_VALUE
            } else if (y0 === y1) {
                m = 0
            } else {
                m = (y0 - y1) / (x0 - x1)
            }
            const nextM: number = map.has(m) ? map.get(m) + 1 : 2
            map.set(m, nextM)
            result = Math.max(result, nextM)
        }
        map.clear()
    }
    return result
}

export { maxPoints }
