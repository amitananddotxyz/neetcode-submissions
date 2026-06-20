class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
       let count = 0;
       let localizedCount = 0;

       for(let i = 0; i < nums.length; i++)  {
            if(nums[i] === 0) {
                count = Math.max(count, localizedCount);
                localizedCount = 0;
            } else {
                localizedCount++;
            }
       }

       return Math.max(count, localizedCount);
    }
}
