// #Medium #Top_Interview_Questions #Depth_First_Search #Breadth_First_Search #Graph
// #Topological_Sort #Level_2_Day_11_Graph/BFS/DFS #Top_Interview_150_Graph_General
// #2025_04_12_Time_2_ms_(99.76%)_Space_58.61_MB_(86.54%)

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    let sortedOrder: number[] = []
    if (numCourses < 0) {
        return sortedOrder
    }
    let inDegree = new Array(numCourses).fill(0),
        graph = new Array(numCourses).fill(0).map(() => new Array()),
        source = new Array<number>()
    prerequisites.forEach((course: number[]) => {
        graph[course[1]].push(course[0])
        inDegree[course[0]]++
    })
    inDegree.forEach((value: number, index: number) => {
        if (value === 0) {
            source.push(index)
        }
    })
    while (source.length > 0) {
        const course = source.shift()
        if (course === undefined) break
        sortedOrder.push(course)
        graph[course].forEach((val) => {
            inDegree[val]--
            if (inDegree[val] === 0) {
                source.push(val)
            }
        })
    }
    return sortedOrder.length === numCourses ? sortedOrder : []
}

export { findOrder }
