//The try statement lets you test a block of code for errors.

//The catch statement lets you handle the error.

//The throw statement lets you create custom errors.

//The finally statement lets you execute code, after try and catch, regardless of the result.


const errorId = document.querySelector('.err');
const btn = document.querySelector('button');
const value1 = document.querySelector('.val')
btn.addEventListener('click', add);


function add(a, b) {
    try {
        //The try statement lets you test a block of code for errors.
        if (a !== 'number') throw 'The value is not a number'

    } catch (error) {
        //The catch statement lets you handle the error.
        console.log(`Input error msg ->: ${error}`)
        errorId.innerHTML = error
    }
}

//add('yes')


//Error Constructor has 3 properties

// const myError = new Error('Error just occured');


// myError.name
// myError.message
// myError.stack //Which line the error occured


// console.log(myError.name);
// console.log(myError.message)
// console.log(myError.stack)


//try/catch is for synchronous

//HANDLING ERRORS IN PROMISE

//Use catch at the end of a promise to catch any errors

// Promise.resolve('Information loaded')
//     .then(res => {
//         throw new Error('fail 2');

//     }).then(res => {
//         console.log(res)
//     }).catch(err => {
//         //here we can return the error and give it to .then as a respose
//         // console.log(err.message)

//         return err
//     }).then(res => {
//         console.log(res.message)
//     });


//try/catch for aync functions

(async function () {

    try {
        await Promise.resolve('It worked');
        await Promise.reject('Hmm Error')
    } catch (error) {
        console.log(error)
    }


})()


//EXTENDING ERRORS

//This helps to customise the error name so that hackers cannot trcr the error

class AuthenticationError extends Error {
    constructor(message) {
        super(message) //This is use to connect to the Error class

        this.name = 'Authentication'//Remember that the Error class has name, message and stack property so we are overriding it

        this.favouriteSnacks = 'Grapes'
    }
};


const error1 = new AuthenticationError('Greate Error');
console.log(error1.favouriteSnacks);

