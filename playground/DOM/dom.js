//=============================
//SELECTING
//=============================

//1. getElementByID
//getElementByTagName = h1, p, input
//getElementByClassName
//querySelector = it uses all the above methods it can use to select by tagName, Id, Class but for tagName it gives only the first match unlike tagName which gives an array



//==========================
//MANIPULATING
//==========================

//After selecting the tag we have to manipulating the elements


//PROPERTIES AND METHODS.

// 1 . classList
// 2. getAttribute()
// 3. setAtrribute()
// 4. appendChild()
// 5. append()
// 6. prepend()
// 7. removeChild()
// 8. remove()
// 9. createElement()
// 10 innerText
// 11. textContent()
// 12. innerHTML
// 13. value
// 14. parentElement
// 15. childdren
// 16. nextSibling
// 17. prevSibling
// 18. style


//========================
//ACCESS TEXT
//1. textContent
//2. innerText
//3. innerHTML
//=======================




const el = document.querySelector('#main');

//innerText

el.innerText
//This returns the content between the tagName but which is not a formatted version of the original, this is mostly used


//textContent

//This returns all the text between as the oriinal. If you add js or any hidded content it will show

el.textContent


//innerHTML

//This is the same as textContent but for this you can apply any html property to it

//This select any html attribute on the page for example when selecting a form tag by innerHTML, It will show all the fields

const form = document.querySelector('form')
form.innerHTML



//when you console log h1 there are methods and properties like, innerText

//innerText  and innerHTML is a text that's between a tagName

//For innerHTML you can apply all the html styles on it but for innerText you cannot

//You can change the text too

el.innerText = 'Yes i have changed it';


//Retrieving values from a form


const inputs = document.querySelectorAll('input');

inputs[0].value;
inputs[1].value;
inputs[0].placeholder = 'Firstname'
inputs[2].checked; //Selecting value in checkbox
inputs[3].value //Range
inputs[4].value //Selecting value of a color
inputs[5].value //For radio button
inputs[6].value //Search field
inputs[7].value //Select date value
inputs[8].value //Select file

// const aLink = document.querySelector('a');
// aLink.href

//Changing the link
// aLink.href = 'http://www.google.com'




//===========================
// getAttribute and setAttribute
//Example height, width, type
//===========================

const range = document.querySelector('input[type="range"]');

range.getAttribute('max') //This will gives you the value of 500


range.setAttribute('height', '200px');



//==========================
//parent/children/sibling
//This is use in the event
//===========================


//NOTE:

//To be able to access a method or properties of an element, first select and assign it to a valariable and the console.dir(name of the variable). You can determined it parentElement or children or siblings


const li = document.querySelector('li');
console.dir(li);

li.parentElement //This will select the ul
li.parentElement.parentElement //This will select the body
li.parentElement.parentElement.parentElement //This will select the htm
li.parentElement.parentElement.parentElement.parentElement //This will be null



//========================
//children
//========================

//Find html element that has children like ul, which has li so you use li.children


//=========================
//CHANGING MULTIPLE ELEMENTS
//=========================

//This is the use of loops to change some properties

// let allLi = document.querySelectorAll('li');

// for (let li = 0; li < allLi.length; li++) {
//     console.log(allLi[li].innerText = 'Hicotek')
// }




//=============================
//Changing style using js
//============================

//NOTE:
//Every element we select has a style property and there we can add any css styles to it


//All these are inline styles so they will always win

const h1 = document.querySelector('h1');

h1.style.background = 'green';
h1.style.padding = '20px';
h1.style.fontSize = '40px';
h1.style.border = '2px solid red';



//GET COMPUTED STYLES OF AN ELELMENT

const h1Stles = document.querySelector('h1');

const styles = getComputedStyle(h1Stles);

// console.log(styles)


//==========================
//MANIPULATING CLASSES
//===========================



//1. Select the element you want to apply the styles
const todo = document.querySelector('#todos .todo');

//2. Add your custom css to the css file

//3. use setAttribute and pass in 1. class and 2. the name of the class 

// todo.setAttribute('class', 'done');


//===================================
//OPTION 2
//====================================

//Using classList. The is the best option
//It can use to toggle a class which means if it is there remove it and if it's there add it
//==================================

//Select the element and define your custom class as above

todo.classList.add('done');
todo.classList.remove('done');
todo.classList.toggle('done')


//==========================
//CREATING ELEMENTS
//=================

//1.Create element
const newh2 = document.createElement('p');
newh2.innerText = 'This will insert at the end of the section';


//================================================
//APPEND, APPENCHILD, PREPEND
//==============================================

//1. Put it to the DOM/Page
//This looks at a parent html and it will put it there

//Select a section which is a parent
const section = document.querySelector('section');

//3. place the created element /appendchild into this parent section


//Append will add at the end of the children

//=============================
//appendChild
//=============================

//This will add at the end of the section list
section.appendChild(newh2);


//=====================
//inserBefore
//===================


//This insert before the other element

//1. select the parent in our case it's a list
//2. Select a particular element we want to insert our newly created element before
//3. create the element we want to insert


// const parentUL = document.querySelector('ul');
// const newLI = document.createElement('li');
// newLI.innerText = 'This is a new li created';
// const firsLI = document.querySelector('li.todo')
// parentUL.insertBefore(newLI, firsLI)



//=============================
//insertAdjacentElement
//============================

//This will insert a created text before a div, paragraph or a section

//1. Create your element
const h3 = document.createElement('h2');

//2. Add text to it
h3.innerText = 'Am a newly created text';

//3. Select a paragraph to insert
const firstPaaragraph = document.querySelector('p');

firstPaaragraph.insertAdjacentElement('beforebegin', h3);




//=========================
//removeChild() .This requires selecting a parent
//OPTINON 1 
//========================

//1. find the parent (ul)
const ul = document.querySelector('section ul')
//2. find the item to remove (li) using their class

// const itemToRemove = document.querySelector('section .special')

//or
const itemToRemove = ul.querySelector('.special');
// ul.removeChild(itemToRemove)



//=============================================
//OPTION 2: This does not require any parent
//remove()
//======================================
//Just select the item to remove and pass append the remove function


const h1ToRemove = document.querySelector('h1');

// h1ToRemove.remove();





















