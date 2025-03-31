// #Easy #Array #Two_Pointers #Top_Interview_150_Array/String
// #2025_03_31_Time_0_ms_(100.00%)_Space_56.09_MB_(20.94%)

function removeElement(nums: number[], val: number): number {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let len = nums.length;
    let j = len - 1;
    let occurTimes = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            occurTimes++;
            if (j === i) {
                return len - occurTimes;
            }
            while (nums[j] === val) {
                j--;
                occurTimes++;
                if (j === i) {
                    return len - occurTimes;
                }
            }
            nums[i] = nums[j];
            j--;
        }
        if (i === j) {
            return len - occurTimes;
        }
    }
    return len - occurTimes;
}

export { removeElement }
