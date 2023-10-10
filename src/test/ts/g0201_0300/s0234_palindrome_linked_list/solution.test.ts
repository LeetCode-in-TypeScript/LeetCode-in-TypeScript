// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { isPalindrome } from 'src/main/ts/g0201_0300/s0234_palindrome_linked_list/solution'
import { expect, test } from 'vitest'

test('isPalindrome', () => {
    const headActual = new ListNode(1)
    headActual.next = new ListNode(2)
    headActual.next.next = new ListNode(2)
    headActual.next.next.next = new ListNode(1)
    expect(isPalindrome(headActual)).toEqual(true)
})

test('isPalindrome2', () => {
    const headActual = new ListNode(1)
    headActual.next = new ListNode(2)
    expect(isPalindrome(headActual)).toEqual(false)
})
