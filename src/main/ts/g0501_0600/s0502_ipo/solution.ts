// #Hard #Array #Sorting #Greedy #Heap_Priority_Queue #Top_Interview_150_Heap
// #2025_04_15_Time_193_ms_(89.19%)_Space_102.47_MB_(8.11%)

class MaxHeap {
    private heap: number[]

    constructor() {
        this.heap = []
    }

    push(value: number) {
        this.heap.push(value)
        this.heapifyUp()
    }

    pop(): number | undefined {
        if (this.heap.length === 0) {
            return undefined
        }
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        const max = this.heap[0]
        this.heap[0] = this.heap.pop()!
        this.heapifyDown()
        return max
    }

    isEmpty(): boolean {
        return this.heap.length === 0
    }

    private heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] >= this.heap[index]) {
                break
            }
            ;[this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
            index = parentIndex
        }
    }

    private heapifyDown() {
        let index = 0
        while (true) {
            let left = 2 * index + 1
            let right = 2 * index + 2
            let largest = index
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right
            }
            if (largest === index) {
                break
            }
            ;[this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
            index = largest
        }
    }
}

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    let projects: [number, number][] = []
    const n = profits.length
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]])
    }
    projects.sort((a, b) => a[0] - b[0])
    const maxHeap = new MaxHeap()
    let i = 0
    while (k--) {
        while (i < n && projects[i][0] <= w) {
            maxHeap.push(projects[i][1])
            i++
        }
        if (maxHeap.isEmpty()) {
            break
        }
        w += maxHeap.pop()!
    }
    return w
}

export { findMaximizedCapital }
