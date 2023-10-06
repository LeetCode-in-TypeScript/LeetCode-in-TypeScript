// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Sorting #Two_Pointers #Design
// #Heap_Priority_Queue #Data_Stream #Big_O_Time_O(n*log_n)_Space_O(n)
// #2023_10_06_Time_426_ms_(85.33%)_Space_98.1_MB_(48.67%)

class MaxHeap<T> {
    private heap: T[]

    constructor() {
        this.heap = []
    }

    size(): number {
        return this.heap.length
    }

    isEmpty(): boolean {
        return this.heap.length === 0
    }

    peek(): T {
        return this.heap[0]
    }

    add(value: T): void {
        this.heap.push(value)
        this.heapifyUp()
    }

    poll(): T {
        const max = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last
            this.heapifyDown()
        }
        return max
    }

    private heapifyUp(): void {
        let currentIndex = this.heap.length - 1
        while (this.hasParent(currentIndex) && this.parent(currentIndex) < this.heap[currentIndex]) {
            const parentIndex = this.getParentIndex(currentIndex)
            this.swap(parentIndex, currentIndex)
            currentIndex = parentIndex
        }
    }

    private heapifyDown(): void {
        let currentIndex = 0
        while (this.hasLeftChild(currentIndex)) {
            let biggerChildIndex = this.getLeftChildIndex(currentIndex)
            if (this.hasRightChild(currentIndex) && this.rightChild(currentIndex) > this.leftChild(currentIndex)) {
                biggerChildIndex = this.getRightChildIndex(currentIndex)
            }

            if (this.heap[currentIndex] > this.heap[biggerChildIndex]) {
                break
            }

            this.swap(currentIndex, biggerChildIndex)
            currentIndex = biggerChildIndex
        }
    }

    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length
    }

    private parent(index: number): T {
        return this.heap[this.getParentIndex(index)]
    }

    private leftChild(index: number): T {
        return this.heap[this.getLeftChildIndex(index)]
    }

    private rightChild(index: number): T {
        return this.heap[this.getRightChildIndex(index)]
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private getLeftChildIndex(index: number): number {
        return index * 2 + 1
    }

    private getRightChildIndex(index: number): number {
        return index * 2 + 2
    }

    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
}

class MinHeap<T> {
    private heap: T[]

    constructor() {
        this.heap = []
    }

    size(): number {
        return this.heap.length
    }

    isEmpty(): boolean {
        return this.heap.length === 0
    }

    peek(): T {
        return this.heap[0]
    }

    add(value: T): void {
        this.heap.push(value)
        this.heapifyUp()
    }

    poll(): T {
        const min = this.heap[0]
        const last = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = last
            this.heapifyDown()
        }
        return min
    }

    private heapifyUp(): void {
        let currentIndex = this.heap.length - 1
        while (this.hasParent(currentIndex) && this.parent(currentIndex) > this.heap[currentIndex]) {
            const parentIndex = this.getParentIndex(currentIndex)
            this.swap(parentIndex, currentIndex)
            currentIndex = parentIndex
        }
    }

    private heapifyDown(): void {
        let currentIndex = 0
        while (this.hasLeftChild(currentIndex)) {
            let smallerChildIndex = this.getLeftChildIndex(currentIndex)
            if (this.hasRightChild(currentIndex) && this.rightChild(currentIndex) < this.leftChild(currentIndex)) {
                smallerChildIndex = this.getRightChildIndex(currentIndex)
            }

            if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
                break
            }

            this.swap(currentIndex, smallerChildIndex)
            currentIndex = smallerChildIndex
        }
    }

    private hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0
    }

    private hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length
    }

    private hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length
    }

    private parent(index: number): T {
        return this.heap[this.getParentIndex(index)]
    }

    private leftChild(index: number): T {
        return this.heap[this.getLeftChildIndex(index)]
    }

    private rightChild(index: number): T {
        return this.heap[this.getRightChildIndex(index)]
    }

    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private getLeftChildIndex(index: number): number {
        return index * 2 + 1
    }

    private getRightChildIndex(index: number): number {
        return index * 2 + 2
    }

    private swap(index1: number, index2: number): void {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
}

class MedianFinder {
    private maxHeap: MaxHeap<number>
    private minHeap: MinHeap<number>

    constructor() {
        this.maxHeap = new MaxHeap<number>()
        this.minHeap = new MinHeap<number>()
    }

    addNum(num: number): void {
        if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
            this.maxHeap.add(num)
        } else {
            this.minHeap.add(num)
        }

        if (this.maxHeap.size() - this.minHeap.size() > 1) {
            this.minHeap.add(this.maxHeap.poll())
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.add(this.minHeap.poll())
        }
    }

    findMedian(): number {
        if (this.maxHeap.size() === this.minHeap.size()) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2
        } else {
            return this.maxHeap.size() > this.minHeap.size() ? this.maxHeap.peek() : this.minHeap.peek()
        }
    }
}

/*
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

export { MedianFinder }
