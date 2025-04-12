// tslint:disable:no-magic-numbers
import { WordDictionary } from 'src/main/ts/g0201_0300/s0211_design_add_and_search_words_data_structure/solution'
import { expect, test } from 'vitest'

test('wordDictionary', () => {
    const wordDictionary = new WordDictionary()
    wordDictionary.addWord('bad')
    wordDictionary.addWord('dad')
    wordDictionary.addWord('mad')
    expect(wordDictionary.search('pad')).toBeFalsy()
    expect(wordDictionary.search('bad')).toBeTruthy()
    expect(wordDictionary.search('.ad')).toBeTruthy()
    expect(wordDictionary.search('b..')).toBeTruthy()
})
