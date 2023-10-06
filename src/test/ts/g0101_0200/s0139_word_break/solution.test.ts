// tslint:disable:no-magic-numbers
import { wordBreak } from 'src/main/ts/g0101_0200/s0139_word_break/solution'
import { expect, test } from 'vitest'

test('wordBreak', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toEqual(true)
})

test('wordBreak2', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toEqual(true)
})

test('wordBreak3', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual(false)
})
