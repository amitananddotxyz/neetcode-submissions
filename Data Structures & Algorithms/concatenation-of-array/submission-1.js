class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;

        for(let i = n; i < 2*n; i++) {
            nums[i] = nums[i % n];
        }

        return nums;
    }
}
