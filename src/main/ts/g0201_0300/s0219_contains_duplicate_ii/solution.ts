// #Easy #Array #Hash_Table #Sliding_Window #Top_Interview_150_Hashmap
// #2025_04_12_Time_17_ms_(79.29%)_Space_70.85_MB_(72.75%)

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const s = new Set()
    for (let i = 0, l = nums.length; i < l; i++) {
        if (i > k) {
            s.delete(nums[i - k - 1])
        }
        if (s.has(nums[i])) {
            return true
        }
        s.add(nums[i])
    }
    return false
}

export { containsNearbyDuplicate }
