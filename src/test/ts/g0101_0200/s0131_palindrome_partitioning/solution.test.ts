// tslint:disable:no-magic-numbers
import { partition } from 'src/main/ts/g0101_0200/s0131_palindrome_partitioning/solution'
import { expect, test } from 'vitest'

test('partition', () => {
    expect(partition('aab')).toEqual([
        ['a', 'a', 'b'],
        ['aa', 'b'],
    ])
})

test('partition2', () => {
    expect(partition('a')).toEqual([['a']])
})
