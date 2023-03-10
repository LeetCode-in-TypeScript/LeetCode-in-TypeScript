interface ITemp {
  [key: number]: number;
}

function twoSum(nums: number[], target: number): number[] {
  const temp: ITemp = {};
  for (let i = 0; i < nums.length; i++) {
    const tag = target - nums[i];
    if (temp[tag] >= 0) {
      return [temp[tag], i];
    }
    temp[nums[i]] = i;
  }
}

export { twoSum };
