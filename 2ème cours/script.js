'use strict';
const myDivs =
document.getElementsByTagName('div');
console.log('MyDivs', myDivs);

const myDivs2 =
document.getElementsByTagName('div');
console.log('MyDivs2', myDivs2);

// Trouvez toutes les balises p avec la classe my-paragraph du document.
const myParagraphs = document.getElementsByClassName('secondary-paragraph');
const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');

//trouvez la balise span
const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2 = document.querySelector('#js-unique-el');

//trouvez toutes les balises p qui se trouvent dans un div.
const mypParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagrapheInDivs', mypParagraphsInDivs);

//Trouvez toutes les balises span qui sont précédés par un div
const spansPrecedeByDivs = document.querySelector('div + span');
console.log('spansPrecedeByDivs', spansPrecedeByDivs);

const firstP = document.querySelector('.first-p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP value', firstP.innerText);

// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
const secondP = document.querySelector('.second-p');
secondP.innerHTML = '<span>Hello</span>';
console.log('secondP html', secondP.innerHTML);

// Modifiez les attributs width a 50 % et height a 'auto' de l'image
const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');

// Ajoutez un attribut alt non vide a l'image.
myImg.setAttribute('alt', 'Random image');

// Donnez la couleur 'blue' au premier paragraphe du div et la taille de la police '1.5rem'.
firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

// Ajoutez la classe img a l'image.
myImg.className ='my-class'; // my.Img;classname += 'another-class'
myImg.classList.add ('my-class');
myImg.classList.remove('some-class');


const myBody = document.querySelector('body');
const newEl = document.createElement('p');
newEl.innerText = 'Hello';
newEl.style.color = 'red';

//dernier enfant ;-;
myBody.appendChild(newEl);

const newEl2 = document.createElement('p');
newEl2.innerText = 'Hello';
newEl2.style.color = 'yellow';

//premier enfant
myBody.prepend(newEl2);

myBody.removeChild(newEl2);