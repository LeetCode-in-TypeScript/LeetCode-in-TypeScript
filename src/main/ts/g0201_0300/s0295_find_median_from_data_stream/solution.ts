// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Sorting #Two_Pointers #Design
// #Heap_Priority_Queue #Data_Stream #Big_O_Time_O(n*log_n)_Space_O(n)
// #2023_10_06_Time_436_ms_(80.67%)_Space_99.3_MB_(36.67%)

class MedianFinder {
    private minHeap = new MinHeap()
    private maxHeap = new MaxHeap()

    addNum(num: number): void {
        if (this.maxHeap.peek() >= num) {
            this.maxHeap.add(num)
        } else {
            this.minHeap.add(num)
        }
        if (Math.abs(this.minHeap.length - this.maxHeap.length) <= 1) {
            return
        }
        if (this.minHeap.length > this.maxHeap.length) {
            this.maxHeap.add(this.minHeap.remove())
        } else {
            this.minHeap.add(this.maxHeap.remove())
        }
    }

    findMedian(): number {
        if (this.minHeap.length === this.maxHeap.length) {
            return (this.minHeap.peek() + this.maxHeap.peek()) / 2
        }
        return this.minHeap.length > this.maxHeap.length ? this.minHeap.peek() : this.maxHeap.peek()
    }
}

class MinHeap {
    private heap: number[]

    constructor() {
        this.heap = []
    }

    public get length(): number {
        return this.heap.length
    }

    public add(value: number): void {
        this.heap.push(value)
        this.siftUp(this.heap.length - 1)
    }

    public peek(): number {
        return this.heap[0]
    }

    public remove(): number {
        const val = this.heap[0]
        const newVal = this.heap.pop()
        if (this.heap.length) {
            this.heap[0] = newVal
            this.siftDown(0, this.heap)
        }
        return val
    }

    private siftDown(idx: number, heap: number[]): void {
        const leftIdx = idx * 2 + 1
        const rightIdx = idx * 2 + 2
        const left = heap[leftIdx] !== undefined ? heap[leftIdx] : Infinity
        const right = heap[rightIdx] !== undefined ? heap[rightIdx] : Infinity
        if (heap[idx] <= left && heap[idx] <= right) {
            return
        }
        if (left < right) {
            ;[heap[idx], heap[leftIdx]] = [heap[leftIdx], heap[idx]]
            this.siftDown(leftIdx, heap)
        } else {
            ;[heap[idx], heap[rightIdx]] = [heap[rightIdx], heap[idx]]
            this.siftDown(rightIdx, heap)
        }
    }

    private siftUp(idx: number): void {
        const parentIdx = Math.floor((idx - 1) / 2)
        if (!idx || this.heap[parentIdx] <= this.heap[idx]) {
            return
        }
        ;[this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
        this.siftUp(parentIdx)
    }
}

class MaxHeap {
    private heap: number[]

    constructor() {
        this.heap = []
    }

    public get length(): number {
        return this.heap.length
    }

    public add(value: number): void {
        this.heap.push(value)
        this.siftUp(this.heap.length - 1)
    }

    public peek(): number {
        return this.heap[0]
    }

    public remove(): number {
        const val = this.heap[0]
        const newVal = this.heap.pop()
        if (this.heap.length) {
            this.heap[0] = newVal
            this.siftDown(0, this.heap)
        }
        return val
    }

    private siftDown(idx: number, heap: number[]): void {
        const leftIdx = idx * 2 + 1
        const rightIdx = idx * 2 + 2
        const left = heap[leftIdx] !== undefined ? heap[leftIdx] : -Infinity
        const right = heap[rightIdx] !== undefined ? heap[rightIdx] : -Infinity
        if (heap[idx] >= left && heap[idx] >= right) {
            return
        }
        if (left > right) {
            ;[heap[idx], heap[leftIdx]] = [heap[leftIdx], heap[idx]]
            this.siftDown(leftIdx, heap)
        } else {
            ;[heap[idx], heap[rightIdx]] = [heap[rightIdx], heap[idx]]
            this.siftDown(rightIdx, heap)
        }
    }

    private siftUp(idx: number): void {
        const parentIdx = Math.floor((idx - 1) / 2)
        if (!idx || this.heap[parentIdx] >= this.heap[idx]) {
            return
        }
        ;[this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
        this.siftUp(parentIdx)
    }
}

/*
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

export { MedianFinder }
