
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Zadanie 1.
const newArray = array.reduce((acc, index, array) => {
console.log('akumulator', acc);
return acc + item;
}, 0);
console.log(newArray);

// Zadanie 2.
function evenNumber (acc, item) {
if (item % 2 == 0) {
acc += item;
}
return acc;
}
const sumEven = array.reduce(evenNumber, 0) ;
console.log(sumEven);

// Zadanie 3.
const initialSum = array .reduce((acc, item ) => {
return acc + item 
}, 10);
console.log(initialSum);

// Zadanie 4.
// Jeśli  podamy initialValue to accumulator po wywoałaniu bedzie jako pierwszy element tablicy.
// Jesli nie podamy initialValue accumulator bedzie elementem [0] tablicy.
 
 // Zadanie 5.
 

// Zadanie 6.
let sum = 0;
for (let i = 0; i < array.lenght; i++) {
sum += array[i];
}
console.log(sum);


const someArray = [11, 3, 5, 31, 31, 54, 23, 14]

//Zadanie 7.
const someArr = someArray.some ((item) => item > 50);
console.log(someArr); 

//Zadanie 8.
const everyArr = someArray.every((item) => item > 2);
console.log(everyArr);

//Zadanie 9.
// Some zwróci true jesli ktoryś element spełni warunek.
// Every zwórci  true jeśli każdy element spełni warónek.

// Zadanie 10
const someArr2 = someArray.some((item) => 7 === 0);
const istsomeArr2 = () => {
if (someArr2) {
console.log(`Tablica ${someArray} zawiera przynajmniej jeden element podzielny przez 7`)
}else{ console.log (`Tablica ${someArray} nie zawiera anijednego elementu podzielnego przez 7`)}
} 

//Zadanie 11.
function some(array) {
for (let i = 0; i,aray.length; i ++) {
const item = array[i];
console.log(item);
if (item > 1) {
return true;
}
}
return false;
}
const creatSome = some(someArray);
console.log(createSome);

//Zadanie 12.
function every(array) {
let result = true 
for (i = 0; i < array.length; i++) {
const itrm = array[i];
if (item !== array[i]) {
return false
} else {
return result
}
}
}
// Zadanie 13.
const someArr3 = [2, 4, 6, "Auto", 8, "Dog"]
const sum2 = (array) => {
const numberArr = array.filter((item) => {
if (typeof item == 'number') {
return item
}
})
reduce((acc, item) => {
return acc + item
}, 0)
return numberArr
}

// Zadnie 14.
const newArray2 = [99, 44, 55, 33];
function sub ( arr, initialValue ) {
initialValue = 0
const resultSub = arr.reduce (function (acc, item) {
acc -= item
return acc
}, initialValue )
return resultSub
}
console.log(sub, (newArray2))

//Zadanie 15.

function includes (arry, item) {
const result = someArray.some(function (element) {
return element === item;
});
return result;
}
consle.log(includues(someArray));

//Zadanie16
function Car(model, yearOfProduction, color){
this.model = model;
this.yearOfProduction = yearOfProduction;
this.color = color;
this.drive = () => console.log('Drive');
}
const RS6 = new Car('RS6', 2021,  'black');
console.log(RS6);
const GTR = new Car  ('GTR', 2016, 'blue');
console.log(GTR);

//Zadanie 17.
// Słowo kluczowe new tworzy obiekt gdy używamy konstruktorów, morzemy go uzywać do tworzenia nowych typów danych.

//Zadanie 18.
Car.prototype.tankFuel = function () {console.log('Tankuj paliwo!')} 
Car.prototype.stop = function () {console.log ('Zatrzymaj się!')}