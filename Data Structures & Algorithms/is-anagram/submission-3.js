class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freq = new Array(26).fill(0);

        for(const char of s) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

            freq[index]++;
        }

        for(const char of t) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);

            freq[index]--;
        }

        for (const char of freq) {
            if(char !== 0) {
                return false;
            }
        }

        return true;
    }
}
