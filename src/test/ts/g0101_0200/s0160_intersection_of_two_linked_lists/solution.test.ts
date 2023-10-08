// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { getIntersectionNode } from 'src/main/ts/g0101_0200/s0160_intersection_of_two_linked_lists/solution'
import { expect, test } from 'vitest'

test('getIntersectionNode', () => {
    const intersectionListNode = new ListNode(8, new ListNode(4, new ListNode(5)))
    const nodeA = new ListNode(4, new ListNode(1, intersectionListNode))
    const nodeB = new ListNode(5, new ListNode(6, new ListNode(1, intersectionListNode)))
    expect(getIntersectionNode(nodeA, nodeB)?.val).toEqual(8)
})

test('getIntersectionNode2', () => {
    const nodeA = new ListNode(4, new ListNode(1, new ListNode(2)))
    const nodeB = new ListNode(5, new ListNode(6, new ListNode(1, new ListNode(2))))
    expect(getIntersectionNode(nodeA, nodeB)).toEqual(null)
})
