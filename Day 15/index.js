/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timeoutID = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            fn(...args)
                .then((result) => {
                    clearTimeout(timeoutID);
                    resolve(result);
                })
                .catch((err) => {
                    clearTimeout(timeoutID);
                    reject(err);
                })
        });

    };
};


const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log)
