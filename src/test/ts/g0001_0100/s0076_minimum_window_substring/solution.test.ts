// tslint:disable:no-magic-numbers
import { minWindow } from 'src/main/ts/g0001_0100/s0076_minimum_window_substring/solution'
import { expect, test } from 'vitest'

test('minWindow', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC')
})

test('minWindow2', () => {
    expect(minWindow('a', 'a')).toEqual('a')
})

test('minWindow3', () => {
    expect(minWindow('a', 'aa')).toEqual('')
})
