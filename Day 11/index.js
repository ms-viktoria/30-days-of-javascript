/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
    try {
        const [value1, value2] = await Promise.all([promise1,promise2]);
        return value1 + value2;
    } catch (error) {
        throw error;
    }
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
