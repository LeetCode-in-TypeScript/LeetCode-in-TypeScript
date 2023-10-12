// tslint:disable:no-magic-numbers
import { findAnagrams } from 'src/main/ts/g0401_0500/s0438_find_all_anagrams_in_a_string/solution'
import { expect, test } from 'vitest'

test('findAnagrams', () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6])
})

test('findAnagrams2', () => {
    expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2])
})
