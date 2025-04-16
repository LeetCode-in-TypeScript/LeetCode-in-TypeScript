// #Medium #Array #Hash_Table #Math #Design #Randomized #Programming_Skills_II_Day_20
// #Top_Interview_150_Array/String #2025_04_16_Time_73_ms_(82.52%)_Space_106.13_MB_(72.14%)

class RandomizedSet {
    private rand: () => number
    private list: number[]
    private map: Map<number, number>

    constructor() {
        this.rand = () => Math.floor(Math.random() * this.list.length) // NOSONAR
        this.list = []
        this.map = new Map()
    }

    insert(val: number): boolean {
        if (this.map.has(val)) {
            return false
        }
        this.map.set(val, this.list.length)
        this.list.push(val)
        return true
    }

    remove(val: number): boolean {
        if (!this.map.has(val)) {
            return false
        }
        const swap1 = this.map.get(val)!
        const swap2 = this.list.length - 1
        const val2 = this.list[swap2]
        this.map.set(val2, swap1)
        this.map.delete(val)
        this.list[swap1] = val2
        this.list.pop()
        return true
    }

    getRandom(): number {
        return this.list[this.rand()]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export { RandomizedSet }
