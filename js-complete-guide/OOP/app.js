//=====================================
//PROTOTYPE
//=====================================

//This is a mechanism where objects inherit methods and function from  each other for example array has has many methods = prototype

//Any function you define on array/object becomes the prototype



//======================================
//CONSTRUCTOR
//======================================

//=========
//this keyword
//==============

//this: This refers to the function or object calling the constructor function. this refers to the window object. 

//========================
// new keyword
//======================

//When we call a constructor function with the new keyword, it creates a new object and the this keyword then dosn't not point to the global object but instead it points to the newly created object

//This keyword works with a global object. 
//it has no return value

function Color(r, g, b) {
    console.log(this)
    this.r = r;
    this.g = g;
    this.b = b
};


//ADDING METHOD TO ANY INSTANCE OF THE OBJECT USING PROTOTYPE
Color.prototype.rgb = function (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b
    return `rgb(${r}, ${g}, ${b})`
}


//
//Color(255, 0, 0) // this refers to the window oject

const newColor = new Color(255, 0, 0);

//ACCESS THE FUNCTION
//newColor.rgb(244, 2, 4)



//========================================
//CLASSES
//========================================


//This add synthetic sugar to a constructor function which means a new way of writing a constructor function

//For class we don't add methods to prototype separatory



class Color2 {
    //The constructor function will call immediatelt whenever a new instance of color2 is created

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b
    }

    //Adding Method to the class
    greet() {
        return 'Hellow from color'
    }
};

const c1 = new Color2(255, 67, 39, 'tomato');
//Using the method
console.log(c1.greet());

class MarksScore {
    constructor(maths, science) {
        this.maths = maths;
        this.science = science;
    }
    score() {
        const totalScore = this.maths + this.science;
        if (totalScore < 80) {
            return `Your score is ${totalScore} therefore you failed`
        } else {
            return `Your score is ${totalScore}, therefore you passed`
        }
    }
};
const EmmaScore = new MarksScore(60, 30);

//console.log(EmmaScore.score())


//=================================
//super, extends = inheritance
//================================

//This is a way of sharing methods between classes




