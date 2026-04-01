class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let n = arr.length;
        let currentMax = arr[n - 1];

        for(let i = n - 1; i >= 0; i--) {
            if(i === n - 1) {
                arr[i] = -1;
            } else {
                let origElem = arr[i]
                arr[i] = currentMax;
                currentMax = Math.max(currentMax, origElem);
            }
        }

        return arr;
    }
}
