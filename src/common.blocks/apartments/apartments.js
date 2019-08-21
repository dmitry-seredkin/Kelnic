
import addCard from '../card/card';

function addNewFlatCard(parent, data) {
  const newFlat = `<div class="apartments__flat">${addCard(data)}</div>`;
  parent.insertAdjacentHTML('beforeend', newFlat);
}

function showMoreFlats({ data, isEmpty }) {
  const apartmentsBody = document.querySelector('.apartments__body');
  const apartmentsButton = document.querySelector('.apartments__button');
  data.forEach((elem) => addNewFlatCard(apartmentsBody, elem));
  if (isEmpty) {
    apartmentsButton.classList.add('apartments__button_hidden');
  }
}

export default function getMoreApartments() {
  const apartmentsButton = document.querySelector('.apartments__button');
  apartmentsButton.addEventListener('click', () => {
    console.log('click');
    fetch('http://localhost:3000/more_flats')
      .then((response) => response.json())
      .then((result) => showMoreFlats(result))
      .catch((error) => console.log(`Error: ${error}`));
  });
}
