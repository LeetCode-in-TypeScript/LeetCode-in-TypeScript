// tslint:disable:no-magic-numbers
import { rotateRight } from 'src/main/ts/g0001_0100/s0061_rotate_list/solution'
import { expect, test } from 'vitest'
import { constructLinkedList } from '../../com_github_leetcode/linkedlistutils'

test('rotateRight', () => {
    expect(rotateRight(constructLinkedList([1, 2, 3, 4, 5]), 2).toString()).toEqual('4, 5, 1, 2, 3')
})

test('rotateRight2', () => {
    expect(rotateRight(constructLinkedList([0, 1, 2]), 4).toString()).toEqual('2, 0, 1')
})
