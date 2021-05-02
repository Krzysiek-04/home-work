//Zadanie1
//a
for (let i = 1; i <= 9; i++){
    console.log(i);
    }
    
    //b
    for (let i = 9; i > 0; i-- ) {
    console.log(i);
    }
    
    //c
    for (let i = 5; i <=15; i++) {
    console.log(i);
    }
    
    //d
    for (let i =0; i >= -10; i--) {
    console.log(i);
    }
    
    //e
    for (let i = 1; i <= 20; i += 2) {
    console.log(i);
    }
    
    //f
    for ( let i = 10; i >= -10; i -= 4) {
    console.log(i);
    }
    
    //g
    for( let i = 1; i <= 100; i *= 2) {
    console.log(i);
    }
    
    // Zadanie 2
    //a
    for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
    console.log(i);
    }
    }
    
    //b
    for (let i = 0; i <= 20; i++){
    if (i % 2 == 1) {
    console.log(i);
    }
    }
    
    //c
    for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
    cosole.log(`${i} liczba parzysta`);
    } else {
    console.log(`${i} liczba nieparzysta`);
    }
    }
    
    //d
    for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FizzBuzz`);
    } else if (i % 3 == 0) {
    console.log(`${i} Fizz`);
    } else if (i % 5 == 0) {
    console.log(`${i} Buzz`);
    } else {
    console.log(i);
    }
    }
    
    //e
    for ( let i= 100; i >= 0; i -= 5)
    if (i % 10 == 0) {
    console.log(`${i} - podzielna przez 10`);
    } else {
    console.log(i);
    }
    
    // Zadanie 3 
    //a
    function createloop (condition) {
    for (i = 0; i <= 15; i++){
    console.log(`${i}`)
    }
    }
    
    //b
    function createloop1(startNumber) {
    for (i = startNumber; i <= 15; i++ ) {
    console.log(`${i}`);
    }
    }
    
    //c
    function createloop2 (iterationCount) {
    for ( i= 0; i <= 15; i = i + iterationCount) {
    console.log(`${i}`);
    }
    }
    
    //d
    function createloop3 (startNumber, condition) {
    for ( i = startNumber; i <= condition; i++) {
    console.log(`${i}`);
    }
    }
    
    //e
    function createloop4 (startNumber, condition, iterationCount){
    for (i = startNumber; i <= condition; i = i + iterationCount) {
    console.log(`${i}`);
    }
    }
    //Zadanie 4
    //a
    const array = [1, 2, 3, 4, 5];
    for(i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
    
    //b
    const array1 = ["Igor", "Nikola", "Ola", "Kris", "Olo"];
    for (i = 0; i < array1.length; i++) {
    console.log(`Cześć ${array1[i]}`);
    }
    
    //c
    const object = [
    {
    model: "Audi",
    color: "black",
    },
    {
    model: "Mercedes",
    color: "red",
    },
    {
    model: "BMW",
    color: "grey",
    },
    ];
    for(let i =0; i < object.length; i ++) {
    console.log(`Przed Wami stoi ${object[i].color}${object[i].model}`);
    }
    
    //d
    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (i = 0; i < array2.length; i++) {
    if (array2[i] % 2 == 0) {
    console.log(array2[i]);
    }
    }
    
    //e 
    const array3 =  ["Ola", true, 27, "false", "5", 11, 9];
    function onlyString() {
    for (i = 0; i < array3.length; i++) {
    if (typeof array3[i] === "string") {
    console.log(array3[i]); 
    }
    }
    }
    onlyString();
    
    //f
    const array4 = ["Ola", true, 27, "false", "5", 11, 9];
    const array5 = [];
    for (i = 0; i <= array4.length; i++) {
    const myElement = array4[i];
    const isNumber = typeof myElement === "number";
    if (isNumber) {
    array5.push(myElement);
    }
    }
    
    //5
    //a
    const array6 = [1, 2, 3, 4];
    function sumArray (array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
    sum += array[i];
    }
    }
    
    //b
    const array7 = [1, 2, 3, 4, 5, 6];
    function evenOddNumbers(array) {
    const evenNumbers = [];
    const oddNumbers = [];
    for (i = 0; i < array.length; i++) {
    array[i] % 2 == 0 ? evenNumbers.push(array7[i]) : oddNumbers.push(array7[i]);
    }
    console.log(`${evenNumbers}`);
    console.log(`${oddNumbers}`);
    }
    evenOddNumbers(array7);
    
    //c
    function check(text) {
    if (text.indexOf("y")) {
    console.log("jest!");
    } else {
    console.log("Nie ma!");
    }
    } 
    check("text")
    check("yes")
    
    //d
    function multiple (number){
    for (i = number - 1; i >= 1; i--) {
    number *= i;
    }
    console.log(number);
    }
    multiple(5);

    //e
    const arrayNumbers = [1, 2, 35]
    const arrayStrings = ["Nie", "Wiem", "Co", "Wpisać"];
    const arrayEmpty = [];
    function addArray (array, argument) {
    let sumOfNumbers = 0;
    let sumOfStrings = "";
    let myElement = array[0];
      
    if (array.length === 0) {
    console.log("Tablica jest pusta!");
    } else {
    if (argument === "number" && typeof myElement === "number") {
    for (i = 0; i < array.length; i++) {
    sumOfNumbers += array[i];
    }
    console.log(`${sumOfNumbers}`);
    } else if (argument === "string" && typeof myElement === "string") {
    for (i = 0; i < array.length; i++) {
    sumOfStrings = sumOfStrings + array[i];
    }
    console.log( `${sumOfStrings}`);
    } else {
    console.log("Drugi parametr jest nieprawidłowy!");
    }
    }
    }
    //f
    const drivers = [
    {
    name: "Ola",
    lastName: "Pinkiewicz",
    hasCar: true,
    hasDrivingLicence: true,
    },
    {
    name: "Krzysztof",
    lastName: "Pinkiewicz",
    hasCar: false,
    hasDrivingLicence: true,
    },
    {
    name: "Igor",
    lastName: "Pinkiewicz",
    hasCar: false,
    hasDrivingLicence: false,
    },
    {
    name: "Nikola",
    lastName: "Pinkiewicz",
    hasCar: true,
    hasDrivingLicence: false,
    },
    ];
    function transport(arr) {
    for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];
    if (driver.hasCar == true && driver.hasDrivingLicence == true) {
    console.log(
    `Możemy wrócić do domu z ${driver.name} ${driver.lastName}`
    );
    } else if (driver.hasCar == false && driver.hasDrivingLicence == true) {
    console.log(`Może prowadzić ale nie ma auta ${driver.name} ${driver.lastName}`);
    } else if (driver.hasCar == true && driver.hasDrivingLicence == false) {
    console.log(` NIe ma prawka ale ma auto ${driver.name} ${driver.lastName}`);
    } else {
    console.log(`Nie ma prawka ani auta ${driver.name} ${driver.lastName}`);
    }
    }
    }

    //g
    const arrayCar = ["Rover", "Audi", "BMW", "Volvo"];
    function newCar( array, car) {
    display = false;
    for (i = 0; i < array.length; i++) {
    if (array[i] == car) {
    display = true;    
    }
    }   
    if (display == false){
    array.push(car);
    console.log(`Tablica ${array}, została powiekszona o ${car}`);
    } else {
    console.log (`Element ${car} zanjduje sie w ${array}`);
    }
    }
    newCar (arrayCar, "Rover");