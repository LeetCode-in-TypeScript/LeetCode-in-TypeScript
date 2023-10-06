// tslint:disable:no-magic-numbers
import { LRUCache } from 'src/main/ts/g0101_0200/s0146_lru_cache/solution'
import { expect, test } from 'vitest'

test('lRUCache', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 1)
    lRUCache.put(2, 2)
    expect(lRUCache.get(1)).toEqual(1)
    lRUCache.put(3, 3)
    expect(lRUCache.get(2)).toEqual(-1)
    lRUCache.put(4, 4)
    expect(lRUCache.get(1)).toEqual(-1)
    expect(lRUCache.get(3)).toEqual(3)
    expect(lRUCache.get(3)).toEqual(3)
})
