/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
    return {
        toBe: (newVal) => {
            if (newVal !== val){
                throw new Error("Not Equal")
            }
            return true;
        },
        notToBe: (newVal) => {
            if (newVal === val){
                throw new Error("Equal")
            }
            return true;
        }

    };
};



expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"