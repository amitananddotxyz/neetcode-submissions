class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupedArr = new Array();
        const map = new Map();

        for(const str of strs) {
            const arr = new Array(26).fill(0);
            for(const char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                arr[index] = arr[index] + 1;
            }

            const key = arr.join(',')
            if(map.has(key)) {
                map.get(key).push(str);
            } else {
                map.set(key, [str]);
            }
        }

        for(const [key, value] of map) {
            groupedArr.push(value);
        }
        return groupedArr;
    }
}
