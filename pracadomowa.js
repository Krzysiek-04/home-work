 // Zadanie 1
    //a
 
    function sum(a, b, c) {
        return a + b + c 
    };
    const suma = sum(1, 2, 3)
    console.log(suma);
    
    //b
    function traingle (a, h) {
    const result = 1/2 * a * h
        return "Pole trójkąta to ${result} czyli ma on ${a} długość podstawy i ${h} wysokości"
    }

    //c
    function drivelicence (age, hasLicence) {
        return age - hasLicence
    }

    //d 
    function fuelConsumption (burning, distance) {
        return burning / distance
    }

    //e
    function personInfo (name, age, kids)
        return "${name} ma ${age} lata i ${kids} dzieci"
    console.log(personInfo("Ala", 23, 2));

 // Zadanie 2
    //a

    const table = ["A", "B", "C"];
    function returnTable (arr) {
        return arr;
    }

    //b
    const table2 = [1, 2, 3]
    function returnTable2(arr) {
        return table2[1]
    }

    //c
    function returnTabele3(arr) {
        return "Przekazana tablica ma ${arr.length} elementów, a element nr 3 jest ${arr[2]}";
    }
    
    //d
    let table4 = []
    function returntable4 (arr) {
        arr.push("element1", "element2", "element3");
    }
    
    //e
    const person = {
        firstName: "Adam",
        lastName: "Nowak",
        age: 32,
    }

    function showName(person) {
        return person.firstName
    }

    const details = showName(person)
    console.log(detalis)
    
    //f
    const person2 = {
        firstName: "Adam",
        lastName: "Nowak",
        age: 32,
        height: 200,
    }
    function showName2(person2) {
        return "${person.firstName} ${person.lastName} ma ${person.age} lat i ${person2.height} cm wzrostu";
    }

    const detalis2 = showName2(person2)
    console.log(detalis2)

    //g

    const person3 = {
        firstName: "Jan",
        age:  20,
    }
    
    function showName(person3, x) {
        person3.age = x
        return person3
    }
    
    const detalis3 = showName3(person3, 32)
    console.log(detalis3)

    //Zadanie 3
    //a
    function carLicence(age, licence) {
        if((age > 18) && (licence == true)) {
        "Możesz śmiało jeżdzić"
    } else {
        return "Nie ma prawa jazdy"
    }
    }
 
    const carDrive = carLicence(19, true)
     console.log(carDrive)

     //b
    function shoop(info) {
         if (info === "Kup") {
             console.log("Widzę że robisz zakupy")
         } else if (info === Sprzedaj) {
             console.log("Możesz tutaj swobodnie sprzedawać")
         } else {
             console.log("nie wybrałeś żadnej dostępnej opcji - wpisz kup lub sprzedaj")
         }
        }

    //c
    function checkNumber(number) {
        if (number > 0) {
          return `Liczba jest dodatnia`;
        } else if (number < 0) {
          return `Liczba jest ujemna`;
        } else {
          return `Liczba jest równa 0`;
        }
      }

    //d
    function checkNumber2(a) {
        if (a % 3 == 0 && a % 5 == 0) {
            return 'FizzBuzz'
        } else if (a % 5 == 0) {
            return 'Buzz'
        } else if (a % 3 == 0) {
            return 'Fizz'
        }
      }

    const numCheck2 = number2(5)
      console.log(numCheck2)

    //e
    function canIWatch(age, consent) {
        if (age => 15) {
         console.log("Możesz oglądać")
        } else if (age < 15 && consent == true) {
            console.log("Możesz oglądać za zgodą rodziców")
        } else {
            console.log("Nie możesz oglądać")
        }
     }
     console.log(canIWatch(age, consent))

    //f
    function yesOrNo(word) {
        word === true ? console.log("Tak") : console.log("Nie")
    }
    yesOrNo(false)

    //g
    function ifNumber(number) {
        return number % 2 == 0 ? "Parzysta" : "Nieparzysta";
    }

    //Zadanie 4
    //a
    const car = {
        brand: ResizeObserver,
        model: 200,
        prodDate: 1998,
        isCabrio: false
    }

    function carDetails(aCar) {
        if (car.prodDate > 1998) {
            return "Auta jeszcze nie wyprodukowano"
        } else if ((car.prodDate < 1998) && (car.isCabrio == true)) {
            return "Samochód ${car.brand} ${car.model} został wyprodukowany w ${car.prodDate} i jest w Cabrio"
        } else if ((car.prodDate < 1998) && (car.isCabrio == false)) {
            return "Samochód ${car.brand} ${car.model} został wyprodukowany w ${car.prodDate} i nie jest w Cabrio"
        };
    const carMarket = carDetails(car)
    console.log(carMarket)

    //b
    const table5 = []
    const table6 = [1, 2, 3, 4, 5]

    
    function tableCheck(arr) {
        return arr.length === 0
         ? "Pusta tablica"
         : "Tablica ma ${arr.length} elementów"
  }

  //c
  const person4 = {
    name: "Krzysztof",
    surname: "Bezimienny",
    age: 32,
    czyLubieCzytacKsiazki: false,
    maTv: true,
}

const book = {
    title: "Naprawdę?",
    category: "Felietony",
    pages: 650,
}

function readABook(person4, book) {
    if (person4.czyLubieCzytacKsiazki == true) {
        return "Cześć ${person4.name}, polecam Ci przeczytać książkę ${book.title}, ma tylko ${book.pages} strony"
    } else if ((person4.czyLubieCzytacKsiazki == false) && (person4.maTv == true)) {
        return "A to idź oglądać telewizję"
    } else if ((person4.czyLubieCzytacKsiazki == false) && (person4.maTv == false)) {
        return "Nie wiem co Ci zaproponować"
    }
}




