class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let i = 0;
        let n = arr.length;

        while (i < n) {
            let localizedMax = 0;
            for(let j = i + 1; j < n; j++) {
                if(arr[j] > localizedMax) {
                    localizedMax = arr[j];
                }
            }

            arr[i] = localizedMax;

            if(i === n - 1) {
                arr[i] = -1;
            }

            i++;
        }

        return arr;
    }
}
