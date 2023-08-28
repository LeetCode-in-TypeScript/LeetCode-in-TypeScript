import { ListNode } from '../../../../main/ts/com_github_leetcode/listnode'

function constructLinkedList(nums: number[]): ListNode | null {
        if (!nums || nums.length === 0) {
            return null;
        }
        const pre = new ListNode(-1);
        let head = new ListNode(nums[0]);
        pre.next = head;
        for (let i = 1; i < nums.length; i++) {
            head.next = new ListNode(nums[i]);
            head = head.next;
        }
        return pre.next;
    }

export { constructLinkedList }
