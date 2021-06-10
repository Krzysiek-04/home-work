//Zadanie 1.
// Asynchroniczność kodu polega na tym że operacja jest tylko inicjowana ale program nie czeka na jego ukończenie tylko wykonuje kolejne polecenia.

// Zadanie 2, 3.
fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((response) => {
    console.log("Promise", response.results);
  })
  .catch((error) => {
    console.log("Coś poszło nie tak", error);
  });

// Zadanie 4.
const tablicaPostaci = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return console.log(data);
};
tablicaPostaci();

//Zadanie 5.

const pobierzJednaPostac = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/8");
  const data = await response.json();
  console.log(data);
};
pobierzJednaPostac();
