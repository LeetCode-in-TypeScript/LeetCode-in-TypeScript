// tslint:disable:no-magic-numbers
import { addTwoNumbers, ListNode } from 'src/main/ts/g0001_0100/s0002_add_two_numbers/solution';
import { describe, expect, test } from 'vitest';

const l11 = new ListNode(6, null);
const l12 = new ListNode(5, l11);
const l13 = new ListNode(1, l12);

describe('add_two_numbers', () => {
  test('should be worked well', () => {
    expect(addTwoNumbers(l13, l13)).toMatchSnapshot();
  });
});
