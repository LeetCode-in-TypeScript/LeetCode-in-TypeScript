class ListNode {
    public val: number | null
    public next: ListNode | null

    constructor(val?: number | null, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export { ListNode }
