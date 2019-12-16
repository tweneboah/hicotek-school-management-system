class Timer {
    constructor(durationInput, startButton, pausButton) {
        //These are just initialise of variables, which may use in our functions

        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pausButton = pausButton;

        //Adding eventListner. This is binding event to the initialise variables and this will call a function in our class
        this.startButton.addEventListener('click', this.start)
    };

    //This function is called by the startButton so it's points to the button but since inside the start method there is method of which it's the button calling it directly but rather the start method therefore the method inside it points to the global object but when we use arrow function the this points to it's parent function called Timer
    start = () => {
        console.log(this)
        this.importantMethodCall()

    }

    importantMethodCall() {
        console.log('This is the imoortant message call')
    }
};


//selecting elements and pass it to the functions
const durationInput = document.querySelector('#duration');
const startButtonss = document.querySelector('#start');
const pausButton = document.querySelector('#pause');


//passing theses to the function
const timer = new Timer(durationInput, startButtonss, pausButton);




