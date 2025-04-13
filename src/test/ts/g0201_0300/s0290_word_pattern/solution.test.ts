// tslint:disable:no-magic-numbers
import { wordPattern } from 'src/main/ts/g0201_0300/s0290_word_pattern/solution'
import { expect, test } from 'vitest'

test('wordPattern', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toEqual(true)
})

test('wordPattern2', () => {
    expect(wordPattern('abba', 'dog cat cat fish')).toEqual(false)
})

test('wordPattern3', () => {
    expect(wordPattern('aaaa', 'dog cat cat dog')).toEqual(false)
})

test('wordPattern4', () => {
    expect(wordPattern('a', 'dog cat')).toEqual(false)
})

test('wordPattern5', () => {
    expect(wordPattern('a', 'dog')).toEqual(true)
})

test('wordPattern6', () => {
    expect(wordPattern('ab', 'dog dog')).toEqual(false)
})
