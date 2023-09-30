// tslint:disable:no-magic-numbers
import { groupAnagrams } from 'src/main/ts/g0001_0100/s0049_group_anagrams/solution'
import { expect, test } from 'vitest'

test('groupAnagrams', () => {
    expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
        ['bat'],
        ['tan', 'nat'],
        ['eat', 'tea', 'ate'],
    ])
})

test('groupAnagrams2', () => {
    expect(groupAnagrams([''])).toEqual([['']])
})

test('groupAnagrams3', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']])
})
