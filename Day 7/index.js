/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
    if (functions.length === 0){
        return (x) => x;
    }

    return (x) => functions.reduceRight((acc, fn) => fn(acc), x);
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)); // 9