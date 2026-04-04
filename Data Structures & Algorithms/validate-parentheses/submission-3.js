class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        const dict = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        for(let ch of s) {
            if(dict[ch]) {
                if(stack[stack.length - 1] === dict[ch]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(ch);
            }
        }

        return stack.length === 0;
    }
}
