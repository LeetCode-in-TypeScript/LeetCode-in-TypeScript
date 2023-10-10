// tslint:disable:no-magic-numbers
import { Trie } from 'src/main/ts/g0201_0300/s0208_implement_trie_prefix_tree/solution'
import { expect, test } from 'vitest'

test('trie', () => {
    const trie = new Trie()
    trie.insert('apple')
    expect(trie.search('apple')).toEqual(true)
    expect(trie.search('app')).toEqual(false)
    expect(trie.startsWith('app')).toEqual(true)
    trie.insert('app')
    expect(trie.search('app')).toEqual(true)
})
