"use strict";

console.log('arr'+" - object");
console.log( 4 +" - object");
console.log( 4 + +" - object");
console.log( 4 + +"5");
console.log( 4  +"5");

let inr = 10,
    decr = 10;
inr++;
decr--;
console.log(inr);
console.log(decr);

let inr = 10,
    decr = 10;
++inr;
--decr;
console.log(inr);
console.log(decr);

let inr = 10,
    decr = 10;

console.log(inr++);
console.log(decr--);

let inr = 10,
    decr = 10;

console.log(++inr);
console.log(--decr);

console.log(5%2);

console.log(2*4 == 8);
console.log(2*4 == '8');

console.log(2*4 === '8');

console.log(2*4 == 8);

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);

const isChecked = true,
    isClose = false;

console.log(isChecked || !isClose);

console.log(2+ 2*2 === 8);
console.log(2+ 2*2 != 8);
console.log(2+ 2*2 != 6);
console.log(2+ 2*2 != '6');
console.log(2+ 2*2 == '6');
console.log(2+ 2*2 !== '6');
