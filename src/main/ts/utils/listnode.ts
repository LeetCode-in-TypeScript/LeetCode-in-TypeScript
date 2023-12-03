class ListNode {
    public val: number | null
    public next: ListNode | null

    constructor(val?: number | null, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }

    public toString = (): string => {
        let result = `${this.val}`
        let current: ListNode | null = this.next
        while (current !== null) {
            result += `, ${current.val}`
            current = current.next
        }
        return result
    }
}

export { ListNode }
