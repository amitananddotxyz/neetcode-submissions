class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr = new Array;
        const map = new Map();
        for(const str of strs) {
            const sortedStr = [...str].sort().join('');
            if(map.has(sortedStr)) {
                map.get(sortedStr).push(str);
            } else {
                map.set(sortedStr, [str]);
            }
        }

        for (const [key, value] of map) {
            arr.push(value);
        }

        return arr;       
    }
}
