
import addCard from '../card/card';

function addNewFlatCard(parent, data) {
  const newFlat = `<div class="apartments__flat">${addCard(data)}</div>`;
  parent.insertAdjacentHTML('beforeend', newFlat);
}

function showFlats(answer) {
  const apartmentsBody = document.querySelector('.apartments__body');
  const apartmentsButton = document.querySelector('.apartments__button');
  apartmentsBody.innerHTML = '';
  answer.data.forEach((elem) => addNewFlatCard(apartmentsBody, elem));
  if (answer.isEmpty) {
    apartmentsButton.classList.add('apartments__button_hidden');
  }
}

function getData(type, sortDir) {
  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type,
      sortDir,
    }),
  })
    .then((response) => response.json())
    .then((result) => showFlats(result))
    .catch((error) => console.log(`Error: ${error}`));
}

export default function bindClick() {
  let sortPriceDesc = true;
  let sortRoomsDesc = true;
  const apartments = document.querySelector('.apartments');
  apartments.addEventListener('click', (event) => {
    const { target } = event;
    switch (target.dataset.buttonType) {
      case 'price':
        getData('price', sortPriceDesc);
        break;
      case 'price-dir':
        target.classList.toggle('apartments__sort-dir_reflected');
        sortPriceDesc = !sortPriceDesc;
        break;
      case 'rooms':
        getData('rooms', sortRoomsDesc);
        break;
      case 'rooms-dir':
        target.classList.toggle('apartments__sort-dir_reflected');
        sortRoomsDesc = !sortRoomsDesc;
        break;
      case 'show':
        getData('show');
        break;
      default:
        break;
    }
  });
}
