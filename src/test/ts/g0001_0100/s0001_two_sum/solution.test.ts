// tslint:disable:no-magic-numbers
import { twoSum } from 'src/main/ts/g0001_0100/s0001_two_sum/solution';
import { describe, expect, test } from 'vitest';

describe('two_sum', () => {
  const cases = [
    [[1, 2, 3, 4, 5], 9, [3, 4]],
    [[1, 1, 1, 1, 1], 3, undefined],
    [[1, 2, 3, 4, 5], 0, undefined],
  ];
  test.each(cases)('twoSum(%s, %i) should be %s', (params1, params2, expected) => {
    expect(twoSum(params1 as number[], params2 as number)).toStrictEqual(expected);
  });
});
