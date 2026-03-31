class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let ptr = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] !== val) {
                if(nums[ptr] !== nums[i]) {
                nums[ptr] = nums[i];
                } 
                ptr++;
            }
        }

        return ptr;
    }
}
