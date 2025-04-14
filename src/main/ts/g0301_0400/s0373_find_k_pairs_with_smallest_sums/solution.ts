// #Medium #Array #Heap_Priority_Queue #Top_Interview_150_Heap
// #2025_04_14_Time_42_ms_(85.15%)_Space_85.10_MB_(76.24%)

class MinHeap {
    private heap: { sum: number; i: number; j: number }[]

    constructor() {
        this.heap = []
    }

    push(val: { sum: number; i: number; j: number }) {
        this.heap.push(val)
        this.bubbleUp()
    }

    pop(): { sum: number; i: number; j: number } | undefined {
        if (this.heap.length === 0) {
            return undefined
        }
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        const min = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.bubbleDown()
        return min
    }

    isEmpty(): boolean {
        return this.heap.length === 0
    }

    private bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex].sum <= this.heap[index].sum) {
                break
            }
            ;[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }

    private bubbleDown() {
        let index = 0
        let length = this.heap.length
        while (true) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let smallest = index
            if (leftChildIndex < length && this.heap[leftChildIndex].sum < this.heap[smallest].sum) {
                smallest = leftChildIndex
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].sum < this.heap[smallest].sum) {
                smallest = rightChildIndex
            }
            if (smallest === index) {
                break
            }
            ;[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
            index = smallest
        }
    }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    let ans: number[][] = []
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return ans
    }
    let minHeap = new MinHeap()
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeap.push({ sum: nums1[i] + nums2[0], i, j: 0 })
    }
    while (k-- > 0 && !minHeap.isEmpty()) {
        let { i, j } = minHeap.pop()!
        ans.push([nums1[i], nums2[j]])
        if (j + 1 < nums2.length) {
            minHeap.push({ sum: nums1[i] + nums2[j + 1], i, j: j + 1 })
        }
    }
    return ans
}

export { kSmallestPairs }
