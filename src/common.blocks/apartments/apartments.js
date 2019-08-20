
function showMoreFlats() {
  const apartmentsBody = document.querySelector('.apartments__body');
  apartmentsBody.a
}


export default function apartments() {
  const apartmentsButton = document.querySelector('.apartments__button');
  apartmentsButton.addEventListener('click', () => {
    console.log('click');
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((result) => showMoreFlats(result))
      .catch((error) => console.log(`Error: ${error}`));
  });
}
