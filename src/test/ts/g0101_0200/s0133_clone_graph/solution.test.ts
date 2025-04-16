// tslint:disable:no-magic-numbers
import { Node, cloneGraph } from 'src/main/ts/g0101_0200/s0133_clone_graph/solution'
import { expect, test } from 'vitest'

test('cloneGraph', () => {
    const node1 = new Node(1)
    const node2 = new Node(2)
    const node3 = new Node(3)
    const node4 = new Node(4)
    node1.neighbors = [node2, node4]
    node2.neighbors = [node1, node3]
    node3.neighbors = [node2, node4]
    node4.neighbors = [node1, node3]
    const clonedNode1 = cloneGraph(node1)
    expect(clonedNode1?.toString()).toEqual('[[1,3],[1,3]]')
})

test('cloneGraph2', () => {
    const node1 = new Node(1)
    const clonedNode1 = cloneGraph(node1)
    expect(clonedNode1?.toString()).toEqual('[]')
})
