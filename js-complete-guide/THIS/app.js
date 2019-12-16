//This is an object which refers to the current execution scope thus where the function is executed. if the function is executed in the window object, that function is added to the global object


//This refers to an object which is executing a bit of javascript code

function thisFunction(params) {
    console.log(this)
}

thisFunction()

//It is the window that is executing the funtion so this refers to the window object. This function is added to the global object which means this function can act on the global object

//==================================
//Object executing the function
//=================================

const myStudents = {
    name: 'Emmanuel',
    age: 20,
    score() {
        console.log(this)
        console.log(`Hi ${this.name}, your age is ${this.age}`)

        //Since the this represent the object we can do it like this
        console.log(`Hi ${myStudents.name}, your age is ${myStudents.age}`)
    }
}

myStudents.score()

//Since it's the object which is executing the function the this refers to the object itself so the function can access the properties on the object


//To understand this keyword, only we need to know how, when and from where the function is called, does not matter how and where function is declared or defined.





// class Greet {
//     constructor(age, city) {
//         this.age = age;
//         this.city = city;
//     }

//     say = () => {
//         console.log(this)
//     }
// }

// const name = new Greet()
// name.say()

//=================================
// IMPORTANT OF THIS
//==================================

//helps to reference these properties or other methods

//make the methods to be aware of it's context in the object

//This refers to the individual properties and methods so that our methods can use this properties or other methods




// const person = {
//     firstname: 'Emmanuel',
//     lastname: 'Tweneboah',
//     age: 20,

//     //destructure this

//     fullname() {
//         const { firstname, lastname } = this;

//         return (`${firstname}  ${lastname}`)
//     },

//     printBio() {
//         console.log(this)
//         const bio = this.fullname();
//         console.log(`Your bio is ${bio}`)
//     },

//     laugh: () => {
//         console.log(this);
//         console.log(`${this.firstname} says YOOOOOOO`)
//     }
// }

//The determination of an object by using this doesn't depend only where it was exeuted by rather how the method was invoked


//person.printBio()

//calling the function in another way

//const myBio = person.printBio(); //This makes this deviate a little because the rule is that this keyword looks for any variable to the left and it will point this to it but in our case we have 2 variables pointing the left that makes it uncertain


//console.log(myBio());



//arrow functions do not get their own function of this keyword. It doesn't depend on how you call the function. the value of this will never be changed



//If a method is not executed by an object it points to a global scope



//=============================
//WHY ARROW FUNCTIONS DON'T HAVE THIS KEYWORD
//=============================

// const annoyer = {
//     phrases: ['yes', 'no', 'go', 'hmmmmmm'],

//     pickPhrase() {
//         const { phrases } = this;
//         const index = Math.floor(Math.random() * phrases.length)

//         return phrases[index]
//     },

//     start() {
//         console.log('yueeeee')
//         //We can define our own variable to be accessbile by outers by using this

//         this.timerId = setInterval(() => {
//             //Since this function is not set by us but rather setInterval this keyword points to the windows
//             console.log(this)
//             console.log(this.pickPhrase())
//         }, 3000)
//     },
//     stop() {
//         clearInterval(this.timerId);
//         console.log('NO PROBLEM I HAVE STOPPED')
//     }
// };

//NOTE: Arrow function don't have their own special keyword this but it rather get's it this keyword by moving up where there is a near by (function where the arrow function is executed) this keyword. Remeber every function has this keyword

//In short arrow function get this by it's parent function.


//CODE DEMO

//For the code above since it's arrow function executing the the this keyword since it is not a function which has access to this keyword but rather an object which don't have access to this keyword it will point to the window object

// const town = {

//     getCity2: () => {
//         console.log(this)
//     }
// }








