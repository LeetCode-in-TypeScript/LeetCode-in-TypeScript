// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { addTwoNumbers } from 'src/main/ts/g0001_0100/s0002_add_two_numbers/solution'
import { expect, test } from 'vitest'

test('addTwoNumbers', () => {
    expect(
        addTwoNumbers(
            new ListNode(2, new ListNode(4, new ListNode(3))),
            new ListNode(5, new ListNode(6, new ListNode(4))),
        ),
    ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))))
})

test('addTwoNumbers2', () => {
    expect(new ListNode(7).val).toEqual(7)
})

test('addTwoNumbers3', () => {
    expect(addTwoNumbers(new ListNode(5), new ListNode(5))).toEqual(new ListNode(0, new ListNode(1)))
})
