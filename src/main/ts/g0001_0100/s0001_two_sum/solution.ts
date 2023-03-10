// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table
// #Data_Structure_I_Day_2_Array #Level_1_Day_13_Hashmap #Udemy_Arrays
// #2023_03_10_Time_66_ms_(93.20%)_Space_45.6_MB_(23.43%)

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
