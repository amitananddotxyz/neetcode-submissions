class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let localizedCount = 0;

        for(let i = 0; i < nums.length; i++) {
            localizedCount = nums[i] === 1 ? localizedCount + 1 : 0;
            count = Math.max(localizedCount, count);
        }

        return count; 
    }
}
