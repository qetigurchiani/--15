'use strict'
// //loop object
// let user = {
//     firstName: 'Ani',
//     age: 25
// }
// // for (let key in user){
// //     // console.log(key);
// //     console.log(user[key]);
// // }

// // object.keys
// // console.log(Object.keys(user));
// // for (let objkey of Object.keys(user)) {
// //     console.log(objkey);
// // }

// //object.values
// // Object.values(user).forEach(function(item){
// //     console.log(item);
// // })

// // Object.entries(user).forEach(function([key,value]){
// //     console.log(key,value);
// // })

// for(let[userkey, uservalue]of Object.entries(user)){
//     console.log(userkey,uservalue);
// }


// ნინო არის 30 წლის
// let user ={
//     name: 'nino',
//     age: 30
// }
// let printName = user.name  + 'არის' + user.age + 'წლის'
// console.log(printName);

// let printName2 = `${user.name} არის ${user.age} წლის`
// console.log(printName2);


//if statement 

// let number = 10

// let resultstatement= (number>30) ? 'hello': 'error'
// console.log((resultstatement));


// // dom
// let newPelement = document.createElement('p');
// newPelement.textContent = 'hello world';
// newPelement.classList.add('text');
// newPelement.classList.remove('text');
// newPelement.classList.rplace('text', 'text2');
// newPelement.setAttribute('id', 'textid');

// newPelement.style.color = 'blue';
// newPelement.style.background = 'yellow';

// document.getElementById('wraper').appendChild(newPelement);

// //getelementbyid
// //queryselector 


// //a tag
// let newAelement = document.createElement('a');
// newAelement.setAttribute('href', 'https://google.com');
// newAelement.setAttribute('target', '_blank');
// newAelement.classList.add('link');
// newAelement.textContent = 'link';

// // document.querySelectorAll('.container')[1].appendChild(newAelement)

document.querySelectorAll('.container').forEach(function(item){
    let newAelement = document.createElement('a');
    newAelement.setAttribute('href', 'https://google.com');
    newAelement.setAttribute('target', '_blank');
    newAelement.classList.add('link');
    newAelement.textContent = 'link';

    item.appendChild(newAelement);
})
    

document.getElementById('wraper').innerHTML= '<h3> Title3 </h3'


// events
// document.querySelector('.send').addEventListener('click',function(){
//     alert('hello')
// })

let button = document.querySelector('.send');

button.addEventListener('click', function(){
    document.body.classList.toggle('active')
})

let inputField = document.getElementById('textinput');
inputField.addEventListener('focus', function(){
    inputField.style.border='2px solid green'
})

inputField.addEventListener('keydown', function(){
    inputField.style.border='2px solid red'
})
    
