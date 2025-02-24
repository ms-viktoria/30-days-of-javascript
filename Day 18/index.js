/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => {
    return [...arr].sort((a, b) => fn(a) - fn(b));
};

const arr = [4, 1, 2, 3];
const fn = (x) => x;
console.log(sortBy(arr, fn));