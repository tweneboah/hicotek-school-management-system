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

h1.innerText = 'Yes i have changed it';











