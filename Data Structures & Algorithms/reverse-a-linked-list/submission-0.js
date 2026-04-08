/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let arr = [];
        let curr = head;

        while(curr !== null) {
            arr.push(curr.val);
            curr = curr.next;
        }

        if(arr.length === 0) return null;

        arr.reverse();

        const firstNode = new ListNode(arr[0]);
        let tracker = firstNode; 

        for(let i = 1; i < arr.length; i++) {
            tracker.next = new ListNode(arr[i]);
            tracker = tracker.next;
            
        }

        return firstNode;
    }
}
