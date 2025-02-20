function chunk(arr, size) {
    const chunksNumber = Math.ceil(arr.length / size);
    let lastIndex = 0;
    let chunks = [];

    for (let i = 0; i < chunksNumber; i++) {
        chunks = [...chunks, arr.slice(lastIndex, lastIndex + size)]

        lastIndex += size;
    }

    return chunks;
};

chunk([1, 2, 3, 4, 5], 2)