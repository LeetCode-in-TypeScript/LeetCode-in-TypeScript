// tslint:disable:no-magic-numbers
import { RandomizedSet } from 'src/main/ts/g0301_0400/s0380_insert_delete_getrandom_o1/solution'
import { expect, test } from 'vitest'

test('randomizedSet', () => {
    const result: string[] = []
    let randomizedSet: RandomizedSet | null = null
    result.push(randomizedSet + "")
    randomizedSet = new RandomizedSet()
    result.push(randomizedSet.insert(1) + "")
    result.push(randomizedSet.remove(2) + "")
    result.push(randomizedSet.insert(2) + "")
    const random = randomizedSet.getRandom()
    result.push(random + "")
    result.push(randomizedSet.remove(1) + "")
    result.push(randomizedSet.insert(2) + "")
    result.push(randomizedSet.getRandom() + "")
    const expected = ["null", "true", "false", "true", "1", "true", "false", "2"]
    const expected2 = ["null", "true", "false", "true", "2", "true", "false", "2"]
    if (random === 1) {
        expect(result).toEqual(expected)
    } else {
        expect(result).toEqual(expected2)
    }
})
