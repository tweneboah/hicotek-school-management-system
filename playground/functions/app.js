//functions to find average of arrays


const findAverage = (array) => {
    let total = 0;

    for (num of array) {
        total += num;
    }

    return (total) / array.length
};

const ans = findAverage([2, 30, 90]);

console.log(ans)

