// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search
// #Breadth_First_Search #Graph #Topological_Sort #Top_Interview_150_Graph_General
// #Big_O_Time_O(N)_Space_O(N) #2023_10_09_Time_68_ms_(70.14%)_Space_47.7_MB_(73.55%)

const WHITE = 0
const GRAY = 1
const BLACK = 2

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adj: number[][] = Array.from({ length: numCourses }, () => [])
    for (const pre of prerequisites) {
        adj[pre[1]].push(pre[0])
    }
    const colors: number[] = new Array(numCourses).fill(WHITE)
    for (let i = 0; i < numCourses; i++) {
        if (colors[i] === WHITE && adj[i].length > 0 && hasCycle(adj, i, colors)) {
            return false
        }
    }
    return true
}

function hasCycle(adj: number[][], node: number, colors: number[]): boolean {
    colors[node] = GRAY
    for (const nei of adj[node]) {
        if (colors[nei] === GRAY) {
            return true
        }

        if (colors[nei] === WHITE && hasCycle(adj, nei, colors)) {
            return true
        }
    }
    colors[node] = BLACK
    return false
}

export { canFinish }
