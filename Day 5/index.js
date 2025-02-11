/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};
let arr = [1, 2, 3, 4];
let fn = function plusone(n, i) {
    return n + 1;
}
console.log(map(arr, fn));

let arr2 = [1, 2, 3, 4];
let fn2 = function plusindex(n, i) {
    return n + i;
}
console.log(map(arr2, fn2));