'use strict';

//1
let book = document.querySelectorAll('.book');
book[0].before(book[1]);
book[4].before(book[5]);
book[3].before(book[4]);
book[5].after(book[2]);


//2
document.body.style.backgroundImage = 'url(../image/you-dont-know-js.jpg)';

//3
let h2 = document.getElementsByTagName('a');
h2[2].textContent = 'Книга 3. this и Прототипы Объектов';

// 4
let adv = document.querySelector('.adv');
adv.remove();

//5
let li = document.querySelectorAll('li');
li[9].after(li[12]);
li[10].after(li[14]);
li[15].after(li[8]);
li[11].before(li[10]);

li[42].before(li[38]);
li[39].before(li[45]);
li[44].before(li[41]);

//6
let newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
li[56].before(newElem);