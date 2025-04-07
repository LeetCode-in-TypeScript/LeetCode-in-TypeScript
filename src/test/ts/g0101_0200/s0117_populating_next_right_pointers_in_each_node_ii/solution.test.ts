// tslint:disable:no-magic-numbers
import { _Node } from 'src/main/ts/com_github_leetcode/_node'
import { connect } from 'src/main/ts/g0101_0200/s0117_populating_next_right_pointers_in_each_node_ii/solution'
import { expect, test } from 'vitest'

test('connect', () => {
    expect(connect(null)).toBeNull()
})

test('connect2', () => {
    const node = new _Node(
        1,
        new _Node(2, new _Node(4), new _Node(5), null),
        new _Node(3, null, new _Node(7), null),
        null,
    )

    const node7 = new _Node(7)
    const node3 = new _Node(3, null, node7, null)
    const node5 = new _Node(5, null, null, node7)
    const node4 = new _Node(4, null, null, node5)
    const node2 = new _Node(2, node4, node5, node3)
    const node1 = new _Node(1, node2, node3, null)

    expect(connect(node)).toEqual(node1)
})

test('connect3', () => {
    const node = new _Node(
        1,
        new _Node(2, new _Node(4, new _Node(7), null, null), new _Node(5), null),
        new _Node(3, null, new _Node(6, null, new _Node(8), null), null),
        null,
    )

    // Creating expected output tree with connections
    const node8 = new _Node(8, null, null, null)
    const node7 = new _Node(7, null, null, node8)
    const node6 = new _Node(6, null, node8, null)
    const node3 = new _Node(3, null, node6, null)
    const node5 = new _Node(5, null, null, node6)
    const node4 = new _Node(4, node7, null, node5)
    const node2 = new _Node(2, node4, node5, node3)
    const node1 = new _Node(1, node2, node3, null)

    // Connect nodes and compare
    expect(connect(node)).toEqual(node1)
})
