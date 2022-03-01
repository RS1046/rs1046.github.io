/*const myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!"; */

/*alert("Hello!");
alert(multiply(2,7));
alert(multiply(3,4));
alert(multiply(19,7));  */

//document.querySelector('html').addEventListener('dblclick', () => {alert('Wow! a double click on the page')}); //anonymous functions - arrow syntax
//document.querySelector('body').addEventListener('click', function(){alert('Ouch! Vivaan, Stop poking me!')});

/*function multiply(num1, num2) {
    return num1 * num2;
} */

/* let myImg = document.querySelector('img');
myImg.onclick =  () => {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/pic.jpg') 
    {
        myImg.setAttribute('src', 'images/pic1.jpg');
    } 
    else 
    {
        myImg.setAttribute('src', 'images/pic.jpg');
    }
} */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    if (!myname) 
    {
        setUserName();
    } else 
    {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are way too cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You are way too cool, ' + storedName;
}


myButton.onclick = function () {
    setUserName();
}