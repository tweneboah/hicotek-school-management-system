const btn = document.querySelector('button');




//scroll event

window.addEventListener('scroll', () => {
    console.log('Start scrolling')
});


const username = document.querySelector('.username');

username.addEventListener('keydown', (e) => {
    console.log('keydown', e)
});

username.addEventListener('keyup', () => {
    console.log('keyup')
});


//any key that causes changes to the input is keypress
username.addEventListener('keypress', () => {
    console.log('keypress')
});



//==================
//FORM
//=================


const form = document.querySelector("#signup-form");
form.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('SUB')
})










