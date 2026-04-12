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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let arr = [];

        let curr1 = list1;
        while(curr1 !== null) {
            arr.push(curr1.val);
            curr1 = curr1.next;
        }

        let curr2 = list2;

        while(curr2 !== null) {
            arr.push(curr2.val);
            curr2 = curr2.next;
        }


        if(arr.length === 0 ) return null;

        arr.sort((a, b) => a - b);

        let head = new ListNode(arr[0]);
        let curr3 = head;

        for(let i = 1; i < arr.length; i++) {
            let node = new ListNode(arr[i]);
            curr3.next = node
            curr3 = curr3.next;
        }

        return head;
    }
}
