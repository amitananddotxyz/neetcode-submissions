class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        let concat = new Array();

        for(let i = 0; i < 2*n; i++) {
            concat[i] = nums[i % n];
        }

        return concat;
    }
}
