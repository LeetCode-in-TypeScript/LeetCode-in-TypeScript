// #Medium #Top_100_Liked_Questions #Array #Hash_Table #Sorting #Heap_Priority_Queue #Counting
// #Divide_and_Conquer #Quickselect #Bucket_Sort #Data_Structure_II_Day_20_Heap_Priority_Queue
// #Big_O_Time_O(n*log(n))_Space_O(k) #2025_03_28_Time_7_ms_(87.13%)_Space_59.57_MB_(56.27%)

function topKFrequent(nums: number[], k: number): number[] {
    let elementCount = new Array<number[]>(nums.length)
    let hashMap = new Map<number, number>()
    let res: number[] = new Array()
    nums.forEach((num) => {
        if (hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num)! + 1)
        } else {
            hashMap.set(num, 1)
        }
    })
    hashMap.forEach((value, key) => {
        if (elementCount[value] === undefined) elementCount[value] = [key]
        else elementCount[value].push(key)
    })
    for (let i = elementCount.length - 1; i >= 0; i--) {
        if (elementCount[i] !== undefined) res.push(...elementCount[i].values())
        if (res.length === k) {
            return res
        }
    }
    return res
}

export { topKFrequent }
