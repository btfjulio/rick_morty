const apiEndpoint = "https://rickandmortyapi.com/api/character/";
const cardsElement = document.querySelector("#cards");
let data = [];

const getData = async () => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  return data.results;
};

const renderCards = (cards) => {
  cardsElement.innerHTML = "";
  cards.map(renderCard);
};

const renderCard = (card) => {
  const cardStyle = {
    width: "18rem",
    margin: "1rem",
  };
  const div = document.createElement("div");
  div.style = cardStyle;
  div.className = "card";
  div.innerHTML = `
  <img src="${card.image}" class="card-img-top" alt="" />
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">
      Situação: ${card.status}
    </p>
    <p class="card-text">
    Sexo: ${card.gender}
  </p>
  </div>
`;
  cardsElement.appendChild(div);
};

const main = async () => {
  data = await getData();
  renderCards(data);
}

main();
