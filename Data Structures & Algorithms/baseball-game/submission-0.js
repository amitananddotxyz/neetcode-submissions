class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let n = operations.length;
        let record = [];
        let score = 0;

        for(let i = 0; i < n; i++) {
            switch(operations[i]) {
                case "+":
                    record.push(record[record.length - 1] + record[record.length -2]);
                    break;
                case "D":
                    record.push(2 * record[record.length -1]);
                    break;
                case "C":
                    record.pop();
                    break;
                default:
                    record.push(parseInt(operations[i]));
            }
        }

        for(let i = 0; i < record.length; i++) {
            score += record[i];
        }

        return score;
    }
}
