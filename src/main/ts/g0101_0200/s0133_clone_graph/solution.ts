// #Medium #Hash_Table #Depth_First_Search #Breadth_First_Search #Graph #Udemy_Graph
// #Top_Interview_150_Graph_General #2025_04_16_Time_48_ms_(82.94%)_Space_58.20_MB_(70.18%)

class Node {
    val: number
    neighbors: Node[]

    constructor(val: number = 0, neighbors: Node[] = []) {
        this.val = val
        this.neighbors = neighbors
    }

    toString(): string {
        const result: string[] = []
        for (const node of this.neighbors) {
            if (node.neighbors.length === 0) {
                result.push(node.val.toString())
            } else {
                const result2: string[] = []
                for (const nodeItem of node.neighbors) {
                    result2.push(nodeItem.val.toString())
                }
                result.push(`[${result2.join(',')}]`)
            }
        }
        return `[${result.join(',')}]`
    }
}

function cloneGraph(node: Node | null): Node | null {
    const processedNodes = new Map<Node, Node>()
    return cloneGraphHelper(node, processedNodes)
}

function cloneGraphHelper(node: Node | null, processedNodes: Map<Node, Node>): Node | null {
    if (node === null) {
        return null
    }
    if (processedNodes.has(node)) {
        return processedNodes.get(node)!
    }
    const newNode = new Node(node.val)
    processedNodes.set(node, newNode)
    for (const neighbor of node.neighbors) {
        const clonedNeighbor = cloneGraphHelper(neighbor, processedNodes)
        if (clonedNeighbor !== null) {
            newNode.neighbors.push(clonedNeighbor)
        }
    }
    return newNode
}

export { Node, cloneGraph }
