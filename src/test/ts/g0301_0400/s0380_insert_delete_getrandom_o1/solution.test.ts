// tslint:disable:no-magic-numbers
import { RandomizedSet } from 'src/main/ts/g0301_0400/s0380_insert_delete_getrandom_o1/solution'
import { expect, test } from 'vitest'

test('randomizedSet', () => {
    let randomizedSet: RandomizedSet = new RandomizedSet()

    const result = [
        null,
        randomizedSet.insert(1),
        randomizedSet.remove(2),
        randomizedSet.insert(2),
        randomizedSet.getRandom(),
        randomizedSet.remove(1),
        randomizedSet.insert(2),
        randomizedSet.getRandom(),
    ].map(String)

    const random = Number(result[4])

    const expected1 = ['null', 'true', 'false', 'true', '1', 'true', 'false', '2']
    const expected2 = ['null', 'true', 'false', 'true', '2', 'true', 'false', '2']

    expect(result).toEqual(random === 1 ? expected1 : expected2)
})

