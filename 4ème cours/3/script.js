'use strict'

//Créez une promise (promesse) qui retourne une chaîne de caractères 'Hello' immediatement. Récupérez et logguez la valeur qu'elle retourne.
const myPromise = new Promise((resolve, reject)=> {
    resolve('Hello');
});

myPromise.then(result => console.log('result', result));

//Créez une promise qui retourne une chaîne de caractères 'Hello' dans 3 secondes. Récupérez et logguez la valeur qu'elle retourne.
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
    }, 3000)
});
myPromise2.then(result => console.log ('result', result)); //Something went wrong!'. Récupérer et logguez cette erreur.

//Créez une promise qui retourne un nombre N. Enchaînez le traitement de la promise pour effectuez les operations suivantes:

    //multiplier N par 2
    //ensuite soustraire 1
    //ensuite decrementer de 2
    //ensuite augmenter de 10. Logguez le résultat réçu.

const getNum = new Promise((resole, reject) => {
    resolve(10)
    reject('Error');
})

getNum
    .then(num => num * 2)
    .then(num => num - 1)
    .then(num => num -= 2)
    .then(num => num += 10)
    .then(num => {
        console.log('result', num);
    })
    .catch (error => {
        console.error(error)
    })


// Créez une fonction qui prend un nombre comme parametre et qui retourne une promise.
// Si le nombre passé est supérieur à 5 la promise est résolue avec succès, 
//sinon la promise retourne une erreur 'Le nombre passé est trop grand'. 
//Appelez la fonction créée et récupérez la valeur retournée par la promise.

fetch ('https://jsonplaceholder.typicode.com/post.25')
    .then(response => response.json())
    .then(result => {
        console.log('result', result);
        fetch ('https://jsonplaceholder.typicode.com/comment.25')
        .then(response2 => response2.json())
        .then(comments => {
            console.log('comments', comments);
        })
    });



const userData = {
    email: "test@ynov.com",
    password: 'qwerty'
}

fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify(userdata),
    header: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(result => console.log('result, result'));



    const userData ={
        name: 'Toto'
    }