// tslint:disable:no-magic-numbers
import { Node } from 'src/main/ts/com_github_leetcode/node'
import { copyRandomList } from 'src/main/ts/g0101_0200/s0138_copy_list_with_random_pointer/solution'
import { expect, test } from 'vitest'

test('copyRandomList', () => {
    const node7 = new Node(7)
    const node13 = new Node(13)
    const node11 = new Node(11)
    const node10 = new Node(10)
    const node1 = new Node(1)
    node7.next = node13
    node13.next = node11
    node11.next = node10
    node10.next = node1
    node1.next = null
    node7.random = null
    node13.random = node7
    node11.random = node1
    node10.random = node11
    node1.random = node7
    expect(copyRandomList(node7)?.toString()).toEqual('[[7,null],[13,0],[11,4],[10,2],[1,0]]')
})

test('copyRandomList2', () => {
    const node1 = new Node(1)
    const node2 = new Node(2)
    node1.next = node2
    node1.random = node1
    node2.next = null
    node2.random = node2
    expect(copyRandomList(node1)?.toString()).toEqual('[[1,0],[2,1]]')
})

test('copyRandomList3', () => {
    const node31 = new Node(3)
    const node32 = new Node(3)
    const node33 = new Node(3)
    node31.next = node32
    node31.random = null
    node32.next = node33
    node32.random = node31
    node33.next = null
    node33.random = null
    expect(copyRandomList(node31)?.toString()).toEqual('[[3,null],[3,0],[3,null]]')
})
