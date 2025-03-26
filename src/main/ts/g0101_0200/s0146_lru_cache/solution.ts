// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Hash_Table #Design #Linked_List
// #Doubly_Linked_List #Udemy_Linked_List #Top_Interview_150_Linked_List
// #Big_O_Time_O(1)_Space_O(capacity) #2025_03_26_Time_97_ms_(81.52%)_Space_108.56_MB_(48.32%)

interface ICacheNode {
    key: number
    value: number
    prev: ICacheNode | null
    next: ICacheNode | null
}

class CacheNode implements ICacheNode {
    public key: number
    public value: number
    public prev: ICacheNode
    public next: ICacheNode

    constructor(key: number, value: number, prev?: ICacheNode, next?: ICacheNode) {
        this.key = key
        this.value = value
        this.prev = prev ?? null
        this.next = next ?? null
    }
}

class LRUCache {
    private cache = new Map<number, CacheNode>()
    private capacity
    private head = new CacheNode(0, 0)
    private tail = new CacheNode(0, 0)

    constructor(capacity: number) {
        this.capacity = capacity
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    private append(node: CacheNode) {
        const prev = this.tail.prev
        this.tail.prev = node
        node.next = this.tail
        node.prev = prev
        prev.next = node
    }

    private remove(node: CacheNode) {
        const { prev, next } = node
        prev.next = next
        next.prev = prev
        node.next = null
        node.prev = null
        return node
    }

    private promote(node: CacheNode) {
        const removed = this.remove(node)
        this.append(removed)
    }

    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1
        }
        const node = this.cache.get(key)
        this.promote(node)
        return node.value
    }

    put(key: number, value: number): void {
        let node
        if (this.cache.has(key)) {
            node = this.cache.get(key)
            node.value = value
            this.promote(node)
        } else {
            if (this.capacity === this.cache.size) {
                const leastUsed = this.head.next
                this.cache.delete(leastUsed.key)
                this.remove(leastUsed)
            }
            node = new CacheNode(key, value)
            this.append(node)
        }
        this.cache.set(key, node)
    }
}

/*
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache }
