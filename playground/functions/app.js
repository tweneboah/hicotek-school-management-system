//functions to find average of arrays


const findAverage = (array) => {
    let total = 0;

    for (num of array) {
        total += num;
    }

    return (total) / array.length
};

const ans = findAverage([80, 20, 39, 50, 70]);


console.log(ans)



//SCOPE -> variable

//Where a variable is defined

//1. function scope

const Marks = [80, 20, 39, 50, 70];

function calculateAvg(Marks) {
    const totalMarks = Marks.reduce((Accumulator, index) => Accumulator + index, 0);
    return totalMarks / Marks.length;
}

const averageMark = calculateAvg(Marks);
console.log(averageMark);


//LEXICAL SCOPE

//A nested function has access to variable created outside a nested function


//FNCTION EXPRESSION

//Since funtions are object we can assigned them as a variable

//HOISTING

//Using variable before using it
//let, and const will be error stated the variable is not initialised but for var it will undefined


//return functions are hoisted meaning that you can call the function before creating it but for function expression, it's not hoisted meaning you cannot call a function before creating even though the variable is hoisted but the function is not\=