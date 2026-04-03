class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];
        let score = 0;

        for(const op of operations) {
            if(op === "+") {
                let elem = record[record.length - 1] + record[record.length - 2];
                record.push(elem);
                score += elem;
            } else if(op === "D") {
                let elem = 2 * record[record.length - 1];
                record.push(elem);
                score += elem; 
            } else if(op === "C") {
                let elem = record[record.length - 1];
                record.pop();
                score -= elem;
            } else {
                let elem = parseInt(op);
                record.push(elem);
                score += elem;
            }
        }

        return score;
    }
}
