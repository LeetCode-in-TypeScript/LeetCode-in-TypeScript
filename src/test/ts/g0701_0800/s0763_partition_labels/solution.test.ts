// tslint:disable:no-magic-numbers
import { partitionLabels } from 'src/main/ts/g0701_0800/s0763_partition_labels/solution'
import { expect, test } from 'vitest'

test('partitionLabels', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8])
})

test('partitionLabels2', () => {
    expect(partitionLabels('eccbbbbdec')).toEqual([10])
})
