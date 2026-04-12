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
        let mergedListHead = new ListNode();
        let mergedListCurrent = mergedListHead;

        while(list1 !== null && list2 !== null) {
            let mergedListNode  = new ListNode();
            if(list1.val <= list2.val) {
                mergedListNode.val = list1.val;
                list1 = list1.next;
            } else if(list1.val > list2.val) {
                mergedListNode.val = list2.val;
                list2 = list2.next;
            }
            mergedListCurrent.next = mergedListNode;
            mergedListCurrent = mergedListCurrent.next;
        }

        if(list1 === null) {
            mergedListCurrent.next = list2;
        } else if(list2 === null) {
           mergedListCurrent.next = list1 
        }

        return mergedListHead.next;
    }
}
