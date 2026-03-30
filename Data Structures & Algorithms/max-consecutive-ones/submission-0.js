class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let localizedCount = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 1) {
                localizedCount++;
                if(localizedCount > maxCount) {
                    maxCount = localizedCount;
                }
            } else {
                localizedCount = 0;
            }
        }

        return maxCount;
    }
}
