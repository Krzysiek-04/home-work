let page = 1;
let info = null;

const pobierzPostaci = async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await response.json();
  console.log(data);
  return data;
};

const pobierzDane = async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?${page}`
  );
  const data = await response.json();
  const $listOfCharacters = document.getElementById("numberOfCharacters");
  $listOfCharacters.innerHTML = data.info.count;
};

const createCharacterCard = (data) => {
  const $card = document.createElement("div");
  $card.classList = "card";
  const $img = document.createElement("img");

  $img.src = data.image;
  $img.alt = data.name;

  $card.appendChild($img);
  const $container = document.createElement("div");
  $container.classList = "container";
  const $name = document.createElement("h4");
  $name.innerHTML = data.name;
  const $species = document.createElement("p");
  $species.innerHTML = data.species;
  $container.appendChild($name);
  $container.appendChild($species);
  $card.appendChild($container);
  const $list = document.getElementById("list");
  $list.appendChild($card);
};

const prevPage = async (el) => {
  if (info.prev === null) {
    alert("Jesteś na pierwszej stronie!");
    return;
  }

  page--;

  const characters = await pobierzPostaci();
  info = characters.info;
  const $listOfCharacters = document.getElementById("list");
  $listOfCharacters.innerHTML = "";
  characters.results.forEach(createCharacterCard);
};

const nextPage = async (el) => {
  if (info.next === null) {
    alert("Jesteś na ostatniej stronie.");
    return;
  }

  page++;

  const characters = await pobierzPostaci();
  info = characters.info;
  const $listOfCharacters = document.getElementById("list");
  $listOfCharacters.innerHTML = "";
  characters.results.forEach(createCharacterCard);
};

const mainFunction = async () => {
  const $buttonPrev = document.getElementById("prev");
  const $buttonNext = document.getElementById("next");

  const characters = await pobierzPostaci();
  info = characters.info;

  pobierzDane();

  $buttonPrev.addEventListener("click", prevPage);
  $buttonNext.addEventListener("click", nextPage);
  characters.results.forEach(createCharacterCard);
};

mainFunction();
