// tslint:disable:no-magic-numbers
import { strStr } from 'src/main/ts/g0001_0100/s0028_find_the_index_of_the_first_occurrence_in_a_string/solution'
import { expect, test } from 'vitest'

test('strStr', () => {
    expect(strStr("sadbutsad", "sad")).toEqual(0)
})

test('strStr2', () => {
    expect(strStr("leetcode", "leeto")).toEqual(-1)
})
