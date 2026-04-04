class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let prev;
        do {
            prev = s;
            s = s.replace("()", "").replace("{}", "").replace("[]", "");
        } while(s.length !== prev.length);

        return s.length === 0;
    }
}
