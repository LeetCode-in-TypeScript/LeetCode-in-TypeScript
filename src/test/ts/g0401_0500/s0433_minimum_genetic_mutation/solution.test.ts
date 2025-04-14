// tslint:disable:no-magic-numbers
import { minMutation } from 'src/main/ts/g0401_0500/s0433_minimum_genetic_mutation/solution'
import { expect, test } from 'vitest'

test('minMutation', () => {
    expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])).toEqual(1)
})

test('minMutation2', () => {
    expect(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])).toEqual(2)
})
