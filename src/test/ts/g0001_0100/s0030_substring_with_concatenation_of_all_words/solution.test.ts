// tslint:disable:no-magic-numbers
import { findSubstring } from 'src/main/ts/g0001_0100/s0030_substring_with_concatenation_of_all_words/solution'
import { expect, test } from 'vitest'

test('findSubstring', () => {
    expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})

test('findSubstring2', () => {
    expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})

test('findSubstring3', () => {
    expect(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toEqual([6, 9, 12])
})
