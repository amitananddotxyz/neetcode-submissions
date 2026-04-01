class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length;
        let currentMax = -1;

        for(let i = n - 1; i >= 0; i--) {
            let origElem = arr[i]
            arr[i] = currentMax;
            currentMax = Math.max(currentMax, origElem);
        }

        return arr;
    }
}
