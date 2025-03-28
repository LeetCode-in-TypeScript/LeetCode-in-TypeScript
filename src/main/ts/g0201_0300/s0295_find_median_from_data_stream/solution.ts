// #Hard #Top_100_Liked_Questions #Sorting #Two_Pointers #Design #Heap_Priority_Queue #Data_Stream
// #Top_Interview_150_Heap #Big_O_Time_O(n*log_n)_Space_O(n)
// #2025_03_28_Time_106_ms_(92.31%)_Space_94.21_MB_(5.43%)

class Heap {
    private heap: number[]

    constructor() {
        this.heap = [0]
    }

    peek(): number | null {
        return this.heap[1] ?? null
    }

    push(val: number): void {
        this.heap.push(val)
        let i = this.heap.length - 1
        let parI = Math.floor(i / 2)
        while (i > 1 && this.heap[i] < this.heap[parI]) {
            const tmp = this.heap[i]
            this.heap[i] = this.heap[parI]
            this.heap[parI] = tmp
            i = parI
            parI = Math.floor(i / 2)
        }
    }

    pop(): number | null {
        if (this.heap.length == 1) {
            return null
        }
        if (this.heap.length == 2) {
            return this.heap.pop()
        }
        const res = this.heap[1]
        this.heap[1] = this.heap.pop()
        let i = 1
        while (2 * i < this.heap.length) {
            const leftChildIdx = 2 * i
            const rightChildIdx = 2 * i + 1
            if (
                rightChildIdx < this.heap.length &&
                this.heap[rightChildIdx] < this.heap[leftChildIdx] &&
                this.heap[i] > this.heap[rightChildIdx]
            ) {
                const tmp = this.heap[i]
                this.heap[i] = this.heap[rightChildIdx]
                this.heap[rightChildIdx] = tmp
                i = rightChildIdx
            } else if (this.heap[i] > this.heap[leftChildIdx]) {
                const tmp = this.heap[i]
                this.heap[i] = this.heap[leftChildIdx]
                this.heap[leftChildIdx] = tmp
                i = leftChildIdx
            } else {
                break
            }
        }
        return res
    }

    length(): number {
        return this.heap.length - 1
    }
}

class MedianFinder {
    large: Heap
    small: Heap

    constructor() {
        this.large = new Heap()
        this.small = new Heap()
    }

    addNum(num: number): void {
        if (this.small.length() === this.large.length()) {
            this.small.push(-num)
            this.large.push(-this.small.pop())
        } else {
            this.large.push(num)
            this.small.push(-this.large.pop())
        }
    }

    findMedian(): number {
        if (this.small.length() === this.large.length()) {
            return (this.large.peek() - this.small.peek()) / 2
        }
        return this.large.peek()
    }
}

/*
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

export { MedianFinder }
