// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Hash_Table #Linked_List
// #Programming_Skills_II_Day_14 #Udemy_Linked_List #Top_Interview_150_Linked_List
// #Big_O_Time_O(N)_Space_O(N) #2025_03_26_Time_49_ms_(72.42%)_Space_55.82_MB_(59.25%)

import { Node } from '../../com_github_leetcode/node'

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
const copyRandomList = (head: Node | null): Node | null => {
    const sentinel = new Node(-1)
    sentinel.next = head
    const newSentinel = new Node(-1)
    const map = new Map<Node, Node>()
    // create new nodes with relations map to old nodes
    let cursor: Node | null = head
    let newCursor: Node | null = newSentinel
    while (cursor !== null) {
        const newNode: Node = map.get(cursor) ?? new Node(cursor.val)
        map.set(cursor, newNode)
        newCursor.next = newNode
        newCursor = newCursor.next
        cursor = cursor.next
    }
    // using map connect random pointers
    cursor = head
    newCursor = newSentinel.next
    while (cursor !== null && newCursor !== null) {
        if (cursor.random !== null) {
            const targetNode = map.get(cursor.random)
            if (targetNode !== undefined) {
                newCursor.random = targetNode
            }
        }
        newCursor = newCursor.next
        cursor = cursor.next
    }
    return newSentinel.next
}

export { copyRandomList }
