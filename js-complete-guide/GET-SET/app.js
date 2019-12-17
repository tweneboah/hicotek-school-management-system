//=============================
//GET & SET
//============================


// Getters and setters are functions or methods used to get and set the values of variables

//The idea of getters and setters is always mentioned in conjunction with encapsulation. Encapsulation can be understood in two ways.

//Firstly, it is the setting up of the data–getters–setters trio to access and modify that data. This definition is useful when some operations, such as validation, have to be performed on the data before saving or viewing it—getters and setters provide the perfect home for it.


//Set: is a function that takes argument to update a variable in a function

//get: is a function that runs a method


const users = {
    firstname: 'Emmanuel',
    lastname: 'Tweneboah',
    get fullname() {
        return `${this.firstname} ${this.lastname}`
    },

    set fullname(val) {
        if (typeof val === 'number') {
            alert('Enter a text')
            throw new Error('Enter text')
        }
        //updating a variable
        this.firstname = val
    }
};

users.fullname = 90
console.log(users.fullname)