//Async js
//promises
//request

//================
//Callback 
//================


//It's a function that runs after a request is ready becuase javascript will wait so when the request is done then the callback runs the request

//.then and .catch is use to consume the promise


//============
//HOW TO PASS CALLBACK TO A FUNCTION
//============

const moveMe = (callback) => {
    setTimeout(() => {
        return callback()
    }, 3000)
};

// moveMe(() => {
//     console.log('Yes another')
// })


//===============
//PROMISES
//==============


//This is an object that represent failure or completion of async code

//axios returns a promise which returns an object

//It accepts 2 arguements which is a function

const willGetYouADog = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.9) {
        resolve()
    } else {
        reject()
    }
});

// willGetYouADog.then(() => {

//     console.log('YEAH AM GOOD TO GO')
// }).catch(() => {

//     console.log('OH NOOO')
// });




//=======================
//RETURNING A PROMISE FROM A FUNCTION

const getDog = () => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random());

        if (rand < 0.5) {
            resolve()
        } else {
            reject()
        }
    })
}


// getDog().then(() => {
//     console.log('YEA YOU GOT THE DOG')
// }).catch(() => {
//     console.log('THERE IS NO DOG')
// })


//=====================
// RESOLVING OR REJECTING WITH  VALUES
//=====================


const getDog2 = () => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random());

        if (rand < 0.5) {
            resolve({ status: 200, msg: 'Excellent job' })
        } else {
            reject({ status: 400, error: 'No dog found' })
        }
    })
}


// getDog2().then((res) => {
//     console.log(res)
//     console.log('YEA YOU GOT THE DOG')
// }).catch((res) => {
//     console.log(res)
//     console.log('THERE IS NO DOG')
// })


//==========================
//PROMISE CHAINING
//==========================

//If a promise depends on another response to make another request we have to return the promise. 

//We can chain it in a linear form

//These promise chaining requires only one .catch() method. If there is any rejection of the series of the .then promise it will catch by only one .catch


const getDog3 = () => {
    return new Promise((resolve, reject) => {
        const rand = Math.floor(Math.random());

        if (rand < 0.5) {
            resolve({ status: 200, msg: 'Excellent job' })
        } else {
            reject({ status: 400, error: 'No dog found' })
        }
    })
}


getDog2()
    .then((res) => {

        return (res)
    })
    .then((res) => {
        return (res)
    })
    .then((res) => {
        console.log(res)
    })
    .catch((res) => {
        console.log(res)
    })

